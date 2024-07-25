import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FuncaoDocService } from 'src/app/services/funcaodoc.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as $ from 'jquery';
import { PerigoService } from 'src/app/services/perigo.service';
import { GetPerigoModel } from 'src/app/models/sms/GetPerigoModel';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { PutFuncaoDocModel } from 'src/app/models/funcaodoc/PutFuncaoDocModel';

@Component({
  selector: 'app-consultar-funcaodoc',
  templateUrl: './consultar-funcaodoc.component.html',
  styleUrls: ['./consultar-funcaodoc.component.css']
})
export class ConsultarFuncaodocComponent implements OnInit {

  funcoes: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };



  constructor(
    private funcaoDocService: FuncaoDocService,
    private activatedRoute: ActivatedRoute,
    private config: NgSelectConfig,
    private perigoService: PerigoService,
    private httpClient: HttpClient
  ) {
  

    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }





  ngOnInit(): void {
    this.buscarTodasFuncoes();
 
  }

  buscarTodasFuncoes(): void {
    this.funcaoDocService.buscarTodasFuncoes().subscribe(
      (data: any) => {
        this.funcoes = data;
      },
      (error: any) => {
        console.error('Erro ao buscar funções:', error);
      }
    );
  }

  excluirFuncao(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir a função "${nome}"?`)) {
      this.funcaoDocService.deleteFuncaoDoc(id).subscribe(
        (response: any) => {
          console.log('Função excluída com sucesso:', response);
          this.buscarTodasFuncoes();
        },
        (error: any) => {
          console.error('Erro ao excluir função:', error);
        }
      );
    }
  }



  
  
  
}
