  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { AsoService } from 'src/app/services/aso.service';


  @Component({
    selector: 'app-consultar-aso',
    templateUrl: './consultar-aso.component.html',
    styleUrls: ['./consultar-aso.component.css']
  })
  export class ConsultarAsoComponent implements OnInit {

    meses: string[] = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    
    anoAtual: number = (new Date()).getFullYear();
    mesAtual: number = (new Date()).getMonth();
    aso: any[] = [];
    pagina: number = 1; //contador da paginação da consulta
    filtro: any = { nome_contato: '' }; //filtro de pesquisa na consulta
    itensPorPagina = 10;
    paginaAtual: number = 1;
  
    
    constructor(
      private asoService: AsoService
    ) {}
  
    ngOnInit(): void {
      this.consultarAso(this.mesAtual + 1, this.anoAtual); // Mês inicializado corretamente
    }
  
    selecionarMes(mes: number): void {
      this.mesAtual = mes;
      this.consultarAso(this.mesAtual + 1, this.anoAtual);
    }
  
    consultarAso(mes: number, ano: number): void {
      this.asoService.consultarAsoPorMesFuncionario(mes, ano).subscribe(
        (data: any[]) => {
          this.aso = data;
          console.log('Agendamentos recebidos:', this.aso);
        },
        (error: any) => {
          console.error('Erro ao consultar agendamentos:', error);
        }
      );
    }
  
    get periodoAtual(): string {
      return `${this.meses[this.mesAtual]} de ${this.anoAtual}`;
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
  
      this.consultarAso(this.mesAtual + 1, this.anoAtual); // Passa mês e ano atualizados
    }
  }