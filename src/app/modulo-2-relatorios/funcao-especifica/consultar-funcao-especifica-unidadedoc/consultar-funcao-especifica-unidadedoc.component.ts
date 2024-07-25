import { Component, OnInit } from '@angular/core';
import { FuncaoEspecificaService } from 'src/app/services/funcaoespecifica.service'; 
import { ActivatedRoute } from '@angular/router';
import { CenarioService } from 'src/app/services/cenario.service'; 



@Component({
  selector: 'app-consultar-funcao-especifica-unidadedoc',
  templateUrl: './consultar-funcao-especifica-unidadedoc.component.html',
  styleUrls: ['./consultar-funcao-especifica-unidadedoc.component.css']
})
export class ConsultarFuncaoEspecificaUnidadedocComponent  implements OnInit {
  cenario: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };


  constructor(
    private  FuncaoEspecificaService:  FuncaoEspecificaService,
    private activatedRoute: ActivatedRoute,
    private CenarioService : CenarioService,
  ) {}

  ngOnInit(): void {
    this.consultarFuncao();
  }

  consultarFuncao(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.CenarioService.consultarCenarioPorId(id).subscribe(
      (data: any) => {
        this.cenario = data.funcaoespecifica;
        console.log('Perigos fetched:', this.cenario);
      },
      (error: any) => {
        console.error('Error fetching perigos:', error);
      }
    );
  }

  excluirFuncao(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir a função "${nome}"?`)) {
      this.FuncaoEspecificaService.excluirFuncao(id).subscribe(
        (response: any) => {
          console.log('Função excluída com sucesso:', response);
          this.consultarFuncao();
        },
        (error: any) => {
          console.error('Erro ao excluir setor:', error);
        }
      );
    }
  }

}