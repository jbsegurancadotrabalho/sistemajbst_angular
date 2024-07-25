import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment.development';
import * as $ from 'jquery';
import 'select2'; // Adicione esta importação
import { NgSelectConfig } from '@ng-select/ng-select';


@Component({
  selector: 'app-criar-cobranca-empresa-pedidos',
  templateUrl: './criar-cobranca-empresa-pedidos.component.html',
  styleUrls: ['./criar-cobranca-empresa-pedidos.component.css']
})
export class CriarCobrancaEmpresaPedidosComponent {




  mensagem: string = '';
  





  constructor(
    private httpClient: HttpClient, 
    private activatedRoute: ActivatedRoute

    ) {
  }


  ngOnInit(): void {
    //capturando o id enviado na URL
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/pedidos-de-compras/' + id)
      .subscribe({
        next: (data: any) => {
          this.formCobranca.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })
  }

  formCobranca = new FormGroup({
    idPedidos: new FormControl('', [Validators.required]),
    responsavelCobranca : new FormControl('', [Validators.required]),
    responsavelCliente : new FormControl('', [Validators.required]),
    data_de_agendamento_pagamento : new FormControl('', [Validators.required]),
    assunto : new FormControl('', [Validators.required]),
    observacoes : new FormControl('', [Validators.required]),
      });


      get form(): any {
        return this.formCobranca.controls;
      }
      onSubmit(): void {
        if (this.formCobranca.valid) {
          // Formate as datas para o formato ISO 8601
          this.formatDates();
    
          // Enviar o formulário para o endpoint
          this.httpClient
            .post('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/cobranca/criar-cobranca-pedidos', this.formCobranca.value)
            .subscribe({
              next: (data: any) => {
                this.mensagem = `Cobrança cadastrada com sucesso!`;
                // Limpar o formulário ou realizar ações adicionais, se necessário
                this.formCobranca.reset();
              },
              error: (e) => {
                console.log(e.error);
                if (e.error && e.error.message) {
                  // Exiba a mensagem de erro da API
                  this.mensagem = e.error.message;
                } else {
                  // Se não houver uma mensagem de erro específica da API, exiba uma mensagem genérica
                  this.mensagem = 'Erro desconhecido ao realizar a matrícula.';
                }
              }
            });
    
        } else {
          // Realize alguma ação ou exiba uma mensagem de erro se o formulário for inválido
        }
      }
      
  
  
  
  formatDates(): void {
    this.formCobranca.patchValue({
    
      data_de_agendamento_pagamento : this.formCobranca.value.data_de_agendamento_pagamento 
  ? this.formatDate(this.formCobranca.value.data_de_agendamento_pagamento )
  : ''


    });
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

  printPage(): void {
    window.print();
  }
}
