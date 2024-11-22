import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import 'select2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { EventosService } from 'src/app/services/evento.service';
import { PostEventosModel } from 'src/app/models/eventos/PostEventosModel';


@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.css']
})

export class CriarEventoComponent {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioExames: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private config: NgSelectConfig,
    private EventosService: EventosService

  ) 

  {
    this.formularioExames= this.formBuilder.group({
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


  criarEvento() {
    // Log inicial para verificar se a função está sendo chamada
    console.log('Função criarAgendaCredenciados() foi chamada.');
  
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
      const evento: PostEventosModel = this.formularioExames.value as PostEventosModel;
  
      // Exibir os valores do formulário no console
      console.log('Dados do formulário a serem enviados:', evento);
  
      // Enviar os dados para o serviço
      this.EventosService.criarEvento(evento).subscribe(
        response => {
          // Log para confirmar que a agenda foi criada com sucesso
          console.log('Evento da JBST criado com sucesso:', response);
          this.cadastroSucesso = 'Evento da JBST criado com sucesso!';
        },
        error => {
          // Log para capturar e exibir erros
          console.error('Erro ao criar Evento:', error);
          this.cadastroErro = 'Erro ao criar Evento. Por favor, tente novamente.';
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


