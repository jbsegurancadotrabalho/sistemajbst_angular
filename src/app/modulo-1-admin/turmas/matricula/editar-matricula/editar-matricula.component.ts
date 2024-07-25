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
  selector: 'app-editar-matricula',
  templateUrl: './editar-matricula.component.html',
  styleUrls: ['./editar-matricula.component.css']
})
export class EditarMatriculaComponent implements OnInit {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  turmas: any[] = [];

  mensagem: string = '';
  funcionarios: any[] = [];
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


  ngOnInit(): void {
    //capturando o id enviado na URL
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/matriculas/' + id)
      .subscribe({
        next: (data: any) => {
          //preencher o formulário com os dados do produto obtido
          this.EditarMatriculas.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })

      this.httpClient.get('http://turmas-jb-env.eba-gupb3gze.us-east-1.elasticbeanstalk.com/api/turmas/abertas')
      .subscribe({ //capturando o retorno da API
        next: (data) => { //recebe o retorno de sucesso da API
          //armazenar os dados na variável
          this.turmas = data as any[];
        },
        error: (e) => { //recebe o retorno de erro da API
          console.log(e);
        }
      });
      }

  ngAfterViewInit(): void {
    if (this.planoSelect) {
      const selectElement = $(this.planoSelect.nativeElement) as any;
  
      selectElement.select2({
        theme: 'bootstrap-5',
      }).on('change', () => {
        const selectedValue = String(selectElement.val());
        this.EditarMatriculas.get('idMatricula')?.setValue(selectedValue);
        this.EditarMatriculas.get('idMatricula')?.updateValueAndValidity();
      });
  
      const lastOptionValue = this.funcionarios.length > 0 ? this.funcionarios[this.funcionarios.length - 1].id : '';
  
      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      selectElement.val(lastOptionValue).trigger('change');
    }
  }
  


  EditarMatriculas = new FormGroup({
    idTurmas: new FormControl('', [Validators.required]),
    idMatricula: new FormControl(this.authenticationHelper.getUserId(), [Validators.required]), // Obtém o ID do usuário do AuthenticationHelper
    venda: new FormControl('', [Validators.required]),
    valor: new FormControl(null, [Validators.required]),
    status: new FormControl('', [Validators.required]),
    tipo_de_pagamento: new FormControl('', [Validators.required]),
    observacoes: new FormControl('', [Validators.required]),

  });

  get form(): any {
    return this.EditarMatriculas.controls;
  }



// Move this block to the top of the class
onSubmit(): void {
  const url = `https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/matriculas/${this.EditarMatriculas.controls['idMatricula'].value}`;
  
  this.httpClient
    .put(url, this.EditarMatriculas.value)
    .subscribe({
      next: (data: any) => {
        this.mensagem = `Matrícula atualizada com sucesso!`;
        // Do any additional logic after successful update
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
      },
    });
}




  customMatchFn(term: string, item: any) {
    // Implemente a lógica de correspondência personalizada aqui
    return item.numeroTurma.toLowerCase().includes(term.toLowerCase());
}


  
  }
  


