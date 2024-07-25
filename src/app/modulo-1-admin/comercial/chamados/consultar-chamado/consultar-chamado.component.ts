import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import { CadastrarTurmas } from 'src/app/models/models_diversos/cadastrar-turmas.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ConsultarPedidos } from 'src/app/models/models_diversos/consultar-pedidos.model';
import { EditarCobranca } from 'src/app/models/financeiro/editar-cobranca.model';
import {  HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-consultar-chamado',
  templateUrl: './consultar-chamado.component.html',
  styleUrls: ['./consultar-chamado.component.css']
})
export class ConsultarChamadoComponent implements OnInit  {
  @ViewChild('content') popupview!: ElementRef;
 
  meses: string[] = [
   'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
   'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
 ];
 
 anoAtual: number = (new Date()).getFullYear();
 mesAtual: number = (new Date()).getMonth();
  chamados: any [] = []
  pagina: number = 1; //contador da paginação da consulta
  filtro: any = { nome_contato: '' }; //filtro de pesquisa na consulta
    //construtor
    itensPorPagina = 10;
    paginaAtual1: number = 1; 
 
    constructor(
      private httpClient: HttpClient,
      private activatedRoute: ActivatedRoute,

    ) {
    }


    
  consultarChamados(mes: number, ano: number): void {
    const params = new HttpParams()
      .set('mes', (mes + 1).toString())  // Ensure to convert to string
      .set('ano', ano.toString());
  
    const url = 'http://chamados-jb-env.eba-8zceqpve.us-east-2.elasticbeanstalk.com/api/chamados/chamados-por-mes-e-ano';
                
    this.httpClient.get(url, { params }).subscribe({
      next: (data: any) => {
        this.chamados = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }


    ngOnInit(): void {

      this.consultarChamados(this.mesAtual, this.anoAtual);

      
    }
    get periodoAtual(): string {
      return `${this.meses[this.mesAtual]} de ${this.anoAtual}`;
    }
    
    
    
    selecionarMes(mes: number): void {
      this.mesAtual = mes;
      this.consultarChamados(this.mesAtual, this.anoAtual);
    }
    
    mudarMes(delta: number): void {
      this.mesAtual += delta;
    
      if (this.mesAtual > 11) {
        this.mesAtual = 0;
        this.anoAtual++;
      } else if (this.mesAtual < 0) {
        this.mesAtual = 11;
        this.anoAtual--;
      }
    
      this.consultarChamados(this.mesAtual, this.anoAtual);
    }
    
    pageChange(event: any): void {
      this.pagina = event;
    }

    onDelete(idChamados: number, nome: string): void {
      if(window.confirm('Deseja realmente excluir o Chamado selecionado?\n' + nome)) {
        //enviando uma reqquisição para o serviço de exclusão da API
        this.httpClient.delete('https://chamados-jb-env.eba-8zceqpve.us-east-2.elasticbeanstalk.com/api/chamados/' + idChamados)
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
