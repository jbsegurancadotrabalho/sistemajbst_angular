import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.css']
})
export class CadastrarCursoComponent {

  mensagem: string = '';


  constructor(
    private httpClient: HttpClient
  ) {}
  formCurso = new FormGroup({
    curso: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    conteudo: new FormControl('', [Validators.required]),
    modelo_certificado: new FormControl('', [Validators.required]),
    campo_especifico: new FormControl('', [Validators.required]),
    tituloautorizacao: new FormControl('', [Validators.required]),
    itemdaautorizacao: new FormControl('', [Validators.required]),
    conteudodaautorizacao: new FormControl('', [Validators.required]),
    valorFormacao: new FormControl('', [Validators.required]),
    valorReciclagem: new FormControl('', [Validators.required]),
    composicaoOrcamentaria: new FormControl('', [Validators.required]),
    observacoesGerais: new FormControl('', [Validators.required]),
    valorEad: new FormControl('', [Validators.required]),


      });

      get form(): any {
        return this.formCurso.controls;
      }

      onSubmit(): void {
        this.httpClient
        .post('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/cursos',
        this.formCurso.value
       

       )

        .subscribe({
          next: (data: any) => {
            this.mensagem = `Curso cadastrado com sucesso!`;

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
