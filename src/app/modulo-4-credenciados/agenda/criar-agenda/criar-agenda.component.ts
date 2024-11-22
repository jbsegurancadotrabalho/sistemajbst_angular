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
import { AgendaService } from 'src/app/services/agenda.service';
import { PostAgendaModel } from 'src/app/models/agenda/PostAgendaModel';


@Component({
  selector: 'app-criar-agenda',
  templateUrl: './criar-agenda.component.html',
  styleUrls: ['./criar-agenda.component.css']
})
export class CriarAgendaComponent {
  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioExames: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  exames: any [] = []
  exames1: GetExamesCredenciadosModel [] = [];
  id: string | null = null;
  credenciado: GetCredenciadosModel | null = null; // Inicializar como null
  credenciadoDetalhes: GetCredenciadosModel | null = null; // Adicione um campo para armazenar detalhes
  credenciados: any[] = []; // Use any[] se você quiser acessar todos os dados diretamente
  credenciadoDetalhes1: GetCredenciadosModel | null = null; // Adicione um campo para armazenar detalhes
  credenciados1: any[] = []; // Use any[] se você quiser acessar todos os dados diretamente

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private config: NgSelectConfig,
    private ExamesCredenciadosService: ExamesCredenciadosService,
    private CredenciadoService: CredenciadoService,
    private AgendaService: AgendaService
  ) 

  {
    this.formularioExames= this.formBuilder.group({
      status: ['', Validators.required],
      dia_hora: ['', Validators.required],
      observacoes_agenda: ['', Validators.required],
      idExameCredenciado: ['', Validators.required],
      id_profissionalsaude: ['', Validators.required],
      idCredenciado: ['', Validators.required],

    });
    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.consultarCredenciadosPorId();
    this.consultarCredenciadoPorId();

  }
  


  consultarCredenciadosPorId(): void {
    if (this.id) {
      this.CredenciadoService.consultarCredenciadoPorId(this.id).subscribe(
        (data: GetCredenciadosModel) => {
          this.credenciadoDetalhes = data; // Armazenar o objeto completo
          this.credenciados = data.examescredenciados; // Atualizar a lista de exames
          
          // Adicionar o ID do credenciado ao formulário
          this.formularioExames.patchValue({
            idCredenciado: this.credenciadoDetalhes?.idCredenciado
          });
  
          console.log('Detalhes do Credenciado:', this.credenciadoDetalhes);
          console.log('Exames do Credenciado:', this.credenciados);
          console.log('ID do Credenciado capturado:', this.formularioExames.value.idCredenciado); // Exibe o ID no console
        },
        (error: any) => {
          console.error('Error fetching credenciado details:', error);
        }
      );
    }
  }
  

  
  consultarCredenciadoPorId(): void {
    if (this.id) {
      this.CredenciadoService.consultarCredenciadoPorId1(this.id).subscribe(
        (data: GetCredenciadosModel) => {
          this.credenciadoDetalhes1 = data; // Armazenar o objeto completo
          this.credenciados1 = data.profissionalsaude; // Atualizar a lista de exames
          console.log('Detalhes do Credenciado:', this.credenciadoDetalhes);
          console.log('Exames do Credenciado:', this.credenciados1);
        },
        (error: any) => {
          console.error('Error fetching credenciado details:', error);
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
        this.formularioExames.get('idExames')?.setValue(selectedValue);
        this.formularioExames.get('idExames')?.updateValueAndValidity();
      });
  
      const lastOptionValue = this.exames.length > 0 ? this.exames[this.exames.length - 1].idExames : '';
  
      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      selectElement.val(lastOptionValue).trigger('change');
    }
  }
  criarAgendaCredenciados() {
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
      const agenda: PostAgendaModel = this.formularioExames.value as PostAgendaModel;
  
      // Exibir os valores do formulário no console
      console.log('Dados do formulário a serem enviados:', agenda);
  
      // Enviar os dados para o serviço
      this.AgendaService.criarAgenda(agenda).subscribe(
        response => {
          // Log para confirmar que a agenda foi criada com sucesso
          console.log('Agenda criada com sucesso:', response);
          this.cadastroSucesso = 'Agenda criada com sucesso!';
        },
        error => {
          // Log para capturar e exibir erros
          console.error('Erro ao criar Agenda:', error);
          this.cadastroErro = 'Erro ao criar Agenda. Por favor, tente novamente.';
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

