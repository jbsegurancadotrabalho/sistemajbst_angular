import { Component, OnInit } from '@angular/core';
import { AnamneseService } from 'src/app/services/anamnese.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-consultar-anamnese',
  templateUrl: './consultar-anamnese.component.html',
  styleUrls: ['./consultar-anamnese.component.css']
})
export class ConsultarAnamneseComponent implements OnInit {
  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  
  anoAtual: number = (new Date()).getFullYear();
  mesAtual: number = (new Date()).getMonth();
  anamnese: any[] = [];
  pagina: number = 1; //contador da paginação da consulta
  filtro: any = { nome_contato: '' }; //filtro de pesquisa na consulta
  itensPorPagina = 10;
  paginaAtual: number = 1;

  
  constructor(
    private AnamneseService: AnamneseService
  ) {}

  ngOnInit(): void {
    this.consultarAso(this.mesAtual + 1, this.anoAtual); // Mês inicializado corretamente
  }

  selecionarMes(mes: number): void {
    this.mesAtual = mes;
    this.consultarAso(this.mesAtual + 1, this.anoAtual);
  }

  consultarAso(mes: number, ano: number): void {
    this.AnamneseService.consultarAnamnesePorMesFuncionario(mes, ano).subscribe(
      (data: any[]) => {
        this.anamnese = data;
        console.log('Agendamentos recebidos:', this.anamnese);
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