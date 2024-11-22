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

@Component({
  selector: 'app-criar-exames-credenciados',
  templateUrl: './criar-exames-credenciados.component.html',
  styleUrls: ['./criar-exames-credenciados.component.css']
})
export class CriarExamesCredenciadosComponent {
  @ViewChild('planoSelect') planoSelect!: ElementRef;



  formularioExames: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  exames: any [] = []
  exames1: GetExamesModel [] = [];
  id: string | null = null;
  credenciado: GetCredenciadosModel | null = null; // Inicializar como null

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private config: NgSelectConfig,
    private ExamesCredenciadosService: ExamesCredenciadosService,
    private ExamesService: ExamesService,
    private CredenciadoService: CredenciadoService
  ) 

  {
    this.formularioExames= this.formBuilder.group({
      valorCredenciado: ['', Validators.required],
      valorJb: ['', Validators.required],
      idExames: ['', Validators.required],
      idCredenciado: ['', Validators.required],
    });
    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.consultarExames();
    this.consultarCredenciados();

  }
  
  consultarExames(): void {
    this.ExamesService.consultarExames().subscribe(
      (data: GetExamesModel[]) => { // Handle as an array
        this.exames1 = data;
        if (this.exames1.length > 0) {
          const selectedExame = this.exames1[0]; // Example: Select the first exam
          this.formularioExames.patchValue({
            idExames: selectedExame.idExames,
            nome_exame: selectedExame.nome_exame,
          });
        }
      },
      (error: any) => {
        console.error('Erro ao buscar exames:', error);
      }
    );
  }

  consultarCredenciados(): void {
    if (this.id) {
        this.CredenciadoService.consultarCredenciadoPorId(this.id).subscribe(
            (data: GetCredenciadosModel) => { 
                this.credenciado = data;

                // Selecione o primeiro exame da lista, se existir
                if (this.exames1.length > 0) {
                    const selectedExame = this.exames1[0]; 
                    
                    // Aqui, você deve garantir que 'selectedExame' tenha a propriedade 'idCredenciado'
                    this.formularioExames.patchValue({
                        idCredenciado: this.credenciado.idCredenciado,  // Ajustando o ID do credenciado
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
  criarExamesCredenciados() {
    // Log inicial para verificar se a função está sendo chamada
    console.log('Função criarExamesCredenciados() foi chamada.');
  
    if (this.formularioExames.valid) {
      // Converta os valores do formulário para o modelo PostExamesCredenciadosModel
      const exames: PostExamesCredenciadosModel = this.formularioExames.value as PostExamesCredenciadosModel;
  
      // Enviar os dados para o serviço
      this.ExamesCredenciadosService.criarExamesCredenciados(exames).subscribe(
        response => {
          // Log para confirmar que o exame foi criado com sucesso
          console.log('Exame criado com sucesso:', response);
          this.cadastroSucesso = 'Exame criado com sucesso!';
          // Adicione qualquer lógica adicional necessária após a criação do exame, como redirecionar ou limpar o formulário
        },
        error => {
          // Log para capturar e exibir erros
          console.error('Erro ao criar Exame:', error);
          this.cadastroErro = 'Erro ao criar Exame. Por favor, tente novamente.';
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

}

