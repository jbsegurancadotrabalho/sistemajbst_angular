import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncaoEspecificaService } from 'src/app/services/funcaoespecifica.service';// Import the service
import { PutFuncaoDocModel } from 'src/app/models/funcaodoc/PutFuncaoDocModel';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoNrService } from 'src/app/services/curso-nrsfuncoes.service'; 
import { PostEpiIncluirFuncaoEspecificaModel } from 'src/app/models/sms/PostEpiIncluirFuncaoEspecificaModel';  // Importe o modelo
import { GetFuncaoEspecificaUnidadeModel } from 'src/app/models/funcao-especifica/GetFuncaoEspecificaUnidadeModel';


@Component({
  selector: 'app-consultar-curso-de-nrs-funcoes-especifica',
  templateUrl: './consultar-curso-de-nrs-funcoes-especifica.component.html',
  styleUrls: ['./consultar-curso-de-nrs-funcoes-especifica.component.css']
})
export class ConsultarCursoDeNrsFuncoesEspecificaComponent implements OnInit {
  
  funcaoid: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };


  constructor(
    private FuncaoEspecificaService : FuncaoEspecificaService ,
    private activatedRoute: ActivatedRoute,
    private CursoNrService : CursoNrService ,
  ) {}

  ngOnInit(): void {
    this.consultarFuncao();
  }

  consultarFuncao(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.FuncaoEspecificaService.consultarFuncaoPorId(id).subscribe(
      (data: any) => {
        this.funcaoid = data.cursodenrs;
        console.log('Epi fetched:', this.funcaoid);
      },
      (error: any) => {
        console.error('Error fetching epi:', error);
      }
    );
  }

  excluirCursos(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o Epi "${nome}"?`)) {
      this.CursoNrService.excluirCursos(id).subscribe(
        (response: any) => {
          console.log('Epi excluído com sucesso:', response);
          this.consultarFuncao();
        },
        (error: any) => {
          console.error('Erro ao excluir epi:', error);
        }
      );
    }
}

}
