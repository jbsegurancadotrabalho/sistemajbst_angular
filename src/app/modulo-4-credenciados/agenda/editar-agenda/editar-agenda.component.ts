import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import 'select2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { ExamesCredenciadosService } from 'src/app/services/exame-credenciados.service';
import { PostExamesCredenciadosModel } from 'src/app/models/exames/exames-credenciados/PostExamesCredenciadosModel';
import { ExamesService } from 'src/app/services/exames.service';
import { GetExamesModel } from 'src/app/models/exames/GetExamesModel';
import { CredenciadoService } from 'src/app/services/credenciados.service';
import { GetCredenciadosModel } from 'src/app/models/credenciados/GetCredenciadosModel';
import { GetExamesCredenciadosModel } from 'src/app/models/exames/exames-credenciados/GetExamesCredenciadosModel';
import { PutExamesCredenciadosModel } from 'src/app/models/exames/exames-credenciados/PutExamesCredenciadosModel';
import { AgendaService } from 'src/app/services/agenda.service';
import { GetAgendaModel } from 'src/app/models/agenda/GetAgendaModel';
import { PostAgendaModel } from 'src/app/models/agenda/PostAgendaModel';
import { PutAgendaModel } from 'src/app/models/agenda/PutAgendaModel';



@Component({
  selector: 'app-editar-agenda',
  templateUrl: './editar-agenda.component.html',
  styleUrls: ['./editar-agenda.component.css']
})
export class EditarAgendaComponent {


  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioExames: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  exames: any[] = [];
  exames1: GetExamesModel[] = [];
  id: string | null = null;
  exame: GetExamesModel | null = null; 
  agenda: GetAgendaModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private config: NgSelectConfig,
    private ExamesCredenciadosService: ExamesCredenciadosService,
    private ExamesService: ExamesService,
    private CredenciadoService: CredenciadoService,
    private AgendaService: AgendaService,
  ) {
    this.formularioExames = this.formBuilder.group({
      dia_hora: ['', Validators.required],
      observacoes_agenda: ['', Validators.required],
      status: ['', Validators.required],
      idAgenda: ['', Validators.required],
    });
    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.consultarAgendaPorId();
  
  }

  consultarAgendaPorId(): void {
    if (this.id) {
      this.AgendaService.consultarAgendaPorId(this.id).subscribe(
        (data: GetAgendaModel) => { // Atualizado para esperar um único objeto
          this.agenda = [data]; // Convertendo o objeto em array
          if (this.agenda.length > 0) {
            const selectedExame = this.agenda[0]; // Exemplo: Selecionar o primeiro exame
            this.formularioExames.patchValue({
              idAgenda: selectedExame.idAgenda,
              observacoes_agenda: selectedExame.observacoes_agenda,
              status: selectedExame.status,
              dia_hora: selectedExame.dia_hora,


            });
          }
        },
        (error: any) => {
          console.error('Erro ao buscar exames credenciados:', error);
        }
      );
    }
  }






  editarAgendaCredenciados() {
    // Log inicial para verificar se a função está sendo chamada
    console.log('Função editarAgendaCredenciados() foi chamada.');
  
    // Formatar a data e atualizar o formulário
    const dataFormatada = this.formatDate(this.formularioExames.value.dia_hora);
    this.formularioExames.patchValue({
      dia_hora: dataFormatada
    });
  
    // Exibir o valor formatado no console
    console.log('Data formatada:', dataFormatada);
  
    // Verificar se o formulário é válido
    if (this.formularioExames.valid) {
      // Converta os valores do formulário para o modelo PostAgendaModel
      const agenda: PutAgendaModel = this.formularioExames.value as PutAgendaModel;
  
      // Exibir os valores do formulário no console
      console.log('Dados do formulário a serem enviados:', agenda);
  
      // Enviar os dados para o serviço
      this.AgendaService.editarAgenda(agenda).subscribe(
        response => {
          // Log para confirmar que a agenda foi criada com sucesso
          console.log('Agenda editada com sucesso:', response);
          this.cadastroSucesso = 'Agenda editada com sucesso!';
        },
        error => {
          // Log para capturar e exibir erros
          console.error('Erro ao editar Agenda:', error);
          this.cadastroErro = 'Erro ao editar Agenda. Por favor, tente novamente.';
        }
      );
    } else {
      // Log para indicar que o formulário é inválido
      console.error('O formulário é inválido. Por favor, verifique os campos obrigatórios.');
      this.markFormGroupTouched(this.formularioExames);
    }
  }
  
  // Função para marcar todos os campos do formulário como tocados
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  } 

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toISOString(); // Formatar para ISO 8601
    } else {
      console.error('Data inválida:', dateString);
      return ''; // Ou outra ação apropriada
    }
  }

}

