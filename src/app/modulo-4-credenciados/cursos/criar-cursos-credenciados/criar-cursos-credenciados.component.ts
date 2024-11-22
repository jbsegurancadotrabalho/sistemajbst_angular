import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import 'select2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { CursosCredenciadoService } from 'src/app/services/cursos-credenciados.service';
import { CursosService } from 'src/app/services/cursos.service';
import { GetCursoModel } from 'src/app/models/sms/GetCursoNrsFuncoesModel';
import { CredenciadoService } from 'src/app/services/credenciados.service';
import { GetCredenciadosModel } from 'src/app/models/credenciados/GetCredenciadosModel';
import { PostCursosCredenciadosModel } from 'src/app/models/cursos_credenciados/PostCursosCredenciadosModel';
import { GetCursosModel } from 'src/app/models/cursos/GetCursosModel';


@Component({
  selector: 'app-criar-cursos-credenciados',
  templateUrl: './criar-cursos-credenciados.component.html',
  styleUrls: ['./criar-cursos-credenciados.component.css']
})
export class CriarCursosCredenciadosComponent {
@ViewChild('planoSelect') planoSelect!: ElementRef;



  formularioCursosCredenciados: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  cursos: any [] = []
  cursos1: GetCursosModel [] = [];
  id: string | null = null;
  credenciado: GetCredenciadosModel | null = null; // Inicializar como null

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private config: NgSelectConfig,
    private CursosCredenciadoService: CursosCredenciadoService,
    private CredenciadoService: CredenciadoService,
    private CursosService: CursosService,

  ) 

  {
    this.formularioCursosCredenciados= this.formBuilder.group({
      nomeCursosCredenciados: ['', Validators.required],
      statusCursosCredenciados: ['', Validators.required],
      valorCredenciado: ['', Validators.required],
      valorJB: ['', Validators.required],
      idcurso: ['', Validators.required],
      idCredenciado: ['', Validators.required],


    });
    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.consultarCursos();
    this.consultarCredenciados();

  }
  
  consultarCursos(): void {
    this.CursosService.consultarCursos().subscribe(
      (data: GetCursosModel[]) => { // Handle as an array
        this.cursos1 = data;
        if (this.cursos1.length > 0) {
          const selectedCurso = this.cursos1[0]; // Example: Select the first exam
          this.formularioCursosCredenciados.patchValue({
            idcurso: selectedCurso.idcurso,
            curso: selectedCurso.curso,
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
                if (this.cursos1.length > 0) {
                    const selectedExame = this.cursos1[0]; 
                    
                    // Aqui, você deve garantir que 'selectedExame' tenha a propriedade 'idCredenciado'
                    this.formularioCursosCredenciados.patchValue({
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
        this.formularioCursosCredenciados.get('idcurso')?.setValue(selectedValue);
        this.formularioCursosCredenciados.get('idcurso')?.updateValueAndValidity();
      });
  
      const lastOptionValue = this.cursos.length > 0 ? this.cursos[this.cursos.length - 1].idcurso : '';
  
      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      selectElement.val(lastOptionValue).trigger('change');
    }
  }

  
  criarCursosCredenciados(): void {
    // Verifica se o formulário é válido antes de enviar
    if (this.formularioCursosCredenciados.valid) {
      // Converte os valores do formulário para o modelo PostCursosCredenciadosModel
      const curso: PostCursosCredenciadosModel = this.formularioCursosCredenciados.value as PostCursosCredenciadosModel;
  
      // Chama o serviço para criar o curso credenciado
      this.CursosCredenciadoService.criarCursoCredenciado(curso).subscribe(
        response => {
          // Log de sucesso no console
          console.log('Curso criado com sucesso:', response);
          // Armazena a mensagem de sucesso na variável
          this.cadastroSucesso = 'Curso criado com sucesso!';
        },
        error => {
          // Log de erro no console
          console.error('Erro ao criar Curso:', error);
          // Armazena a mensagem de erro na variável
          this.cadastroErro = 'Erro ao criar Curso. Por favor, tente novamente.';
        }
      );
    } else {
      // Log de formulário inválido no console
      console.error('O formulário é inválido. Por favor, verifique os campos obrigatórios.');
      // Marca todos os campos do formulário como tocados para exibir os erros
      this.markFormGroupTouched(this.formularioCursosCredenciados);
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

