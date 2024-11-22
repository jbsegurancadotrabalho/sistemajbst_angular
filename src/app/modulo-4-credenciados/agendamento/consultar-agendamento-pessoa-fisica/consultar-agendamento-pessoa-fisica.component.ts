import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-consultar-agendamento-pessoa-fisica',
  templateUrl: './consultar-agendamento-pessoa-fisica.component.html',
  styleUrls: ['./consultar-agendamento-pessoa-fisica.component.css']
})
export class ConsultarAgendamentoPessoaFisicaComponent implements OnInit {

  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  
  anoAtual: number = (new Date()).getFullYear();
  mesAtual: number = (new Date()).getMonth();
  agendamentos: any[] = [];
  pagina: number = 1; //contador da paginação da consulta
  filtro: any = { nome_contato: '' }; //filtro de pesquisa na consulta
  itensPorPagina = 10;
  paginaAtual: number = 1;

  
  constructor(private agendamentoService: AgendamentoService) {}

  ngOnInit(): void {
    this.consultarAgendamentosPorFuncionario(this.mesAtual + 1, this.anoAtual); // Mês inicializado corretamente
  }

  selecionarMes(mes: number): void {
    this.mesAtual = mes;
    this.consultarAgendamentosPorFuncionario(this.mesAtual + 1, this.anoAtual);
  }

  consultarAgendamentosPorFuncionario(mes: number, ano: number): void {
    this.agendamentoService.consultarAgendamentoPorMesPessoaFisica(mes, ano).subscribe(
      (data: any[]) => {
        this.agendamentos = data;
        console.log('Agendamentos recebidos:', this.agendamentos);
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

    this.consultarAgendamentosPorFuncionario(this.mesAtual + 1, this.anoAtual); // Passa mês e ano atualizados
  }
}