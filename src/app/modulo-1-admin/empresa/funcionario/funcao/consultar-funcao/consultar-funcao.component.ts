import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultar-funcao',
  templateUrl: './consultar-funcao.component.html',
  styleUrls: ['./consultar-funcao.component.css']
})
export class ConsultarFuncaoComponent {

  mensagem: string = '';

  funcoes: any [] = []
  filtro: any = { nome_empresas: '' }; //filtro de pesquisa na consulta
  pagina: number = 1; //contador da paginação da consulta
  itensPorPaginas = 10;
  paginaAtual1: number = 1; 

 
    constructor(
      private httpClient: HttpClient,
      private activatedRoute: ActivatedRoute,

    ) {
    }


    ngOnInit(): void {
      this.httpClient.get('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/funcao' )
      .subscribe({ //capturando o retorno da API
        next: (data) => { //recebe o retorno de sucesso da API
          //armazenar os dados na variável
          this.funcoes = data as any[];
        },
        error: (e) => { //recebe o retorno de erro da API
          console.log(e);
        }
      });
      
    }

    pageChange(event: any): void {
      this.pagina = event;
    } 
    
    onDelete(idFuncao: number, funcao: string): void {
      if(window.confirm('Deseja realmente excluir a Função selecionado?\n' + funcao)) {
        //enviando uma reqquisição para o serviço de exclusão da API
        this.httpClient.delete('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/funcao/' + idFuncao)
          .subscribe({
            next: (data: any) => {
              this.ngOnInit();
            },
            error: (e) => {
            }
          })
      }
    }
 
}


