import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-consultar-funcao-perfilempresa',
  templateUrl: './consultar-funcao-perfilempresa.component.html',
  styleUrls: ['./consultar-funcao-perfilempresa.component.css']
})
export class ConsultarFuncaoPerfilempresaComponent {

  mensagem: string = '';

  funcoes: any [] = []
  pagina: number = 1; //contador da paginação da consulta
  filtro: any = { nome_contato: '' }; //filtro de pesquisa na consulta
  empresas: any[] = [];
  userId: string | null = null;

  itensPorPagina = 10;
  paginaAtual: number = 1;
 
    constructor(
      private httpClient: HttpClient,
      private activatedRoute: ActivatedRoute,

    ) {
    }


    ngOnInit(): void {
      this.httpClient.get('http://empresa-env.eba-t4xm3x3c.us-east-2.elasticbeanstalk.com/api/funcao' )
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
    

 
}


