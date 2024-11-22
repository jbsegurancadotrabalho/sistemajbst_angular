  import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
  import * as $ from 'jquery';
  import 'select2';
  import { NgSelectConfig } from '@ng-select/ng-select';
  import { HttpClient } from '@angular/common/http';
  import { GetExamesModel } from 'src/app/models/exames/GetExamesModel';
  import { GetAgendamentoModel } from 'src/app/models/agendamento/GetAgendamentoModel';
  import { AgendamentoService } from 'src/app/services/agendamento.service';
  import { AtendimentoService } from 'src/app/services/atendimento.service';
  import { PostAtendimentoModel } from 'src/app/models/atendimento/PostAtendimentoModel';

  @Component({
    selector: 'app-criar-atendimento',
    templateUrl: './criar-atendimento.component.html',
    styleUrls: ['./criar-atendimento.component.css']
  })
  export class CriarAtendimentoComponent {

    formularioAtendimento: FormGroup;
    cadastroSucesso: string | null = null;
    cadastroErro: string | null = null;
    agendamento: GetAgendamentoModel [] = [];
    id: string | null = null;
    agendamentoId: GetAgendamentoModel [] = [];

    constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute, 
      private config: NgSelectConfig,
      private AgendamentoService: AgendamentoService,
      private AtendimentoService: AtendimentoService

    ) 

    {
      this.formularioAtendimento= this.formBuilder.group({
        idAgendamento: ['', Validators.required],
        tipo: ['', Validators.required],
        status: ['', Validators.required],
        link: ['', Validators.required],
        profissional: ['', Validators.required],    
        descricao: ['', Validators.required],    

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
            this.agendamentoId = [data]; // Convertendo o objeto em array
            if (this.agendamentoId.length > 0) {
              const selected = this.agendamentoId[0]; // Exemplo: Selecionar o primeiro exame
              this.formularioAtendimento.patchValue({
                idAgendamento: selected.idAgendamento,
             
  
  
              });
            }
          },
          (error: any) => {
            console.error('Erro ao buscar exames credenciados:', error);
          }
        );
      }
    }
  
  
  

    

    criarAtendimento() {
      console.log('Atendimento criarAtendimento() foi chamada.');
    
      if (this.formularioAtendimento.valid) {
        const atendimento: PostAtendimentoModel = this.formularioAtendimento.value as PostAtendimentoModel;
        console.log('Dados do formulário a serem enviados:', atendimento);
    
        this.AtendimentoService.criarAtendimento(atendimento).subscribe(
          response => {
            console.log('Atendimento criado com sucesso:', response);
            this.cadastroSucesso = 'Atendimento criado com sucesso!';
            this.formularioAtendimento.reset();
          },
          error => {
            console.error('Erro ao criar Atendimento:', error);
            this.cadastroErro = 'Erro ao criar Atendimento. Por favor, tente novamente.';
          }
        );
      } else {
        console.error('O formulário é inválido. Por favor, verifique os campos obrigatórios.');
        this.markFormGroupTouched(this.formularioAtendimento);
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


