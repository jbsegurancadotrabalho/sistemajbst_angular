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
  selector: 'app-cadastrar-faturamento-pf',
  templateUrl: './cadastrar-faturamento-pf.component.html',
  styleUrls: ['./cadastrar-faturamento-pf.component.css']
})
export class CadastrarFaturamentoPfComponent {
  @ViewChild('planoSelect') planoSelect!: ElementRef;

  mensagem: string = '';

  formFaturamentopf: FormGroup;

  pessoafisica: any [] = []


  
  ngOnInit(): void {

    this.httpClient.get('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/pessoa-fisica')
    .subscribe({ //capturando o retorno da API
      next: (data) => { //recebe o retorno de sucesso da API
        //armazenar os dados na variável
        this.pessoafisica = data as any[];
      },
      error: (e) => { //recebe o retorno de erro da API
        console.log(e);
      }
    });
    
  }

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private config: NgSelectConfig
    ) {
    this.formFaturamentopf = this.formBuilder.group({
      idpessoafisica: new FormControl('', [Validators.required]),
      data_inicio: new FormControl('', [Validators.required]),
      data_fim: new FormControl('', [Validators.required]),
      venda: new FormControl('', [Validators.required]),
      notafiscal: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      comprador: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      responsavelfinanceiro: new FormControl('', [Validators.required]),
      telefonefinanceiro: new FormControl('', [Validators.required]),
      whatsapp: new FormControl('', [Validators.required]),
      emailfinanceiro: new FormControl('', [Validators.required, Validators.email]),
      observacoes: new FormControl('', [Validators.required]),
      forma_de_pagamento: new FormControl('', [Validators.required]),
      data_de_pagamento: new FormControl('', [Validators.required]),
      parcelas: new FormControl('', [Validators.required]),


    });

    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  get form(): any {
    return this.formFaturamentopf.controls;
  }

  ngAfterViewInit(): void {
    if (this.planoSelect) {
      const selectElement = $(this.planoSelect.nativeElement) as any;
  
      selectElement.select2({
        theme: 'bootstrap-5',
      }).on('change', () => {
        const selectedValue = String(selectElement.val());
        this.formFaturamentopf.get('funcionario')?.setValue(selectedValue);
        this.formFaturamentopf.get('funcionario')?.updateValueAndValidity();
      });
  
      const lastOptionValue = this.pessoafisica.length > 0 ? this.pessoafisica[this.pessoafisica.length - 1].id : '';
  
      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      selectElement.val(lastOptionValue).trigger('change');
    }
  }

  onSubmit(): void {
    if (this.formFaturamentopf.valid) {
      const dataInicio = this.formatDate(this.formFaturamentopf.value.data_inicio);
      const dataFim = this.formatDate(this.formFaturamentopf.value.data_fim);
      const data_de_Pagamento = this.formatDate(this.formFaturamentopf.value.data_de_pagamento);

      this.formFaturamentopf.patchValue({
        data_inicio: dataInicio,
        data_fim: dataFim,
        data_de_pagamento: data_de_Pagamento

      });

      // Enviar o formulário para o endpoint
      this.httpClient
        .post('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/faturamentopf', this.formFaturamentopf.value)
        .subscribe({
          next: (data: any) => {
            this.mensagem = `Faturamento cadastrado com sucesso!`;
            // Limpar o formulário ou realizar ações adicionais, se necessário
            this.formFaturamentopf.reset();
          },
          error: (e) => {
            console.log(e.error);
            if (e.error && e.error.message) {
              // Exiba a mensagem de erro da API
              this.mensagem = e.error.message;
            } else {
              // Se não houver uma mensagem de erro específica da API, exiba uma mensagem genérica
              this.mensagem = 'Erro desconhecido ao realizar cadastro de faturamento.';
            }
          }
        });

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

  printPage() {
    window.print();
  }
}
