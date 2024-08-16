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
import { AutenticarResponseModel } from 'src/app/models/usuarios/autenticar-response.model';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import { ChamadosClienteService } from 'src/app/services/chamados-clientes.service';

@Component({
  selector: 'app-consultar-chamados-clientes',
  templateUrl: './consultar-chamados-clientes.component.html',
  styleUrls: ['./consultar-chamados-clientes.component.css']
})
export class ConsultarChamadosClientesComponent {
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
  itensPorPagina = 10;
  paginaAtual1: number = 1; 
  usuario: AutenticarResponseModel | null = null;

    constructor(
      private httpClient: HttpClient,
      private activatedRoute: ActivatedRoute,
      private authenticationHelper: AuthenticationHelper,
      private ChamadosClienteService: ChamadosClienteService,

    ) {
    }


    



    ngOnInit(): void {
      this.usuario = this.authenticationHelper.getData();

      this.consultarChamados();

      
    }


    consultarChamados(): void {
      this.ChamadosClienteService.consultarChamadoCliente().subscribe(
        (data: any) => {
          this.chamados = data;
          console.log('Perigos fetched:', this.chamados);
        },
        (error: any) => {
          console.error('Error fetching Epi:', error);
        }
      );
    }

    get periodoAtual(): string {
      return `${this.meses[this.mesAtual]} de ${this.anoAtual}`;
    }
    
    
    

    
    pageChange(event: any): void {
      this.pagina = event;
    }

  
  


}

