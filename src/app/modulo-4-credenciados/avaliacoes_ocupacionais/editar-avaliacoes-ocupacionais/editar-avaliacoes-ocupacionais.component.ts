import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import 'select2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { AvaliacoesOcupacionaisService } from 'src/app/services/avaliacoes-ocupacionais.service';
import { PostAvaliacoesModel } from 'src/app/models/avaliacoes-ocupacionais/PostAvaliacoesModel';
import { PutAvaliacoesModel } from 'src/app/models/avaliacoes-ocupacionais/PutAvaliacoesModel';


@Component({
  selector: 'app-editar-avaliacoes-ocupacionais',
  templateUrl: './editar-avaliacoes-ocupacionais.component.html',
  styleUrls: ['./editar-avaliacoes-ocupacionais.component.css']
})
export class EditarAvaliacoesOcupacionaisComponent {


  formularioAvaliacoes: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;
  avaliacoes: PutAvaliacoesModel | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private config: NgSelectConfig,
    private AvaliacoesOcupacionaisService: AvaliacoesOcupacionaisService,

  ) 
  
  
  {

    this.formularioAvaliacoes = this.formBuilder.group({
      idAvaliacoes: ['', Validators.required],
      nome_avaliacoes: ['', Validators.required],
      descricao_avaliacoes: ['', Validators.required],


    });

    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';

    
  }

  ngOnInit(): void {
    this.formularioAvaliacoes = this.formBuilder.group({
      idAvaliacoes: ['', Validators.required],
      nome_avaliacoes: ['', Validators.required],
      descricao_avaliacoes: ['', Validators.required],

    });

    this.buscarExamePorId();

  }


  buscarExamePorId(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.AvaliacoesOcupacionaisService.consultarAvaliacoesPorId(this.id).subscribe(
        (data: PutAvaliacoesModel) => {
          this.avaliacoes = data;
          this.formularioAvaliacoes .patchValue(data);

        },
        (error: any) => {
          console.error('Erro ao buscar exame:', error);
        }
      );
    } else {
      console.error('ID não encontrado na rota.');
    }
  }

  criarAvaliacoes() {
    // Verifique se o formulário é válido
    if (this.formularioAvaliacoes.valid) {
      const avaliacoes: PutAvaliacoesModel = this.formularioAvaliacoes.value as PutAvaliacoesModel;
      this.AvaliacoesOcupacionaisService.editarAvaliacoes(avaliacoes).subscribe(
        response => {
          console.log('Avaliação Ocupacional editada com sucesso:', response);
          this.cadastroSucesso = 'Avaliação editada com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao editar Avaliações Ocupacionais:', error);
          this.cadastroErro = 'Erro ao editar Avaliações. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this.formularioAvaliacoes);
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
