import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnidadeDocService } from 'src/app/services/unidadedoc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultar-funcao-das-unidades',
  templateUrl: './consultar-funcao-das-unidades.component.html',
  styleUrls: ['./consultar-funcao-das-unidades.component.css']
})
export class ConsultarFuncaoDasUnidadesComponent implements OnInit {
  unidadeForm!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  funcoes: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };

  constructor(
    private formBuilder: FormBuilder,
    private unidadeDocService: UnidadeDocService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.consultarFuncao();
  }

  consultarFuncao(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.unidadeDocService.getUnidadeDocById(id).subscribe(
      (data: any) => {
        this.funcoes = data.funcaodoc;
        console.log('Perigos fetched:', this.funcoes);
      },
      (error: any) => {
        console.error('Error fetching Epi:', error);
      }
    );
  }

  excluirFuncao(idFuncao: string): void {
    var idUnidade = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.unidadeDocService.excluirFuncao(idUnidade, idFuncao).subscribe(
      () => {
        console.log('Função excluída com sucesso');
        this.consultarFuncao(); // Atualiza a lista de funções
      },
      (error: any) => {
        console.error('Erro ao excluir função:', error);
      }
    );
  }

}

