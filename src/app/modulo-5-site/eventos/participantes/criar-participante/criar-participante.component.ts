import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { EventosService } from 'src/app/services/evento.service';
import { GetEventosModel } from 'src/app/models/eventos/GetEventosModel';
import { ParticipantesService } from 'src/app/services/participantes.service';
import { PostParticipanteModel } from 'src/app/models/eventos/participantes/PostParticipanteModel';

@Component({
  selector: 'app-criar-participante',
  templateUrl: './criar-participante.component.html',
  styleUrls: ['./criar-participante.component.css']
})
export class CriarParticipanteComponent implements OnInit {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioParticipante: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  idEvento: string | null = null;
  eventos: GetEventosModel | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private config: NgSelectConfig,
    private eventosService: EventosService,
    private participantesService: ParticipantesService
  ) {
    this.formularioParticipante = this.formBuilder.group({
      idEvento: ['', Validators.required],
      empresa: ['', Validators.required],
      cnpj: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      whatsapp: ['', Validators.required],
      funcao: ['', Validators.required],
      segmento: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.idEvento = this.route.snapshot.paramMap.get('id');
    this.consultarEventosPorId();
  }

  consultarEventosPorId(): void {
    if (this.idEvento) {
      this.eventosService.consultarEventosPorId(this.idEvento).subscribe(
        (data: GetEventosModel) => {
          this.eventos = data;
          // Preenche o campo idEvento automaticamente
          this.formularioParticipante.patchValue({
            idEvento: this.eventos.idEvento,
          });
        },
        (error: any) => {
          console.error('Erro ao buscar o evento:', error);
        }
      );
    } else {
      console.error('ID do evento é nulo.');
    }
  }

  criarParticipante(): void {
    if (this.formularioParticipante.valid) {
      // Captura os valores do formulário
      const participante: PostParticipanteModel = this.formularioParticipante.value as PostParticipanteModel;

      // Exibe os valores no console para verificação
      console.log('Dados do formulário a serem enviados:', participante);

      // Envia os dados para o serviço
      this.participantesService.criarParticipante(participante).subscribe(
        response => {
          console.log('Participante criado com sucesso:', response);
          this.cadastroSucesso = 'Participante criado com sucesso!';
        },
        error => {
          console.error('Erro ao criar o participante:', error);
          this.cadastroErro = 'Erro ao criar o participante. Por favor, tente novamente.';
        }
      );
    } else {
      // Exibe um erro se o formulário for inválido
      console.error('O formulário é inválido. Por favor, verifique os campos obrigatórios.');
      this.markFormGroupTouched(this.formularioParticipante);
    }
  }

  // Função para marcar todos os campos do formulário como tocados
  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
