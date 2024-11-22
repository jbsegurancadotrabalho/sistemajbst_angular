import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import 'select2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { GetCursoModel } from 'src/app/models/sms/GetCursoNrsFuncoesModel';
import { CredenciadoService } from 'src/app/services/credenciados.service';
import { GetCredenciadosModel } from 'src/app/models/credenciados/GetCredenciadosModel';
import { GetAvaliacoesModel } from 'src/app/models/avaliacoes-ocupacionais/GetAvaliacoesModel';
import { AvaliacoesOcupacionaisService } from 'src/app/services/avaliacoes-ocupacionais.service';
import { AvaliacoesOcupacionaisCredenciadosService } from 'src/app/services/avaliacoes-ocupacionais-credenciados.service';
import { PostAvaliacoesOcupacionaisCredenciadosModel } from 'src/app/models/avaliacoes-ocupacionais/avaliacoes-ocupacionais-credenciados/PostAvaliacoesOcupacionaisCredenciadosModel';

@Component({
  selector: 'app-criar-avaliacoes-ocupacionais-credenciados',
  templateUrl: './criar-avaliacoes-ocupacionais-credenciados.component.html',
  styleUrls: ['./criar-avaliacoes-ocupacionais-credenciados.component.css']
})
export class CriarAvaliacoesOcupacionaisCredenciadosComponent {

  
@ViewChild('planoSelect') planoSelect!: ElementRef;



formularioAvaliacoesCredenciados: FormGroup;
cadastroSucesso: string | null = null;
cadastroErro: string | null = null;
avaliacao: any [] = []
avaliacoes: GetAvaliacoesModel [] = [];
id: string | null = null;
credenciado: GetCredenciadosModel | null = null; // Inicializar como null
credenciados: GetCredenciadosModel [] = [];

constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute, 
  private config: NgSelectConfig,
  private AvaliacoesOcupacionaisService: AvaliacoesOcupacionaisService,
  private CredenciadoService: CredenciadoService,
  private AvaliacoesOcupacionaisCredenciadosService:AvaliacoesOcupacionaisCredenciadosService,

) 

{
  this.formularioAvaliacoesCredenciados= this.formBuilder.group({
    nome_avaliacoes: ['', Validators.required],
    valorCredenciado: ['', Validators.required],
    valorJB: ['', Validators.required],
    idAvaliacoes: ['', ],
    idCredenciado: ['', ],


  });
  this.config.notFoundText = 'Não Encontrado';
  this.config.appendTo = 'body';
  this.config.bindValue = 'value';
}
ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id');
  this.consultarAvaliações();
  this.consultarCredenciados();

}

consultarAvaliações(): void {
  this.AvaliacoesOcupacionaisService.consultarAvaliações().subscribe(
    (data: GetAvaliacoesModel[]) => { // Handle as an array
      this.avaliacoes = data;
      if (this.avaliacao.length > 0) {
        const selectedAvaliacao = this.avaliacao[0]; // Example: Select the first exam
        this.formularioAvaliacoesCredenciados.patchValue({
          idAvaliacoes: selectedAvaliacao.idAvaliacoes,
          nome_avaliacoes: selectedAvaliacao.nome_avaliacoes,
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

        if (this.credenciado) {
          // Garante que o idCredenciado existe e não é nulo
          if (this.credenciado.idCredenciado) {
            this.formularioAvaliacoesCredenciados.patchValue({
              idCredenciado: this.credenciado.idCredenciado,  // Ajustando o ID do credenciado
            });
          } else {
            console.error('idCredenciado não está disponível no objeto credenciado.');
          }
        } else {
          console.error('O objeto credenciado retornado é nulo.');
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
      this.formularioAvaliacoesCredenciados.get('idAvaliacoes')?.setValue(selectedValue);
      this.formularioAvaliacoesCredenciados.get('idAvaliacoes')?.updateValueAndValidity();
    });

    const lastOptionValue = this.avaliacoes.length > 0 ? this.avaliacoes[this.avaliacoes.length - 1].idAvaliacoes : '';

    selectElement.next().find('.select2-selection').addClass('form-control');
    selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');

    selectElement.val(lastOptionValue).trigger('change');
  }
}


criarAvaliacoesCredenciados(): void {
  // Verifica se o formulário é válido antes de enviar
  if (this.formularioAvaliacoesCredenciados.valid) {
    // Converte os valores do formulário para o modelo PostCursosCredenciadosModel
    const curso: PostAvaliacoesOcupacionaisCredenciadosModel = this.formularioAvaliacoesCredenciados.value as PostAvaliacoesOcupacionaisCredenciadosModel;

    // Chama o serviço para criar o curso credenciado
    this.AvaliacoesOcupacionaisCredenciadosService.criarAvaliacoesOcupacionaisCredenciados(curso).subscribe(
      response => {
        // Log de sucesso no console
        console.log('Avaliação Ocupacional criada com sucesso:', response);
        // Armazena a mensagem de sucesso na variável
        this.cadastroSucesso = 'Avaliação Ocupacional criada com sucesso!';
      },
      error => {
        // Log de erro no console
        console.error('Erro ao criar Avaliação Ocupacional:', error);
        // Armazena a mensagem de erro na variável
        this.cadastroErro = 'Erro ao criar Avaliação Ocupacional. Por favor, tente novamente.';
      }
    );
  } else {
    // Log de formulário inválido no console
    console.error('O formulário é inválido. Por favor, verifique os campos obrigatórios.');
    // Marca todos os campos do formulário como tocados para exibir os erros
    this.markFormGroupTouched(this.formularioAvaliacoesCredenciados);
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




