import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import 'select2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { ExamesService } from 'src/app/services/exames.service';
import { PostExamesModel } from 'src/app/models/exames/PostExamesModel';




@Component({
  selector: 'app-criar-exames',
  templateUrl: './criar-exames.component.html',
  styleUrls: ['./criar-exames.component.css']
})
export class CriarExamesComponent {



  formularioExames: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private config: NgSelectConfig,
    private ExamesService:  ExamesService

  ) 
  
  
  {

    this.formularioExames= this.formBuilder.group({
      nome_exame: ['', Validators.required],
      tipo_exame: ['', Validators.required],
      descricao_exame: ['', Validators.required],


    });

    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';

    
  }

  ngOnInit(): void {
    this.formularioExames= this.formBuilder.group({
      nome_exame: ['', Validators.required],
      tipo_exame: ['', Validators.required],
      descricao_exame: ['', Validators.required],

    });


  }






  criarExames() {
    // Verifique se o formulário é válido
    if (this.formularioExames.valid) {
      const exames: PostExamesModel = this.formularioExames.value as PostExamesModel;
      this.ExamesService.criarExames(exames).subscribe(
        response => {
          console.log('Exame criado com sucesso:', response);
          this.cadastroSucesso = 'Exame criado com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar Exame:', error);
          this.cadastroErro = 'Erro ao criar Exame. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
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
