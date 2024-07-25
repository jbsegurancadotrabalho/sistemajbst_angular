import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment.development';
import * as $ from 'jquery';
import 'select2'; // Adicione esta importação
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-criar-matriculas-faturamento-pj',
  templateUrl: './criar-matriculas-faturamento-pj.component.html',
  styleUrls: ['./criar-matriculas-faturamento-pj.component.css']
})
export class CriarMatriculasFaturamentoPjComponent implements OnInit{
  @ViewChild('planoSelect') planoSelect!: ElementRef;


  mensagem: string = '';
  funcionarios: any[] = [];
  faturamentos: any[] = [];

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private authenticationHelper: AuthenticationHelper,
    private config: NgSelectConfig

  ) {

    this.config.notFoundText = 'Custom not found';
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
        this.formFaturamentoPJ.get('funcionario')?.setValue(selectedValue);
        this.formFaturamentoPJ.get('funcionario')?.updateValueAndValidity();
      });
  
      const lastOptionValue = this.funcionarios.length > 0 ? this.funcionarios[this.funcionarios.length - 1].id : '';
  
      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      selectElement.val(lastOptionValue).trigger('change');
    }
  }
  

  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/turmas/' + id).subscribe({
      next: (data: any) => {
        this.formFaturamentoPJ.patchValue({
          idTurmas: data.idTurmas,
          // Outras atribuições de valores para outros campos
        });
      },
      error: (e) => {
        console.log(e);
      }
    });

    this.httpClient.get('http://financeiro-jb-env.eba-nnqujqph.us-east-1.elasticbeanstalk.com/api/relatório-financeiro-empresa/faturamento-empresa-abertos').subscribe({
      next: (data: any) => {
        this.faturamentos = Object.values(data) as any[];
      },
      error: (e) => {
        console.log(e);
      }
    });

    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/funcionarios/api/funcionarios/todos').subscribe({
      next: (data: any) => {
        this.funcionarios = Object.values(data) as any[];
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  formFaturamentoPJ = new FormGroup({
    idTurmas: new FormControl('', [Validators.required]),
    id: new FormControl(this.authenticationHelper.getUserId(), [Validators.required]), // Obtém o ID do usuário do AuthenticationHelper
    funcionario: new FormControl('', [Validators.required]),
    faturamento: new FormControl('', [Validators.required]),
    venda: new FormControl('', [Validators.required]),
    valor: new FormControl(null, [Validators.required]),
    status: new FormControl('', [Validators.required]),
    tipo_de_pagamento: new FormControl('', [Validators.required]),
    observacoes: new FormControl('', [Validators.required]),

  });

  get form(): any {
    return this.formFaturamentoPJ.controls;
  }


  onSubmit(): void {
    // Obtenha o ID do usuário criptografado da local storage
    const encryptedUserId = this.authenticationHelper.getUserId();
  
    // Verifique se o formulário é válido e se o ID do usuário está presente
    if (this.formFaturamentoPJ.invalid || !encryptedUserId) {
      // Trate a situação de formulário inválido ou ID de usuário ausente conforme necessário
      return;
    }
  
    // Defina o ID do usuário criptografado no campo 'id' do formulário
    this.formFaturamentoPJ.controls['id'].setValue(encryptedUserId);
  
    // Envie os dados do formulário para a API ou realize outras ações necessárias
    // Exemplo: this.matriculaService.criarMatricula(this.formFaturamentoPJ.value);
  
    this.httpClient
      .post('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/matriculas/criar-matriculas-faturamento-pj', this.formFaturamentoPJ.value)
      .subscribe({
        next: (data: any) => {
          this.mensagem = `Matricula realizada com sucesso!`;
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
  
  }
  

