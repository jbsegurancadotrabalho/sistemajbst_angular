import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ProfissionalSaudeService } from 'src/app/services/profissional-saude.service';
import { GetProfissionalSaudeModel } from 'src/app/models/profissional-saude/GetProfissionalSaudeModel';
import { GetFormacaoSaudeModel } from 'src/app/models/profissional-saude/formacao/GetFormacaoSaudeModel';

@Component({
  selector: 'app-consultar-formacao-saude',
  templateUrl: './consultar-formacao-saude.component.html',
  styleUrls: ['./consultar-formacao-saude.component.css']
})
export class ConsultarFormacaoSaudeComponent {


  @ViewChild('planoSelect') planoSelect!: ElementRef;

  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  formacao: any[] = []; // Use any[] se você quiser acessar todos os dados diretamente
  credenciadoDetalhes: GetProfissionalSaudeModel | null = null; // Adicione um campo para armazenar detalhes




  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private config: NgSelectConfig,
    private ProfissionalSaudeService : ProfissionalSaudeService,
    private activatedRoute: ActivatedRoute
  ) {
  

    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id'); // Obter o ID da rota
    if (this.id) {
      this.consultarFormacaoPorId(); // Passar o ID ao método
    }
  }

  consultarFormacaoPorId(): void {
    if (this.id) {
      this.ProfissionalSaudeService.consultarProfissionalSaudePorId(this.id).subscribe(
        (data: GetProfissionalSaudeModel ) => {
          this.credenciadoDetalhes = data; 
          this.formacao = data.formacaosaude;

          console.log('Detalhes do Credenciado:', this.credenciadoDetalhes);
          console.log('Exames do Credenciado:', this.formacao);
        },
        (error: any) => {
          console.error('Error fetching credenciado details:', error);
        }
      );
    }
  }



 
}


