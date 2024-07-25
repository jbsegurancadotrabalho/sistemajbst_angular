import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-editar-unidade',
  templateUrl: './editar-unidade.component.html',
  styleUrls: ['./editar-unidade.component.css']
})
export class EditarUnidadeComponent implements OnInit {

  mensagem: string = '';


  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }
 
  ngOnInit(): void {
    //capturando o id enviado na URL
    var idUnidadedetreinamento = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/unidadedetreinamento/' + idUnidadedetreinamento)
      .subscribe({
        next: (data: any) => {
          //preencher o formulário com os dados do produto obtido
          this.formEditarUnidade.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })
  }
 
  //criando um objeto para capturar o formulário
  formEditarUnidade = new FormGroup({
    idUnidadedetreinamento: new FormControl('', [Validators.required]),
    unidadedetreinamento: new FormControl('', [Validators.required]),
    cnpj: new FormControl('', [Validators.required]),
    unidade: new FormControl('', [Validators.required]),
  });
 
 
  //função para acessar os campos do formulário
  get form(): any {
    return this.formEditarUnidade.controls;
  }
 
 
  onSubmit(): void {
   this.httpClient
   .put('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/unidadedetreinamento',
   this.formEditarUnidade.value 
  )
 
   .subscribe({
     next: (data: any) => {
       this.mensagem = `Unidade de Treinamento cadastrada com sucesso!`;
 
     },
     error: (e) => {
 
       console.log(e.error);
 
     }
   })
 
  
 }
 }
 
