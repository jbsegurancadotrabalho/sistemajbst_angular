import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { EventosService } from 'src/app/services/evento.service';
import { GetEventosModel } from 'src/app/models/eventos/GetEventosModel';
import { ParticipantesService } from 'src/app/services/participantes.service';
import { PostParticipanteModel } from 'src/app/models/eventos/participantes/PostParticipanteModel';


@Component({
  selector: 'app-consultar-participante',
  templateUrl: './consultar-participante.component.html',
  styleUrls: ['./consultar-participante.component.css']
})
export class ConsultarParticipanteComponent {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  idEvento: string | null = null;
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  eventos: any[] = []; 


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private config: NgSelectConfig,
    private eventosService: EventosService,
    private participantesService: ParticipantesService
  ) {
  
  }

  ngOnInit(): void {
    this.idEvento = this.route.snapshot.paramMap.get('id');
    this.consultarEventosPorId();
  }

  consultarEventosPorId(): void {
    if (this.idEvento) {
      this.eventosService.consultarEventosPorId(this.idEvento).subscribe(
        (data: any) => {
          this.eventos = data.participante;
         
        },
        (error: any) => {
          console.error('Erro ao buscar o evento:', error);
        }
      );
    } else {
      console.error('ID do evento é nulo.');
    }
  }

 
}
