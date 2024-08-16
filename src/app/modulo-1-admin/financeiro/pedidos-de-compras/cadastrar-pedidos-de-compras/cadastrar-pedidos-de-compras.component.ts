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
  selector: 'app-cadastrar-pedidos-de-compras',
  templateUrl: './cadastrar-pedidos-de-compras.component.html',
  styleUrls: ['./cadastrar-pedidos-de-compras.component.css']
})
export class CadastrarPedidosDeComprasComponent implements OnInit, AfterViewInit {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  mensagem: string = '';
  empresas: any [] = [];
  formPedidos: FormGroup;

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private config: NgSelectConfig
  ) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';

    this.formPedidos = this.formBuilder.group({
      idEmpresa: ['', Validators.required],
      numerodopedido: ['', Validators.required],
      venda: ['', Validators.required],
      notafiscal: ['', Validators.required],
      valor: ['', Validators.required],
      creditos: ['', Validators.required],
      comprador: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      responsavelfinanceiro: ['', Validators.required],
      telefonefinanceiro: ['', Validators.required],
      whatsapp: ['', Validators.required],
      emailfinanceiro: ['', Validators.required],
      data_de_pagamento: ['', Validators.required],
      parcelas: ['', Validators.required],
      forma_de_pagamento: ['', Validators.required],
      observacoes: ['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
    if (this.planoSelect) {
      const selectElement = $(this.planoSelect.nativeElement) as any;

      selectElement.select2({
        theme: 'bootstrap-5',
      }).on('change', () => {
        const selectedValue = String(selectElement.val());
        this.formPedidos.get('idEmpresa')?.setValue(selectedValue);
        this.formPedidos.get('idEmpresa')?.updateValueAndValidity();
      });

      const lastOptionValue = this.empresas.length > 0 ? this.empresas[this.empresas.length - 1].id : '';

      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');

      selectElement.val(lastOptionValue).trigger('change');
    }
  }

  ngOnInit(): void {
    this.httpClient.get('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/empresa')
      .subscribe({
        next: (data) => {
          this.empresas = data as any[];
        },
        error: (e) => {
          console.log(e);
        }
      });
  }

  get form(): any {
    return this.formPedidos.controls;
  }

  onSubmit(): void {
    if (this.formPedidos.valid) {
      // Formate as datas para o formato ISO 8601
      const dataDePagamento = this.formatDate(this.formPedidos.value.data_de_pagamento);


      // Atualize as datas no objeto do formulário
      this.formPedidos.patchValue({
        data_de_pagamento: dataDePagamento,
    

      });
  
      // Enviar o formulário para o endpoint
      this.httpClient
        .post('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/pedidos-de-compras', this.formPedidos.value)
        .subscribe({
          next: (data: any) => {
            this.mensagem = `Pedidos de Compras cadastrado com sucesso!`;
            // Limpar o formulário ou realizar ações adicionais, se necessário
            this.formPedidos.reset();
          },
          error: (e) => {
            console.log(e.error);
            // Realizar ações de tratamento de erro, se necessário
          }
        });
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

}