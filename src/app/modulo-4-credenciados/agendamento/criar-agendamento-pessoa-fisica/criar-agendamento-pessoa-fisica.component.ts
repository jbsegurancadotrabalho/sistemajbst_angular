import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import 'select2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { ExamesService } from 'src/app/services/exames.service';
import { GetExamesModel } from 'src/app/models/exames/GetExamesModel';
import { CredenciadoService } from 'src/app/services/credenciados.service';
import { GetCredenciadosModel } from 'src/app/models/credenciados/GetCredenciadosModel';
import { GetExamesCredenciadosModel } from 'src/app/models/exames/exames-credenciados/GetExamesCredenciadosModel';
import { PutExamesCredenciadosModel } from 'src/app/models/exames/exames-credenciados/PutExamesCredenciadosModel';
import { AgendaService } from 'src/app/services/agenda.service';
import { GetAgendaModel } from 'src/app/models/agenda/GetAgendaModel';
import { PutAgendaModel } from 'src/app/models/agenda/PutAgendaModel';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { PostAgendamentoModel } from 'src/app/models/agendamento/PostAgendamentoModel';
import { GetPessoaFisicaModel } from 'src/app/models/pessoa-fisica/GetPessoaFisicaModel';
import { PessoaFisicaService } from 'src/app/services/pessoafisica.service';
import { PostAgendamentoPessoaFisicaModel } from 'src/app/models/agendamento/PostAgendamentoPessoaFisicaModel';


@Component({
  selector: 'app-criar-agendamento-pessoa-fisica',
  templateUrl: './criar-agendamento-pessoa-fisica.component.html',
  styleUrls: ['./criar-agendamento-pessoa-fisica.component.css']
})
export class CriarAgendamentoPessoaFisicaComponent {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioAgendamento: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  exames: any[] = [];
  exames1: GetExamesModel[] = [];
  id: string | null = null;
  exame: GetExamesModel | null = null; 
  agenda: GetAgendaModel[] = [];
  pessoafisica: GetPessoaFisicaModel[] = [];
  pessoafisicas: any [] = []

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private config: NgSelectConfig,
    private ExamesService: ExamesService,
    private CredenciadoService: CredenciadoService,
    private AgendaService: AgendaService,
    private AgendamentoService: AgendamentoService,
    private  PessoaFisicaService:  PessoaFisicaService
  ) {
    this.formularioAgendamento = this.formBuilder.group({
    venda: ['', Validators.required],
    status: ['', Validators.required],
    tipo_de_pagamento: ['', Validators.required],
    observacoes: ['', Validators.required],
    idpessoafisica: ['', Validators.required],
    idAgenda: ['', Validators.required],
    });
    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.consultarAgendaPorId();
    this.consultarPessoaFisica();

  }

  consultarAgendaPorId(): void {
    if (this.id) {
      this.AgendaService.consultarAgendaPorId(this.id).subscribe(
        (data: GetAgendaModel) => { // Atualizado para esperar um único objeto
          this.agenda = [data]; // Convertendo o objeto em array
          if (this.agenda.length > 0) {
            const selectedExame = this.agenda[0]; // Exemplo: Selecionar o primeiro exame
            this.formularioAgendamento.patchValue({
              idAgenda: selectedExame.idAgenda,
            });
          }
        },
        (error: any) => {
          console.error('Erro ao buscar exames credenciados:', error);
        }
      );
    }
  }

  ngAfterViewInit(): void {
    if (this.planoSelect) {
      const selectElement = $(this.planoSelect.nativeElement) as any;
  
      selectElement.select2({
        theme: 'bootstrap-5',
      }).on('change', () => {
        const selectedValue = String(selectElement.val());
        this.formularioAgendamento.get('idpessoafisica')?.setValue(selectedValue);
        this.formularioAgendamento.get('idpessoafisica')?.updateValueAndValidity();
      });
  
      const lastOptionValue = this.pessoafisica.length > 0 ? this.pessoafisica[this.pessoafisica.length - 1].idpessoafisica : '';
  
      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      selectElement.val(lastOptionValue).trigger('change');
    }
  }

  consultarPessoaFisica(): void {
    this.PessoaFisicaService.consultarPessoaFisica().subscribe(
      (data: GetPessoaFisicaModel[]) => { // Espera um array de GetFuncionarioModel
        this.pessoafisicas = data; // Atribui diretamente o array de funcionários
        console.log('Funcionarios recebidos:', this.pessoafisica);
      },
      (error: any) => {
        console.error('Erro ao consultar funcionarios:', error);
      }
    );
  }
  
  
  
  
  
  

  criarAgendamento() {
    // Log inicial para verificar se a função está sendo chamada
    console.log('Função criarAgendamento() foi chamada.');
  
    // Verificar se o formulário é válido
    if (this.formularioAgendamento.valid) {
      // Converta os valores do formulário para o modelo PostAgendamentoModel
      const agenda: PostAgendamentoPessoaFisicaModel = this.formularioAgendamento.value as PostAgendamentoPessoaFisicaModel;
  
      // Exibir os valores do formulário no console
      console.log('Dados do formulário a serem enviados:', agenda);
      console.log('Venda:', agenda.venda);
      console.log('Status:', agenda.status);
      console.log('Tipo de pagamento:', agenda.tipo_de_pagamento);
      console.log('Observações:', agenda.observacoes);
      console.log('ID Funcionário:', agenda.idpessoafisica);
      console.log('ID Agenda:', agenda.idAgenda);
  
      // Enviar os dados para o serviço
      this.AgendamentoService.criarAgendamentoPessoaFisica(agenda).subscribe(
        response => {
          // Log para confirmar que a agenda foi criada com sucesso
          console.log('Agendamento criado com sucesso:', response);
          this.cadastroSucesso = 'Agendamento criado com sucesso!';
        },
        error => {
          // Log para capturar e exibir erros
          console.error('Erro ao criar Agendamento:', error);
          this.cadastroErro = 'Erro ao criar Agendamento. Por favor, tente novamente.';
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


