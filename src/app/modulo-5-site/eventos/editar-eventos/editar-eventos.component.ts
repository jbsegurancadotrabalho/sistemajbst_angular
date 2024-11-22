import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import 'select2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { EventosService } from 'src/app/services/evento.service';
import { PutEventosModel } from 'src/app/models/eventos/PutEventosModel';
import { GetEventosModel } from 'src/app/models/eventos/GetEventosModel';

@Component({
  selector: 'app-editar-eventos',
  templateUrl: './editar-eventos.component.html',
  styleUrls: ['./editar-eventos.component.css']
})

export class EditarEventosComponent {


  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioExames: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;
  eventos: GetEventosModel | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private config: NgSelectConfig,
    private EventosService: EventosService

  ) 

  {
    this.formularioExames= this.formBuilder.group({
      idEvento: ['', Validators.required],
      dia_hora: ['', Validators.required],
      nome_evento: ['', Validators.required], 
       descricao: ['', Validators.required],
       carga_horaria: ['', Validators.required],  
       organizadores: ['', Validators.required], 
       palestrante: ['', Validators.required],  
       valor: ['', Validators.required],
       status: ['', Validators.required],
       local: ['', Validators.required],

    });
   
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.consultarEventosPorId();
  }

  consultarEventosPorId(): void {
    if (this.id) {
      this.EventosService.consultarEventosPorId(this.id).subscribe(
        (data: GetEventosModel) => {
          this.eventos = data;

          this.formularioExames.patchValue({
            idEvento: this.eventos.idEvento,
            dia_hora: this.eventos.dia_hora,
            nome_evento: this.eventos.nome_evento,
            descricao: this.eventos.descricao,
            carga_horaria: this.eventos.carga_horaria,
            organizadores: this.eventos.organizadores,
            palestrante: this.eventos.palestrante,
            valor: this.eventos.valor,
            status: this.eventos.status,
            local: this.eventos.local,

          });
        },
        (error: any) => {
          console.error('Erro ao buscar credenciado:', error);
        }
      );
    } else {
      console.error('ID do credenciado é nulo.');
    }
  }



  editarEvento() {
    // Log inicial para verificar se a função está sendo chamada
    console.log('Função editarEvento() foi chamada.');
  
    // Formatar a data e atualizar o formulário
    const dataFormatada = this.formatDate(this.formularioExames.value.dia_hora);
    this.formularioExames.patchValue({
      dia_hora: dataFormatada
    });
  
    // Exibir o valor formatado no console
    console.log('Data formatada:', dataFormatada);
  
    // Verificar se o formulário é válido
    if (this.formularioExames.valid) {
      // Converta os valores do formulário para o modelo PutEventosModel
      const evento: PutEventosModel = this.formularioExames.value as PutEventosModel;
  
      // Exibir os valores do formulário no console
      console.log('Dados do formulário a serem enviados:', evento);
  
      // Verificar se o ID existe
      if (this.id) {
        // Enviar os dados para o serviço
        this.EventosService.editarEventos(this.id, evento).subscribe(
          response => {
            // Log para confirmar que o evento foi atualizado com sucesso
            console.log('Evento da JBST atualizado com sucesso:', response);
            this.cadastroSucesso = 'Evento da JBST atualizado com sucesso!';
          },
          error => {
            // Log para capturar e exibir erros
            console.error('Erro ao atualizar o Evento:', error);
            this.cadastroErro = 'Erro ao atualizar o Evento. Por favor, tente novamente.';
          }
        );
      } else {
        console.error('ID do evento é nulo.');
      }
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


