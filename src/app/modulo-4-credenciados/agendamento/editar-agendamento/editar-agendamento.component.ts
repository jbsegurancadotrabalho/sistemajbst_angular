import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import 'select2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { GetFuncionarioModel } from 'src/app/models/Funcionario/GetFuncionarioModel';
import { GetAgendamentoModel } from 'src/app/models/agendamento/GetAgendamentoModel';
import { PutAgendamentoModel } from 'src/app/models/agendamento/PutAgendamentoModel';
@Component({
  selector: 'app-editar-agendamento',
  templateUrl: './editar-agendamento.component.html',
  styleUrls: ['./editar-agendamento.component.css']
})
export class EditarAgendamentoComponent {


  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioAgendamento: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  exames: any[] = [];
  id: string | null = null;
  agenda: GetAgendamentoModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private config: NgSelectConfig,
    private AgendamentoService: AgendamentoService,
  ) {
    this.formularioAgendamento = this.formBuilder.group({
    venda: ['', Validators.required],
    status: ['', Validators.required],
    tipo_de_pagamento: ['', Validators.required],
    observacoes: ['', Validators.required],
    idAgendamento: ['', Validators.required],
    });
    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.consultarAgendamentoPorId();
  }

  consultarAgendamentoPorId(): void {
    if (this.id) {
      this.AgendamentoService.consultarAgendamentoPorId(this.id).subscribe(
        (data: GetAgendamentoModel) => { // Atualizado para esperar um único objeto
          this.agenda = [data]; // Convertendo o objeto em array
          if (this.agenda.length > 0) {
            const selectedExame = this.agenda[0]; // Exemplo: Selecionar o primeiro exame
            this.formularioAgendamento.patchValue({
              idAgendamento: selectedExame.idAgendamento,
              status: selectedExame.status,
              venda: selectedExame.venda,
              tipo_de_pagamento: selectedExame.tipo_de_pagamento,
              observacoes: selectedExame.observacoes

            });
          }
        },
        (error: any) => {
          console.error('Erro ao buscar exames credenciados:', error);
        }
      );
    }
  }


  
  
  
  

  editarAgendamento() {
    // Log inicial para verificar se a função está sendo chamada
    console.log('Função criarAgendamento() foi chamada.');
  
    // Verificar se o formulário é válido
    if (this.formularioAgendamento.valid) {
      // Converta os valores do formulário para o modelo PostAgendamentoModel
      const agenda: PutAgendamentoModel = this.formularioAgendamento.value as PutAgendamentoModel;
  
      // Exibir os valores do formulário no console
      console.log('Dados do formulário a serem enviados:', agenda);
      console.log('Venda:', agenda.venda);
      console.log('Status:', agenda.status);
      console.log('Tipo de pagamento:', agenda.tipo_de_pagamento);
      console.log('Observações:', agenda.observacoes);
   
  
      // Enviar os dados para o serviço
      this.AgendamentoService.editarAgendamento(agenda).subscribe(
        response => {
          // Log para confirmar que a agenda foi criada com sucesso
          console.log('Agendamento editado com sucesso:', response);
          this.cadastroSucesso = 'Agendamento editado com sucesso!';
        },
        error => {
          // Log para capturar e exibir erros
          console.error('Erro ao editar Agendamento:', error);
          this.cadastroErro = 'Erro ao editar Agendamento. Por favor, tente novamente.';
        }
      );
    } else {
      // Log para indicar que o formulário é inválido
      console.error('O formulário é inválido. Por favor, verifique os campos obrigatórios.');
      this.markFormGroupTouched(this.formularioAgendamento);
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



}


