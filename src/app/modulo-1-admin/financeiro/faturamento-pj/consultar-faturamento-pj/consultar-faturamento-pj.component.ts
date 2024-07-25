import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ConsultarFaturamento } from 'src/app/models/models_diversos/consultar-faturamentopj';
import { EditarCobranca } from 'src/app/models/financeiro/editar-cobranca.model';
import {  HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-consultar-faturamento-pj',
  templateUrl: './consultar-faturamento-pj.component.html',
  styleUrls: ['./consultar-faturamento-pj.component.css']
})
export class ConsultarFaturamentoPjComponent implements OnInit{

  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  anoAtual: number = (new Date()).getFullYear();
  mesAtual: number = (new Date()).getMonth();
  faturamento: ConsultarFaturamento| null = null;
  faturamentoSelecionado: any = null;
  faturamentopj: any [] = []
  Invoiceheader: any;
  invoiceno: any;
  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  pagina: number = 1; 
  filtro: any = { matriculas: '' }; 
  itensPorPagina = 10;
  paginaAtual: number = 1; 
  faturamentoEmpresaSelecionado: any = null;
  editarCobranca: EditarCobranca | null = null;
  mensagem: string = '';

  pagina1: number = 1; //contador da paginação da consulta
  itensPorPagina1 = 10;
  paginaAtual2: number = 1; 
  
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,

  ) {
  }

  setEditarCobranca(editarCobranca: EditarCobranca): void {
    this.editarCobranca = editarCobranca;
    this.formEditarCobranca.patchValue(this.faturamentoEmpresaSelecionado);

  }

  exibirCobrancas(cobranca: any) {
    this.faturamentoEmpresaSelecionado = cobranca;
  }

  exibirMatriculas(faturamento: any) {
    this.faturamentoSelecionado = faturamento;
                 }


  

  formEditarCobranca = new FormGroup({
  idCobranca: new FormControl('', [Validators.required]),
  responsavelCobranca: new FormControl('', [Validators.required]),
  responsavelCliente: new FormControl('', [Validators.required]),
  data_de_agendamento_pagamento: new FormControl('', [Validators.required]),
  observacoes:  new FormControl('', [Validators.required]),
  assunto:  new FormControl('', [Validators.required]),
        });



  ngOnInit(): void {
    this.consultarFaturamento(this.mesAtual, this.anoAtual);

    
  }


  onDelete(id: number, empresa: string): void {
    if(window.confirm('Deseja realmente excluir o Faturamento selecionado?\n' + empresa)) {
      //enviando uma reqquisição para o serviço de exclusão da API
      this.httpClient.delete('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/faturamento/' + id)
        .subscribe({
          next: (data: any) => {
            this.ngOnInit();
          },
          error: (e) => {
          }
        })
    }
  }
  
  getStatusFatura(item: any): string {
    console.log('faturaFechada:', item.faturaFechada);
    return item.faturaFechada ? 'Fatura Fechada' : 'Fatura Aberta';
  }
  

  getStatusCor(item: any): string {
    console.log(item.faturaFechada); // Verifique se a função está retornando os valores esperados
    return item.faturaFechada ? 'red' : 'green';
  }
  

  getTableRowClass(item: any): string {
    return item.faturaFechada ? 'table-white' : 'table-white';
}



  fecharFaturaManualmente(id: number): void {
    this.httpClient.post(`https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/faturamento/fechar-manualmente/${id}`, {})
      .subscribe({
        next: (response: any) => {
          console.log(response); // Trate a resposta conforme necessário
          alert('Fatura fechada manualmente com sucesso.');
          // Atualize a lista de faturamentos após o fechamento manual
          this.ngOnInit();
        },
        error: (error) => {
          console.error(error); // Trate o erro conforme necessário
          alert('Erro ao fechar manualmente a fatura: ' + error.message);
        }
      });
  }

  abrirFaturaManualmente(id: number): void {
    this.httpClient.post(`https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/faturamento/abrir-manualmente/${id}`, {})
      .subscribe({
        next: (response: any) => {
          console.log(response); // Trate a resposta conforme necessário
          alert('Fatura aberta manualmente com sucesso.');
          // Atualize a lista de faturamentos após a abertura manual
          this.ngOnInit();
        },
        error: (error) => {
          console.error(error); // Trate o erro conforme necessário
          alert('Erro ao abrir manualmente a fatura: ' + error.message);
        }
      });
  }
  get form(): any {
    return this.formEditarCobranca.controls;

  }
  onSubmit(): void {
    if (this.formEditarCobranca.valid) {
      const dataDeAgendamentoPagamentoRaw = this.formEditarCobranca.value.data_de_agendamento_pagamento;
  
      if (dataDeAgendamentoPagamentoRaw !== null && dataDeAgendamentoPagamentoRaw !== undefined) {
        // Formate as datas para o formato ISO 8601
        const dataDeAgendamentoPagamento = this.formatDate(dataDeAgendamentoPagamentoRaw);
  
        this.formEditarCobranca.patchValue({
          data_de_agendamento_pagamento: dataDeAgendamentoPagamento,
        });
  
        // Enviar o formulário para o endpoint
        this.httpClient
          .put('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/cobranca/editar-cobranca', this.formEditarCobranca.value)
          .subscribe({
            next: (data: any) => {
              const responsavelCobranca = data.responsavelCobranca; // Assuming this is how you get the faturamento number from the response
              this.mensagem = `Cobrança realizada por ${responsavelCobranca} editado com sucesso!`;
              // Limpar o formulário ou realizar ações adicionais, se necessário
              this.formEditarCobranca.reset();
            },
            error: (e) => {
              console.log(e.error);
              // Realizar ações de tratamento de erro, se necessário
            },
          });
      } else {
        console.error('Data de agendamento de pagamento é null ou undefined.');
        // Trate conforme necessário, exiba mensagem de erro ou realize outras ações.
      }
    } else {
      // Realize alguma ação ou exiba uma mensagem de erro se o formulário for inválido
    }
  }
  

  
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toISOString(); // Formatar para ISO 8601
    } else {
      console.error('Data inválida:', dateString);
      return ''; // Ou outra ação apropriada
    }
  }
  
  
  consultarFaturamento(mes: number, ano: number): void {
    const params = new HttpParams()
      .set('mes', (mes + 1).toString())  // Ensure to convert to string
      .set('ano', ano.toString());
  
    const url = 'http://financeiro-jb-env.eba-nnqujqph.us-east-1.elasticbeanstalk.com/api/relatório-financeiro-empresa/consultar-faturamento-por-mes-e-ano';
  
    this.httpClient.get(url, { params }).subscribe({
      next: (data: any) => {
        this.faturamentopj = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  

selecionarMes(mes: number): void {
  this.mesAtual = mes;
  this.consultarFaturamento(this.mesAtual, this.anoAtual);
}




get periodoAtual(): string {
  return `${this.meses[this.mesAtual]} de ${this.anoAtual}`;
}

mudarMes(delta: number): void {
  this.mesAtual += delta;

  if (this.mesAtual > 11) {
    this.mesAtual = 0;
    this.anoAtual++;
  } else if (this.mesAtual < 0) {
    this.mesAtual = 11;
    this.anoAtual--;
  }

  this.consultarFaturamento(this.mesAtual, this.anoAtual);
}

  }






  

