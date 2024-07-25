import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncaoEspecificaService } from 'src/app/services/funcaoespecifica.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { ExameService } from 'src/app/services/examesfuncaodoc.service'; 


@Component({
  selector: 'app-consultar-exames-funcao-especifica',
  templateUrl: './consultar-exames-funcao-especifica.component.html',
  styleUrls: ['./consultar-exames-funcao-especifica.component.css']
})
export class ConsultarExamesFuncaoEspecificaComponent implements OnInit {
  
  funcaoid: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };


  constructor(
    private FuncaoEspecificaService : FuncaoEspecificaService ,
    private activatedRoute: ActivatedRoute,
    private ExameService: ExameService,
  ) {}

  ngOnInit(): void {
    this.consultarFuncao();
  }

  consultarFuncao(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.FuncaoEspecificaService.consultarFuncaoPorId(id).subscribe(
      (data: any) => {
        this.funcaoid = data.examesfuncaodoc;
        console.log('Epi fetched:', this.funcaoid);
      },
      (error: any) => {
        console.error('Error fetching epi:', error);
      }
    );
  }

  excluirExames(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o Exame "${nome}"?`)) {
      this.ExameService.excluirExames(id).subscribe(
        (response: any) => {
          console.log('Exame excluído com sucesso:', response);
          this.consultarFuncao();
        },
        (error: any) => {
          console.error('Erro ao excluir exame:', error);
        }
      );
    }
}

}