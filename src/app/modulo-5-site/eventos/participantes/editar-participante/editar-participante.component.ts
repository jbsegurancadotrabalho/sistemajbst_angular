import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { EventosService } from 'src/app/services/evento.service';
import { GetEventosModel } from 'src/app/models/eventos/GetEventosModel';
import { ParticipantesService } from 'src/app/services/participantes.service';
import { PostParticipanteModel } from 'src/app/models/eventos/participantes/PostParticipanteModel';
import { GetParticipanteModel } from 'src/app/models/eventos/participantes/GetParticipanteModel';
import { PutParticipanteModel } from 'src/app/models/eventos/participantes/PutParticipanteModel';

@Component({
  selector: 'app-editar-participante',
  templateUrl: './editar-participante.component.html',
  styleUrls: ['./editar-participante.component.css']
})
export class EditarParticipanteComponent {



  formularioParticipante: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  idParticipante: string | null = null;
  participante: GetParticipanteModel | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private config: NgSelectConfig,
    private eventosService: EventosService,
    private participantesService: ParticipantesService
  ) {
    this.formularioParticipante = this.formBuilder.group({
      idParticipante: ['', Validators.required],
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
    this.idParticipante = this.route.snapshot.paramMap.get('id');
    this.  consultarParticipantePorId();
  }

  consultarParticipantePorId(): void {
    if (this.idParticipante) {
      this.participantesService.consultarParticipantesPorId(this.idParticipante).subscribe(
        (data: GetParticipanteModel) => {
          this. participante = data;
          // Preenche o campo idEvento automaticamente
          this.formularioParticipante.patchValue({
            idParticipante: this.participante.idParticipante,
            empresa: this.participante.empresa,
            cnpj: this.participante.cnpj,
            nome: this.participante.nome,
            email: this.participante.email,
            whatsapp: this.participante.whatsapp,
            funcao: this.participante.funcao,
            segmento: this.participante.segmento,
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

  editarParticipante(): void {
    if (this.formularioParticipante.valid) {
      const participante: PutParticipanteModel = this.formularioParticipante.value as PutParticipanteModel;
  
      this.participantesService.editarParticipante(participante).subscribe(
        response => {
          console.log('Participante atualizado com sucesso:', response);
          this.cadastroSucesso = 'Participante atualizado com sucesso!';
        },
        error => {
          console.error('Erro ao atualizar o participante:', error);
          this.cadastroErro = 'Erro ao atualizar o participante. Por favor, tente novamente.';
        }
      );
    } else {
      console.error('O formulário é inválido. Verifique os campos obrigatórios.');
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
