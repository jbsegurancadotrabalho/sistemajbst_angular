
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ConsultarFaturamentoPf } from 'src/app/models/models_diversos/consultar-faturamentopf';
import { EditarCobranca } from 'src/app/models/financeiro/editar-cobranca.model';
import {  HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-consultar-faturamento-pf',
  templateUrl: './consultar-faturamento-pf.component.html',
  styleUrls: ['./consultar-faturamento-pf.component.css']
})
export class ConsultarFaturamentoPfComponent  implements OnInit{


  
  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  anoAtual: number = (new Date()).getFullYear();
  mesAtual: number = (new Date()).getMonth();
  faturamento: ConsultarFaturamentoPf| null = null;
  faturamentoSelecionado: any = null;
  faturamentopf: any [] = []
  Invoiceheader: any;
  invoiceno: any;
  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  pagina: number = 1; 
  filtro: any = { matriculas: '' }; 
  itensPorPagina = 10;
  paginaAtual: number = 1; 
  faturamentoPessoaFisicaSelecionado: any = null;
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


    
  ngOnInit(): void {
    this.consultarFaturamento(this.mesAtual, this.anoAtual);
    
  }

  consultarFaturamento(mes: number, ano: number): void {
    const url = `http://financeiro-jb-env.eba-nnqujqph.us-east-1.elasticbeanstalk.com/api/relatório-financeiro/api/relatorio-financeiro/faturamento/mes-ano?mes=${mes + 1}&ano=${ano}`;
  
    this.httpClient.get(url).subscribe({
      next: (data: any) => {
        this.faturamentopf = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  
  
  setEditarCobranca(editarCobranca: EditarCobranca): void {
    this.editarCobranca = editarCobranca;
    this.formEditarCobranca.patchValue(this.faturamentoPessoaFisicaSelecionado);

  }

  exibirCobrancas(cobranca: any) {
    this.faturamentoPessoaFisicaSelecionado = cobranca;
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






  onDelete(id: number, pessoafisica: string): void {
    if(window.confirm('Deseja realmente excluir o Faturamento selecionado?\n' + pessoafisica)) {
      //enviando uma reqquisição para o serviço de exclusão da API
      this.httpClient.delete('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/faturamentopf/' + id)
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
    return item.faturaFechada ? 'Fatura Fechada' : 'Fatura Aberta';
  }

  getStatusCor(item: any): string {
    console.log(item.faturaFechada); // Verifique se a função está retornando os valores esperados
    return item.faturaFechada ? 'red' : 'green';
  }
  

  getTableRowClass(item: any): string {
    return item.faturaFechada ? 'table-fatura-fechada' : 'table-fatura-aberta';
  }
  




  fecharFatura(idFaturamento: String): void {
    this.httpClient.put(`https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/faturamentopf/fechar-fatura/${idFaturamento}`, {})
      .subscribe({
        next: (data: any) => {
          console.log('Fatura fechada com sucesso.');
          // Atualize os dados conforme necessário
          this.ngOnInit();
        },
        error: (e) => {
          console.error('Erro ao fechar fatura:', e);
        }
      });
  }

  reabrirFatura(idFaturamento: String): void {
    this.httpClient.put(`https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/faturamentopf/reabrir-fatura/${idFaturamento}`, {})
      .subscribe({
        next: (data: any) => {
          console.log('Fatura reaberta com sucesso.');
          // Atualize os dados conforme necessário
          this.ngOnInit();
        },
        error: (e) => {
          console.error('Erro ao reabrir fatura:', e);
        }
      });
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
  
   
 
  



get form(): any {
  return this.formEditarCobranca.controls;
}

get periodoAtual(): string {
  return `${this.meses[this.mesAtual]} de ${this.anoAtual}`;
}



selecionarMes(mes: number): void {
  this.mesAtual = mes;
  this.consultarFaturamento(this.mesAtual, this.anoAtual);
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

