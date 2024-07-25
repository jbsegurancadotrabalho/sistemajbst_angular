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
  selector: 'app-editar-pessoa-fisica',
  templateUrl: './editar-pessoa-fisica.component.html',
  styleUrls: ['./editar-pessoa-fisica.component.css']
})
export class EditarPessoaFisicaComponent {
  @ViewChild('planoSelect') planoSelect!: ElementRef;

  mensagem: string = '';
  usuarios: any [] = []
  mensagemErro: string = '';
  formPessoaFisica: FormGroup;
  


  constructor(private httpClient: HttpClient, 
  private formBuilder: FormBuilder, 
  private activatedRoute: ActivatedRoute,
  private config: NgSelectConfig
) {
    this. formPessoaFisica = this.formBuilder.group({  
	idpessoafisica: new FormControl('', [Validators.required]),
    pessoafisica: new FormControl('', [Validators.required]),
    rg: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    telefone_1: new FormControl('', [Validators.required]),
    telefone_2: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    senha_sistema: new FormControl('', [Validators.required]), 
    id: new FormControl('', [Validators.required]),
    });

    this.config.notFoundText = 'Não encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';

  }


 
  ngOnInit(): void {
    //capturando o id enviado na URL
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/pessoa-fisica/' + id)
      .subscribe({
        next: (data: any) => {
          //preencher o formulário com os dados do produto obtido
          this.formPessoaFisica.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })

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
        .put('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/pessoa-fisica',
         this.formPessoaFisica.value
       

       )

        .subscribe({
          next: (data: any) => {
            this.mensagem = `Pessoa Fisica editada com sucesso!`;

          },
          error: (e) => {

            console.log(e.error);

          }
        })

      
}


customMatchFn(term: string, item: any) {
  // Implemente a lógica de correspondência personalizada aqui
  return item.email.toLowerCase().includes(term.toLowerCase());
}


}

