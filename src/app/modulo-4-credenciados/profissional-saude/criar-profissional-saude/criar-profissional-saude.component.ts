import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import 'select2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { CredenciadoService } from 'src/app/services/credenciados.service';
import { GetCredenciadosModel } from 'src/app/models/credenciados/GetCredenciadosModel';
import { ProfissionalSaudeService } from 'src/app/services/profissional-saude.service';
import { PostProfissionalSaudeModel } from 'src/app/models/profissional-saude/PostProfissionalSaudeModel';

@Component({
  selector: 'app-criar-profissional-saude',
  templateUrl: './criar-profissional-saude.component.html',
  styleUrls: ['./criar-profissional-saude.component.css']
})
export class CriarProfissionalSaudeComponent {


  @ViewChild('planoSelect') planoSelect!: ElementRef;



  formularioProfissionalSaude: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  exames: any [] = []
  id: string | null = null;
  credenciado: GetCredenciadosModel | null = null; // Inicializar como null
  credenciados: PostProfissionalSaudeModel [] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private config: NgSelectConfig,
    private CredenciadoService: CredenciadoService,
    private ProfissionalSaudeService: ProfissionalSaudeService,
  ) 

  {
    this.formularioProfissionalSaude = this.formBuilder.group({

      nome_profissionalsaude: ['', Validators.required],
      rg: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone_1: ['', Validators.required],
      telefone_2: ['', Validators.required],
      email: ['', Validators.required],
      senha_sistema: ['', Validators.required],
      idCredenciado: [''],

    });
    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.consultarCredenciados();

  }
  


  consultarCredenciados(): void {
    if (this.id) {
        this.CredenciadoService.consultarCredenciadoPorId(this.id).subscribe(
            (data: GetCredenciadosModel) => { 
                this.credenciado = data;
                console.log('Credenciado obtido:', this.credenciado);

                // Atualize o campo idCredenciado no formulário
                if (this.credenciado && this.credenciado.idCredenciado) {
                    this.formularioProfissionalSaude.patchValue({
                        idCredenciado: this.credenciado.idCredenciado
                    });
                }
            },
            (error: any) => {
                console.error('Erro ao buscar credenciado:', error);
            }
        );
    } else {
        console.error('ID do credenciado é nulo.');
    }
}


 
  criarProfissionalCredenciados() {
    // Log inicial para verificar se a função está sendo chamada
    console.log('Função criarExamesCredenciados() foi chamada.');
  
    if (this.formularioProfissionalSaude.valid) {
      // Converta os valores do formulário para o modelo PostExamesCredenciadosModel
      const profissional: PostProfissionalSaudeModel = this.formularioProfissionalSaude.value as PostProfissionalSaudeModel;
  
      // Enviar os dados para o serviço
      this.ProfissionalSaudeService.criarProfissionalSaude(profissional).subscribe(
        response => {
          // Log para confirmar que o exame foi criado com sucesso
          console.log('Profissional da Saúde criado com sucesso:', response);
          this.cadastroSucesso = 'Profissional da Saúde criado com sucesso!';
          // Adicione qualquer lógica adicional necessária após a criação do exame, como redirecionar ou limpar o formulário
        },
        error => {
          // Log para capturar e exibir erros
          console.error('Erro ao criar Profissional da Saúde:', error);
          this.cadastroErro = 'Erro ao criar Profissional da Saúde. Por favor, tente novamente.';
        }
      );
    } else {
      // Log para indicar que o formulário é inválido
      console.error('O formulário é inválido. Por favor, verifique os campos obrigatórios.');
      this.markFormGroupTouched(this.formularioProfissionalSaude);
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

