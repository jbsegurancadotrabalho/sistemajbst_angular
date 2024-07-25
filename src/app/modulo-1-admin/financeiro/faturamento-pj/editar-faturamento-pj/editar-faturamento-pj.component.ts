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
  selector: 'app-editar-faturamento-pj',
  templateUrl: './editar-faturamento-pj.component.html',
  styleUrls: ['./editar-faturamento-pj.component.css']
})
export class EditarFaturamentoPjComponent implements OnInit {
  @ViewChild('planoSelect') planoSelect!: ElementRef;

  mensagem: string = '';
  formFaturamentopj: FormGroup;
  empresas: any [] = []





  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private config: NgSelectConfig

  ) {
    this.formFaturamentopj = this.formBuilder.group({
      idfaturamento: new FormControl('', [Validators.required]),
      venda: new FormControl('', [Validators.required]),
      notafiscal: new FormControl(''),
      valor: new FormControl('', [Validators.required]),
      comprador: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      responsavelfinanceiro: new FormControl('', [Validators.required]),
      telefonefinanceiro: new FormControl('', [Validators.required]),
      whatsapp: new FormControl('', [Validators.required]),
      emailfinanceiro: new FormControl('', [Validators.required, Validators.email]),
      observacoes: new FormControl('', [Validators.required]),
      data_de_pagamento: new FormControl('', [Validators.required]),
      forma_de_pagamento: new FormControl('', [Validators.required]),
      parcelas: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/faturamento/' + id)
      .subscribe({
        next: (data: any) => {
          // Verifique se os campos esperados estão presentes nos dados antes de preencher o formulário
          if (data && data.idfaturamento && data.empresa) {
            // Adicione outros campos necessários da mesma maneira
            // Preencher o formulário com os dados do produto obtido
            this.formFaturamentopj.patchValue({
              idfaturamento: data.idfaturamento,
              data_inicio: data.data_inicio,
              data_fim: data.data_fim,
              venda: data.venda,
              notafiscal: data.notafiscal,
              valor: data.valor,
              comprador: data.comprador,
              telefone: data.telefone,
              email: data.email,
              responsavelfinanceiro: data.responsavelfinanceiro,
              telefonefinanceiro: data.telefonefinanceiro,
              emailfinanceiro: data.emailfinanceiro,
              whatsapp: data.whatsapp,
              parcelas: data.parcelas,
              forma_de_pagamento: data.forma_de_pagamento,
              observacoes: data.observacoes,
              idEmpresa: data.empresa.idEmpresa // Aqui estamos preenchendo o idEmpresa diretamente
            });
  
            // Se necessário, preencher os campos específicos da empresa no formulário
            const empresaFormGroup = this.formFaturamentopj.get('empresa') as FormGroup;
            empresaFormGroup.patchValue({
              razaosocial: data.empresa.razaosocial,
              nomefantasia: data.empresa.nomefantasia,
              cnpj: data.empresa.cnpj
              // Adicione outros campos específicos da empresa aqui
            });
          } else {
            console.error('Dados inválidos recebidos da API:', data);
          }
        },
        error: (e) => {
          console.log(e);
        }
      });
  
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
    return this.formFaturamentopj.controls;
  }

  onSubmit(): void {
    if (this.formFaturamentopj.invalid) {
      // Se o formulário for inválido, marque todos os campos como tocados para exibir mensagens de erro
      this.formFaturamentopj.markAllAsTouched();
      return;
    }
  
    // Formate as datas para o formato ISO 8601
    const dataInicio = this.formatDate(this.formFaturamentopj.value.data_inicio);
    const dataFim = this.formatDate(this.formFaturamentopj.value.data_fim);
    const data_de_Pagamento = this.formatDate(this.formFaturamentopj.value.data_de_pagamento);


 
    // Atualize os valores formatados de data no formulário
    this.formFaturamentopj.patchValue({
      data_inicio: dataInicio,
      data_fim: dataFim,
      data_de_pagamento: data_de_Pagamento
    });
  
    // Enviar o formulário para o endpoint
    this.httpClient.put('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/faturamento', this.formFaturamentopj.value)
      .subscribe({
        next: (data: any) => {
          // Resetar o formulário e exibir mensagem de sucesso
          this.formFaturamentopj.reset();
          this.mensagem = 'Faturamento Atualizado com Sucesso!';
        },
        error: (error) => {
          console.error('Erro ao atualizar faturamento:', error);
          // Tratamento de erro adicional, se necessário
          // Exiba mensagens de erro, registre ou manipule de acordo com a sua necessidade
        }
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

  printPage() {
    window.print();
  }
}
