import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/evento.service'; 
import { ActivatedRoute } from '@angular/router';
import { GetEventosModel } from 'src/app/models/eventos/GetEventosModel'; 

@Component({
  selector: 'app-consultar-eventos',
  templateUrl: './consultar-eventos.component.html',
  styleUrls: ['./consultar-eventos.component.css']
})
export class ConsultarEventosComponent {

  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  eventos: any[] = []; // Use any[] se você quiser acessar todos os dados diretamente
  eventosDetalhes: GetEventosModel | null = null; // Adicione um campo para armazenar detalhes

  private id: string | null = null; // Armazenar o ID

  constructor(
    private EventosService: EventosService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
   
      this.consultarEventos(); // Passar o ID ao método
    
  }

  consultarEventos() {
    this.EventosService.consultarEventos().subscribe(
      (data: GetEventosModel[]) => {
        this.eventos = data;
      },
      (error) => {
        console.error('Erro ao buscar eventos:', error);
      }
    );
  }

  // Método para lidar com a mudança de página
  pageChange(event: any) {
    console.log('Página mudou para:', event);
  }
}
