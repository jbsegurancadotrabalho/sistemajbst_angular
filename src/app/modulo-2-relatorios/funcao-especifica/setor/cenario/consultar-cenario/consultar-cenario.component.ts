import { Component, OnInit } from '@angular/core';
import { SetorService } from 'src/app/services/setor.service'; 
import { ActivatedRoute } from '@angular/router';
import { CenarioService } from 'src/app/services/cenario.service'; 


@Component({
  selector: 'app-consultar-cenario',
  templateUrl: './consultar-cenario.component.html',
  styleUrls: ['./consultar-cenario.component.css']
})
export class ConsultarCenarioComponent implements OnInit {
  cenarios: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };


  constructor(
    private  SetorService:  SetorService,
    private activatedRoute: ActivatedRoute,
    private CenarioService : CenarioService,
  ) {}

  ngOnInit(): void {
    this.consultarSetor();
  }

  consultarSetor(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.SetorService.consultarSetorPorId(id).subscribe(
      (data: any) => {
        this.cenarios = data.cenario;
        console.log('Perigos fetched:', this.cenarios);
      },
      (error: any) => {
        console.error('Error fetching perigos:', error);
      }
    );
  }

  excluirCenario(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o cenário "${nome}"?`)) {
      this.CenarioService.excluirCenario(id).subscribe(
        (response: any) => {
          console.log('Cenário excluído com sucesso:', response);
          this.consultarSetor();
        },
        (error: any) => {
          console.error('Erro ao excluir cenário:', error);
        }
      );
    }
  }

}