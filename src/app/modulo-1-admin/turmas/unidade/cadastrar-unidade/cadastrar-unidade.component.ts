import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-unidade',
  templateUrl: './cadastrar-unidade.component.html',
  styleUrls: ['./cadastrar-unidade.component.css']
})
export class CadastrarUnidadeComponent {

  mensagem: string = '';


 //construtor
 constructor(
   private httpClient: HttpClient
 ){  
 }


 //criando um objeto para capturar o formulário
 formUnidade = new FormGroup({
   /* dados principais do cliente: */
   unidadedetreinamento: new FormControl('', [Validators.required]),
   cnpj: new FormControl('', [Validators.required]),
   unidade: new FormControl('', [Validators.required]),
 });


 //função para acessar os campos do formulário
 get form(): any {
   return this.formUnidade.controls;
 }


 onSubmit(): void {
  this.httpClient
  .post('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/unidadedetreinamento',
  this.formUnidade.value
 

 )

  .subscribe({
    next: (data: any) => {
      this.mensagem = `Unidade de Treinamento cadastrada com sucesso!`;

    },
    error: (e) => {
          
      console.log(e.error);
      if (e.error && e.error.message) {
        // Exiba a mensagem de erro da API
        this.mensagem = e.error.message;
      } else {
        // Se não houver uma mensagem de erro específica da API, exiba uma mensagem genérica
        this.mensagem = 'Erro desconhecido ao cadastrar unidade de treinamento.';
      }
    }
  });

 
}
}

