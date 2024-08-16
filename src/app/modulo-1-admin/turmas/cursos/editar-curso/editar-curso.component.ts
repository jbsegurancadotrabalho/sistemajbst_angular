import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit{

  mensagem: string = '';

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    //capturando o id enviado na URL
    var idcurso = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/cursos/' + idcurso)
      .subscribe({
        next: (data: any) => {
          this.formEditarCurso.patchValue(data);
          
        },
        error: (e) => {
          console.log(e);
        }
      })

    }
    formEditarCurso= new FormGroup({
    idcurso: new FormControl('', [Validators.required]),
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
        return this.formEditarCurso.controls;
      }

      onSubmit(): void {
        this.httpClient
        .put('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/cursos', this.formEditarCurso.value       

       )

        .subscribe({
          next: (data: any) => {
            this.mensagem = `Curso Atualizado com sucesso!`;

          },
          error: (e) => {

            console.log(e.error);

          }
        })      

}

}



