import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment.development';
import * as $ from 'jquery';
import 'select2'; // Adicione esta importação
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-cadastrar-pessoa-fisica',
  templateUrl: './cadastrar-pessoa-fisica.component.html',
  styleUrls: ['./cadastrar-pessoa-fisica.component.css']
})
export class CadastrarPessoaFisicaComponent {
  @ViewChild('planoSelect') planoSelect!: ElementRef;

  mensagem: string = '';
  usuarios: any [] = []
  mensagemErro: string = '';
  formPessoaFisica: FormGroup;


  constructor(
    private httpClient: HttpClient, 
    private formBuilder: FormBuilder,
    private config: NgSelectConfig
    ) {
    this. formPessoaFisica = this.formBuilder.group({  
    pessoafisica: new FormControl('', [Validators.required]),
    rg: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    senha_sistema: new FormControl('', [Validators.required]),
    telefone_1: new FormControl('', [Validators.required]),
    telefone_2: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),

    });

    this.config.notFoundText = 'Não encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  
 ngOnInit(): void {
  this.httpClient.get('http://usuario-jb-env.eba-2udmmd4g.us-east-1.elasticbeanstalk.com/api/usuarios/consultar-usuarios').subscribe({
    next: (data: any) => {
      this.usuarios = Object.values(data) as any[];
    },
    error: (e) => {
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
        this.formPessoaFisica.get('id')?.setValue(selectedValue);
        this.formPessoaFisica.get('id')?.updateValueAndValidity();
      });
  
      const lastOptionValue = this.usuarios.length > 0 ? this.usuarios[this.usuarios.length - 1].id : '';
  
      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      selectElement.val(lastOptionValue).trigger('change');
    }
  }

     get form(): any {
       return this.formPessoaFisica.controls;
     }

     
     onSubmit(): void {
      this.httpClient
      .post('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/pessoa-fisica',
       this.formPessoaFisica.value
     

     )

      .subscribe({
        next: (data: any) => {
          this.mensagem = `Pessoa Fisica cadastrada com sucesso!`;

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


customMatchFn(term: string, item: any) {
  // Implemente a lógica de correspondência personalizada aqui
  return item.email.toLowerCase().includes(term.toLowerCase());
}

}

