import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import { CadastrarTurmas } from 'src/app/models/models_diversos/cadastrar-turmas.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ConsultarPedidos } from 'src/app/models/models_diversos/consultar-pedidos.model';
import { EditarCobranca } from 'src/app/models/financeiro/editar-cobranca.model';
import {  HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-consultar-pedidos-de-compras',
  templateUrl: './consultar-pedidos-de-compras.component.html',
  styleUrls: ['./consultar-pedidos-de-compras.component.css']
})
export class ConsultarPedidosDeComprasComponent implements OnInit, AfterViewInit  {
 @ViewChild('content') popupview!: ElementRef;

 meses: string[] = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

anoAtual: number = (new Date()).getFullYear();
mesAtual: number = (new Date()).getMonth();
 mensagem: string = '';
 pedido: ConsultarPedidos | null = null;
 pedidoSelecionado: any = null;
 matriculas: any [] = []
 Invoiceheader: any;
 invoiceno: any;
 dtoptions: DataTables.Settings = {};
 dtTrigger: Subject<any> = new Subject<any>();
 pagina: number = 1; 
 filtro: any = { matriculas: '' }; 
 itensPorPagina = 10;
 paginaAtual: number = 1; 
 pedidos: any [] = []
 pedidosEmpresaSelecionado: any = null;
 editarCobranca: EditarCobranca | null = null;

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
    this.formEditarCobranca.patchValue(this.pedidosEmpresaSelecionado);

  }

  exibirCobrancas(cobranca: any) {
    this.pedidosEmpresaSelecionado = cobranca;
  }

  exibirPedidos(pedido: any) {
    this.pedidoSelecionado = pedido;
                 }

  
  ngAfterViewInit(): void {
    $(document).ready(() => {
      const table = $('#myTable').DataTable({
        
        language: {
          url: 'https://cdn.datatables.net/plug-ins/1.11.6/i18n/Portuguese-Brasil.json'
        }
      });
      
    });
  }



  consultarPedidos(mes: number, ano: number): void {
    const params = new HttpParams()
      .set('mes', (mes + 1).toString())  // Ensure to convert to string
      .set('ano', ano.toString());
  
    const url = 'http://financeiro-jb-env.eba-nnqujqph.us-east-1.elasticbeanstalk.com/api/relatório-financeiro-empresa/consultar-pedidos-por-mes-e-ano';

    this.httpClient.get(url, { params }).subscribe({
      next: (data: any) => {
        this.pedidos = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  

  ngOnInit(): void {

    this.consultarPedidos(this.mesAtual, this.anoAtual);


    //recebe o retorno de sucesso da API
        this.dtTrigger.next(null);

    this.dtoptions = {
      pagingType: 'full_numbers',
      searching: true,
      lengthChange: false,
      language: {
        searchPlaceholder: 'Text Customer'
      }
    };
    
  }


  onDelete(idPedidos: number, nomefantasia: string): void {
    if(window.confirm('Deseja realmente excluir o Pedidos selecionado?\n' + nomefantasia)) {
      //enviando uma reqquisição para o serviço de exclusão da API
      this.httpClient.delete('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/pedidos-de-compras/' + idPedidos)
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
    console.log('pedidoFechado:', item.pedidoFechado);
    return item.pedidoFechado ? 'Pedido Fechado' : 'Pedido Aberto';
  }
  

  getStatusCor(item: any): string {
    console.log(item.pedidoFechado); // Verifique se a função está retornando os valores esperados
    return item.pedidoFechado ? 'red' : 'green';
  }
  

  getTableRowClass(item: any): string {
    return item.pedidoFechado ? 'table-white' : 'table-white';
}
  abrirPedido(idPedido: string): void {
    this.httpClient
      .put(`https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/pedidos-de-compras/reabrir/${idPedido}`, {})
      .subscribe({
        next: (data: any) => {
          this.mensagem = 'Pedido aberto com sucesso!';
        },
        error: (e) => {
          console.log(e.error);
          if (e.error && e.error.message) {
            this.mensagem = e.error.message;
          } else {
            this.mensagem = 'Erro desconhecido ao abrir o pedido.';
          }
        }
      });
  }

  formEditarCobranca = new FormGroup({
    idCobranca: new FormControl('', [Validators.required]),
    responsavelCobranca: new FormControl('', [Validators.required]),
    responsavelCliente: new FormControl('', [Validators.required]),
    data_de_agendamento_pagamento: new FormControl('', [Validators.required]),
    observacoes:  new FormControl('', [Validators.required]),
    assunto:  new FormControl('', [Validators.required]),
          });

  fecharPedido(idPedido: string): void {
    this.httpClient
      .put(`https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/pedidos-de-compras/fechar/${idPedido}`, {})
      .subscribe({
        next: (data: any) => {
          this.mensagem = 'Pedido fechado com sucesso!';
        },
        error: (e) => {
          console.log(e.error);
          if (e.error && e.error.message) {
            this.mensagem = e.error.message;
          } else {
            this.mensagem = 'Erro desconhecido ao fechar o pedido.';
          }
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
  get periodoAtual(): string {
    return `${this.meses[this.mesAtual]} de ${this.anoAtual}`;
  }
  
  
  
  selecionarMes(mes: number): void {
    this.mesAtual = mes;
    this.consultarPedidos(this.mesAtual, this.anoAtual);
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
  
    this.consultarPedidos(this.mesAtual, this.anoAtual);
  }
  
    }


