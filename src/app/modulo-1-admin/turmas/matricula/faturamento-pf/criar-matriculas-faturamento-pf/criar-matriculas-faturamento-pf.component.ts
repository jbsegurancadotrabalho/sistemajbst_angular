import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment.development';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import * as $ from 'jquery';
import 'select2'; // Adicione esta importação
import { NgSelectConfig } from '@ng-select/ng-select';
@Component({
  selector: 'app-criar-matriculas-faturamento-pf',
  templateUrl: './criar-matriculas-faturamento-pf.component.html',
  styleUrls: ['./criar-matriculas-faturamento-pf.component.css']
})
export class CriarMatriculasFaturamentoPfComponent implements OnInit{
  @ViewChild('planoSelect') planoSelect!: ElementRef;


  mensagem: string = '';
  pessoafisica: any[] = [];
  faturamentos: any[] = [];

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private authenticationHelper: AuthenticationHelper,
    private config: NgSelectConfig
  ) {

    this.config.notFoundText = 'Não encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }


  ngAfterViewInit(): void {
    if (this.planoSelect) {
      const selectElement = $(this.planoSelect.nativeElement) as any;

      selectElement.select2({
        theme: 'bootstrap-5',
      }).on('change', () => {
        const selectedValue = String(selectElement.val());
        this.formFaturamentoPf.get('idpessoafisica')?.setValue(selectedValue);
        this.formFaturamentoPf.get('idpessoafisica')?.updateValueAndValidity();
      });

      const lastOptionValue = this.pessoafisica.length > 0 ? this.pessoafisica[this.pessoafisica.length - 1].id : '';

      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');

      selectElement.val(lastOptionValue).trigger('change');
    }
  }

  
  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/turmas/' + id).subscribe({
      next: (data: any) => {
        this.formFaturamentoPf.patchValue({
          idTurmas: data.idTurmas, // Modificar para usar o campo correto da resposta
          // Outras atribuições de valores para outros campos
        });
      },
      error: (e) => {
        console.log(e);
      }
    });
    this.httpClient.get('http://financeiro-jb-env.eba-nnqujqph.us-east-1.elasticbeanstalk.com/api/relatório-financeiro/pessoa-fisica-aberto').subscribe({
      next: (data: any) => {
        this.faturamentos = Object.values(data) as any[];
      },
      error: (e) => {
        console.log(e);
      }
    });

    this.httpClient.get('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/pessoa-fisica').subscribe({
      next: (data: any) => {
        this.pessoafisica = Object.values(data) as any[];
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
}

formFaturamentoPf = new FormGroup({
  idTurmas: new FormControl('', [Validators.required]),
  id: new FormControl(this.authenticationHelper.getUserId(), [Validators.required]), // Obtém o ID do usuário do AuthenticationHelper
  idpessoafisica: new FormControl('', [Validators.required]),
  idfaturamentopf: new FormControl('', [Validators.required]),
  venda: new FormControl('', [Validators.required]),
  valor: new FormControl(null, [Validators.required]), // Change this to null (number)
  status: new FormControl('', [Validators.required]),
  tipo_de_pagamento: new FormControl('', [Validators.required]),
  observacoes: new FormControl('', [Validators.required]),

});

get form(): any {
  return this.formFaturamentoPf.controls;
}

onSubmit(): void {


 // Obtenha o ID do usuário criptografado da local storage
 const encryptedUserId = this.authenticationHelper.getUserId();
  
 // Verifique se o formulário é válido e se o ID do usuário está presente
 if (this.formFaturamentoPf.invalid || !encryptedUserId) {
   // Trate a situação de formulário inválido ou ID de usuário ausente conforme necessário
   return;
 }

 // Defina o ID do usuário criptografado no campo 'id' do formulário
 this.formFaturamentoPf.controls['id'].setValue(encryptedUserId);

 // Envie os dados do formulário para a API ou realize outras ações necessárias
 // Exemplo: this.matriculaService.criarMatricula(this.formFaturamentoPJ.value);

 this.httpClient
 .post('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/matriculas/criar-matriculas-faturamento-pf', this.formFaturamentoPf.value)
 .subscribe({
   next: (data: any) => {
     this.mensagem = `Matrícula realizada com sucesso!`;
   },
   error: (e) => {
     if (e.error && e.error.message) {
       // Exiba a mensagem de erro da API
       this.mensagem = e.error.message;
     } else {
       // Se não houver uma mensagem de erro específica da API, exiba uma mensagem genérica
       this.mensagem = 'Erro desconhecido ao realizar a matrícula.';
     }
     console.log(e);  // Log da mensagem de erro no console para análise
   },
 });


}

}