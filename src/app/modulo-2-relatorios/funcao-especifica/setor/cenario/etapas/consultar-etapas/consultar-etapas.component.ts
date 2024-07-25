import { Component, OnInit } from '@angular/core';
import { EtapasService } from 'src/app/services/etapas.service'; 
import { ActivatedRoute } from '@angular/router';
import { CenarioService } from 'src/app/services/cenario.service'; 



@Component({
  selector: 'app-consultar-etapas',
  templateUrl: './consultar-etapas.component.html',
  styleUrls: ['./consultar-etapas.component.css']
})
export class ConsultarEtapasComponent implements OnInit {
  etapas: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };


  constructor(
    private  EtapasService :  EtapasService,
    private activatedRoute: ActivatedRoute,
    private CenarioService : CenarioService,
  ) {}

  ngOnInit(): void {
    this.consultarCenario();
  }

  consultarCenario(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.CenarioService.consultarCenarioPorId(id).subscribe(
      (data: any) => {
        this.etapas = data.etapas;
        console.log('Perigos fetched:', this.etapas);
      },
      (error: any) => {
        console.error('Error fetching perigos:', error);
      }
    );
  }

  excluirEtapas(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir a etapa "${nome}"?`)) {
      this.EtapasService.excluirEtapas(id).subscribe(
        (response: any) => {
          console.log('Etapa excluída com sucesso:', response);
          this.consultarCenario();
        },
        (error: any) => {
          console.error('Erro ao excluir cenário:', error);
        }
      );
    }
  }

}