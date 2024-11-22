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

@Component({
  selector: 'app-editar-exames-credenciados',
  templateUrl: './editar-exames-credenciados.component.html',
  styleUrls: ['./editar-exames-credenciados.component.css']
})
export class EditarExamesCredenciadosComponent {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioExames: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  exames: any[] = [];
  exames1: GetExamesModel[] = [];
  id: string | null = null;
  exame: GetExamesModel | null = null; // Inicializar como null
  examecredenciado: GetExamesCredenciadosModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private config: NgSelectConfig,
    private ExamesCredenciadosService: ExamesCredenciadosService,
    private ExamesService: ExamesService,
  ) {
    this.formularioExames = this.formBuilder.group({
      idExameCredenciado: ['', Validators.required],
      valorCredenciado: ['', Validators.required],
      valorJb: ['', Validators.required],
      idExames: ['', Validators.required],
    });
    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.consultarExames();
    this.consultarExamesCredenciadosPorId();
  }

  consultarExamesCredenciadosPorId(): void {
    if (this.id) {
      this.ExamesCredenciadosService.consultarExamesCredenciadosPorId(this.id).subscribe(
        (data: GetExamesCredenciadosModel) => { // Atualizado para esperar um único objeto
          this.examecredenciado = [data]; // Convertendo o objeto em array
          if (this.examecredenciado.length > 0) {
            const selectedExame = this.examecredenciado[0]; // Exemplo: Selecionar o primeiro exame
            this.formularioExames.patchValue({
              idExameCredenciado: selectedExame.idExameCredenciado,
              valorCredenciado: selectedExame.valorCredenciado,
              valorJb: selectedExame.valorJb,

            });
          }
        },
        (error: any) => {
          console.error('Erro ao buscar exames credenciados:', error);
        }
      );
    }
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

  EditarExamesCredenciados() {
    // Log inicial para verificar se a função está sendo chamada
    console.log('Função criarExamesCredenciados() foi chamada.');
  
    if (this.formularioExames.valid) {
      // Converta os valores do formulário para o modelo PostExamesCredenciadosModel
      const exames: PutExamesCredenciadosModel = this.formularioExames.value as PutExamesCredenciadosModel;
  
      // Enviar os dados para o serviço
      this.ExamesCredenciadosService.editarExamesCredenciados(exames).subscribe(
        response => {
          // Log para confirmar que o exame foi criado com sucesso
          console.log('Exame editado com sucesso:', response);
          this.cadastroSucesso = 'Exame editado com sucesso!';
          // Adicione qualquer lógica adicional necessária após a criação do exame, como redirecionar ou limpar o formulário
        },
        error => {
          // Log para capturar e exibir erros
          console.error('Erro ao editar Exame:', error);
          this.cadastroErro = 'Erro ao editar Exame. Por favor, tente novamente.';
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
