import { Component, OnInit } from '@angular/core';
import { FuncaoEspecificaService } from 'src/app/services/funcaoespecifica.service';
import { ActivatedRoute } from '@angular/router';
import { RiscosService } from 'src/app/services/riscos.service'; 


@Component({
  selector: 'app-consultar-riscos-funcao-especifica',
  templateUrl: './consultar-riscos-funcao-especifica.component.html',
  styleUrls: ['./consultar-riscos-funcao-especifica.component.css']
})
export class ConsultarRiscosFuncaoEspecificaComponent implements OnInit {
  
  funcaoid: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };


  constructor(
    private FuncaoEspecificaService : FuncaoEspecificaService ,
    private activatedRoute: ActivatedRoute,
    private RiscosService: RiscosService,
  ) {}

  ngOnInit(): void {
    this.consultarFuncao();
  }

  consultarFuncao(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.FuncaoEspecificaService.consultarFuncaoPorId(id).subscribe(
      (data: any) => {
        this.funcaoid = data.riscos;
        console.log('Perigos fetched:', this.funcaoid);
      },
      (error: any) => {
        console.error('Error fetching perigos:', error);
      }
    );
  }

  excluirRisco(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o Risco "${nome}"?`)) {
      this.RiscosService.excluirRisco(id).subscribe(
        (response: any) => {
          console.log('Perigo excluído com sucesso:', response);
          this.consultarFuncao();
        },
        (error: any) => {
          console.error('Erro ao excluir função:', error);
        }
      );
    }
}

}

