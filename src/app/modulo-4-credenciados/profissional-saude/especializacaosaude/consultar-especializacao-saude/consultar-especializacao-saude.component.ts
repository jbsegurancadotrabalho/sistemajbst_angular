import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { FormacaoSaudeService } from 'src/app/services/formacaosaude.service';
import { GetFormacaoSaudeModel } from 'src/app/models/profissional-saude/formacao/GetFormacaoSaudeModel';
import { GetEspecializacaoSaudeModel } from 'src/app/models/profissional-saude/formacao/especializacao-saude/GetEspecializacaoSaudeModel';

@Component({
  selector: 'app-consultar-especializacao-saude',
  templateUrl: './consultar-especializacao-saude.component.html',
  styleUrls: ['./consultar-especializacao-saude.component.css']
})
export class ConsultarEspecializacaoSaudeComponent {


  @ViewChild('planoSelect') planoSelect!: ElementRef;

  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  especializacao: any[] = []; // Use any[] se você quiser acessar todos os dados diretamente
  credenciadoDetalhes: GetFormacaoSaudeModel | null = null; // Adicione um campo para armazenar detalhes




  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private config: NgSelectConfig,
    private FormacaoSaudeService : FormacaoSaudeService,
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
      this.FormacaoSaudeService.consultarFormacaoSaudePorId(this.id).subscribe(
        (data: GetFormacaoSaudeModel  ) => {
          this.credenciadoDetalhes = data; 
          this.especializacao = data.especializacaosaude;

          console.log('Detalhes do Credenciado:', this.credenciadoDetalhes);
          console.log('Exames do Credenciado:', this.especializacao);
        },
        (error: any) => {
          console.error('Error fetching credenciado details:', error);
        }
      );
    }
  }



 
}


