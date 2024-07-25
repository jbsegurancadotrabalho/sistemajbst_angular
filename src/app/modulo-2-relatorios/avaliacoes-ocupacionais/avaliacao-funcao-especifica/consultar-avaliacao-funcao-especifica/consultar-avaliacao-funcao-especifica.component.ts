import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncaoEspecificaService } from 'src/app/services/funcaoespecifica.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { AvaliacaoFuncao } from 'src/app/services/avaliacoes.funcoes.service'; 

@Component({
  selector: 'app-consultar-avaliacao-funcao-especifica',
  templateUrl: './consultar-avaliacao-funcao-especifica.component.html',
  styleUrls: ['./consultar-avaliacao-funcao-especifica.component.css']
})
export class ConsultarAvaliacaoFuncaoEspecificaComponent implements OnInit {
  
  funcaoid: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };


  constructor(
    private FuncaoEspecificaService : FuncaoEspecificaService ,
    private activatedRoute: ActivatedRoute,
    private  AvaliacaoFuncao:  AvaliacaoFuncao,
  ) {}

  ngOnInit(): void {
    this.consultarFuncao();
  }

  consultarFuncao(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.FuncaoEspecificaService.consultarFuncaoPorId(id).subscribe(
      (data: any) => {
        this.funcaoid = data.avaliaçõesocupacionaisfuncoes;
        console.log('Epi fetched:', this.funcaoid);
      },
      (error: any) => {
        console.error('Error fetching epi:', error);
      }
    );
  }

  excluirAvaliacao(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir a Avaliação "${nome}"?`)) {
      this. AvaliacaoFuncao.excluirAvaliações(id).subscribe(
        (response: any) => {
          console.log('Avaliação excluída com sucesso:', response);
          this.consultarFuncao();
        },
        (error: any) => {
          console.error('Erro ao excluir epi:', error);
        }
      );
    }
}

}

