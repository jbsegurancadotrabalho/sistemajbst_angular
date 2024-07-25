import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncaoEspecificaService } from 'src/app/services/funcaoespecifica.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { EpiService } from 'src/app/services/epi.service'; 



@Component({
  selector: 'app-consultar-epi-funcao-especifica',
  templateUrl: './consultar-epi-funcao-especifica.component.html',
  styleUrls: ['./consultar-epi-funcao-especifica.component.css']
})
export class ConsultarEpiFuncaoEspecificaComponent  implements OnInit {
  
  funcaoid: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };


  constructor(
    private FuncaoEspecificaService : FuncaoEspecificaService ,
    private activatedRoute: ActivatedRoute,
    private EpiService: EpiService,
  ) {}

  ngOnInit(): void {
    this.consultarFuncao();
  }

  consultarFuncao(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.FuncaoEspecificaService.consultarFuncaoPorId(id).subscribe(
      (data: any) => {
        this.funcaoid = data.epi;
        console.log('Epi fetched:', this.funcaoid);
      },
      (error: any) => {
        console.error('Error fetching epi:', error);
      }
    );
  }

  excluirEpi(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o Epi "${nome}"?`)) {
      this.EpiService.excluirEpi(id).subscribe(
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
