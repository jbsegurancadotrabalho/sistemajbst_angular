import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-instrutor',
  templateUrl: './cadastrar-instrutor.component.html',
  styleUrls: ['./cadastrar-instrutor.component.css']
})
export class CadastrarInstrutorComponent {

  mensagem: string = '';

  //construtor
  constructor(
   private httpClient: HttpClient,
 ) {}

formInstrutor = new FormGroup({
   instrutor: new FormControl('', [Validators.required]),
   rg: new FormControl('', [Validators.required]),
   cpf: new FormControl('', [Validators.required]),
   telefone_1: new FormControl('', [Validators.required]),
   telefone_2: new FormControl('', [Validators.required]),
   email: new FormControl('', [Validators.required]),
   
     });

     get form(): any {
       return this.formInstrutor.controls;
     }


     onSubmit(): void {
       this.httpClient
       .post('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/instrutor',
       this.formInstrutor.value
      

      )

       .subscribe({
         next: (data: any) => {
           this.mensagem = `Instrutor cadastrado com sucesso!`;

         },
         error: (e) => {
          
          console.log(e.error);
          if (e.error && e.error.message) {
            // Exiba a mensagem de erro da API
            this.mensagem = e.error.message;
          } else {
            // Se não houver uma mensagem de erro específica da API, exiba uma mensagem genérica
            this.mensagem = 'Erro desconhecido ao realizar o cadastro de Instrutor.';
          }
        }
      });

     
}

}

