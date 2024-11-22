import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import 'select2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { AvaliacoesOcupacionaisService } from 'src/app/services/avaliacoes-ocupacionais.service';
import { PostAvaliacoesModel } from 'src/app/models/avaliacoes-ocupacionais/PostAvaliacoesModel';



@Component({
  selector: 'app-criar-avaliacoes-ocupacionais',
  templateUrl: './criar-avaliacoes-ocupacionais.component.html',
  styleUrls: ['./criar-avaliacoes-ocupacionais.component.css']
})
export class CriarAvaliacoesOcupacionaisComponent {


  formularioAvaliacoes: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private config: NgSelectConfig,
    private AvaliacoesOcupacionaisService: AvaliacoesOcupacionaisService,

  ) 
  
  
  {

    this.formularioAvaliacoes = this.formBuilder.group({
      nome_avaliacoes: ['', Validators.required],
      descricao_avaliacoes: ['', Validators.required],


    });

    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';

    
  }

  ngOnInit(): void {
    this.formularioAvaliacoes = this.formBuilder.group({
      nome_avaliacoes: ['', Validators.required],
      descricao_avaliacoes: ['', Validators.required],

    });


  }


  criarAvaliacoes() {
    // Verifique se o formulário é válido
    if (this.formularioAvaliacoes.valid) {
      const avaliacoes: PostAvaliacoesModel = this.formularioAvaliacoes.value as PostAvaliacoesModel;
      this.AvaliacoesOcupacionaisService.criarAvaliacoesOcupacionais(avaliacoes).subscribe(
        response => {
          console.log('Avaliação Ocupacional criada com sucesso:', response);
          this.cadastroSucesso = 'Avaliação criada com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar Avaliações Ocupacionais:', error);
          this.cadastroErro = 'Erro ao criar Avaliações. Por favor, tente novamente.';
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
