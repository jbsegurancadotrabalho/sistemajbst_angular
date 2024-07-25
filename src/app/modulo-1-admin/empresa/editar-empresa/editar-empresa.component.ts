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
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent {
  
  @ViewChild('planoSelect') planoSelect!: ElementRef;

  usuarios: any [] = []
  mensagem: string = '';
  mensagemErro: string = '';

  contatos: any [] = []

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    //capturando o id enviado na URL
    var idEmpresa = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/empresa/' + idEmpresa)
      .subscribe({
        next: (data: any) => {
          //preencher o formulário com os dados do produto obtido
          this.formEdicao.patchValue(data);
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

 

formEdicao = new FormGroup({
  idEmpresa: new FormControl('', [Validators.required]),
  razaosocial: new FormControl('', [Validators.required]),
  nomefantasia: new FormControl('', [Validators.required]),
  cnpj: new FormControl('', [Validators.required]),
  status: new FormControl('', [Validators.required]),
  responsavel_sistema: new FormControl('', [Validators.required]),
  email_usuario: new FormControl('', [Validators.required]),
  senha_sistema: new FormControl('', [Validators.required]),
  telefone_responsavel: new FormControl('', [Validators.required]),
  id: new FormControl('', [Validators.required]),

    });

      get form(): any {
        return this.formEdicao.controls;
      }

      onSubmit(): void {
        //enviando uma requisição PUT para a api
        this.httpClient.put('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/empresa', this.formEdicao.value)

          .subscribe({
            next: (data: any) => {
              this.mensagem = `Empresa Atualizada com sucesso!`;

            },
            error: (e) => {
            }
          });
      }

      customMatchFn(term: string, item: any) {
        // Implemente a lógica de correspondência personalizada aqui
        return item.email.toLowerCase().includes(term.toLowerCase());
      }
}
