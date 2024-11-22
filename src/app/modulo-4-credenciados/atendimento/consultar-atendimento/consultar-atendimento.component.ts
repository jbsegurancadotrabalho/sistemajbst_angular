import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultar-atendimento',
  templateUrl: './consultar-atendimento.component.html',
  styleUrls: ['./consultar-atendimento.component.css']
})
export class ConsultarAtendimentoComponent implements OnInit {
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  atendimentos: any[] = [];

  constructor(
    private atendimentoService: AtendimentoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.consultarAtendimentos();
  }

  consultarAtendimentos(): void {
    this.atendimentoService.consultarAtendimento().subscribe(
      (data: any[]) => {
        this.atendimentos = data;
        console.log('Atendimentos fetched:', this.atendimentos);
      },
      (error: any) => {
        console.error('Error fetching Atendimentos:', error);
      }
    );
  }

  // Método para lidar com a mudança de página
  pageChange(event: any) {
    this.paginaAtual1 = event;
    console.log('Página mudou para:', event);
  }
}
