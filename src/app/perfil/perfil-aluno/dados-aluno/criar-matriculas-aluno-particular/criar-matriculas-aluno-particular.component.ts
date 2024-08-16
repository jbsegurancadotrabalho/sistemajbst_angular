import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment.development';
import 'select2'; // Adicione esta importação
import { NgSelectConfig } from '@ng-select/ng-select';
import { ConsultarMatriculas } from 'src/app/models/models_diversos/consultar-matriculas.model';
import { HttpErrorResponse } from '@angular/common/http';
import { FilterPipe } from 'ngx-filter-pipe';
import { CadastrarEvidencias } from 'src/app/models/matriculas/cadastrar-evidencias.model';
import * as $ from 'jquery';

import { Router } from '@angular/router';


@Component({
  selector: 'app-criar-matriculas-aluno-particular',
  templateUrl: './criar-matriculas-aluno-particular.component.html',
  styleUrls: ['./criar-matriculas-aluno-particular.component.css']
})
export class CriarMatriculasAlunoParticularComponent implements OnInit {

  @ViewChild('planoSelect') planoSelect!: ElementRef;


  mensagem: string = '';
  pessoafisica: any[] = [];
  faturamentos: any[] = [];
  userId: string | null = null;




  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private authenticationHelper: AuthenticationHelper,
    private config: NgSelectConfig

  ) {

    this.config.notFoundText = 'Não Encontrado';
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
        this.formFaturamentoPJ.get('idpessoafisica')?.setValue(selectedValue);
        this.formFaturamentoPJ.get('idpessoafisica')?.updateValueAndValidity();
      });

      const lastOptionValue = this.pessoafisica.length > 0 ? this.pessoafisica[this.pessoafisica.length - 1].id : '';

      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');

      selectElement.val(lastOptionValue).trigger('change');
    }
  }

  

  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.httpClient.get('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/turmas/' + id).subscribe({
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


    const encryptedUserId = localStorage.getItem('encryptedUserId');
    if (encryptedUserId !== null) {
      // Descriptografa o ID do usuário (substitua esta lógica pela sua função de descriptografia)
      this.userId = this.decryptData(encryptedUserId, environment.cryptoKey);
    }

    if (this.userId !== null) {
      // Se tivermos o ID do usuário, fazemos a solicitação HTTP
      this.obterEmpresas(this.userId);
    } else {
      console.error('ID do usuário não encontrado na localStorage.');
    }
  }


  obterEmpresas(userId: string): void {
    const endpoint = `http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/pessoa-fisica/usuario/${userId}`;

    this.httpClient.get<any[]>(endpoint)
      .subscribe({
        next: (data) => {
          // Realize a lógica necessária com os dados obtidos
          this.pessoafisica = data;
          console.log('Matrículas:', this.pessoafisica);
        },
        error: (e) => {
          console.error('Erro ao obter matrículas:', e);
        }
      });


        const encryptedUserId = localStorage.getItem('encryptedUserId');
        if (encryptedUserId) {
          // Descriptografa o ID do usuário (substitua esta lógica pela sua função de descriptografia)
          this.userId = this.decryptData(encryptedUserId, environment.cryptoKey);
        } else {
          console.error('ID do usuário não encontrado na localStorage.');
          return;
        }
      
        // Se tivermos o ID do usuário, fazemos a solicitação HTTP para obter faturamentos em aberto
        if (this.userId) {
          this.obterFaturamentosEmAberto(this.userId);
        }
      }
      
      obterFaturamentosEmAberto(userId: string): void {
        const endpoint = `http://financeiro-jb-env.eba-nnqujqph.us-east-1.elasticbeanstalk.com/api/relatório-financeiro/usuario/${userId}/faturas-abertas`;
      
        this.httpClient.get<any[]>(endpoint)
          .subscribe({
            next: (data) => {
              // Realize a lógica necessária com os dados obtidos
              console.log('Faturamentos em aberto:', data);
              // Assuma que 'data' é uma matriz de faturamentos em aberto
              // Atualize sua variável 'faturamentos' com os dados obtidos, se necessário
              this.faturamentos = data;
            },
            error: (e) => {
              console.error('Erro ao obter faturamentos em aberto:', e);
            }
          });
      }
      

  formFaturamentoPJ = new FormGroup({
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
      .post('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/matriculas/criar-matriculas-faturamento-pf', this.formFaturamentoPJ.value)
     
     
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
  

     
  decryptData(data: string, key: string): string {
    try {
      const bytes = CryptoJS.AES.decrypt(data, key);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedData;
    } catch (error) {
      console.error('Erro ao descriptografar dados:', error);
      return ''; // ou outra ação apropriada em caso de erro
    }

  }
  
  }
  

