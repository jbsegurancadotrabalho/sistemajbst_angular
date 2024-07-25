import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CenarioService } from 'src/app/services/cenario.service'; 

@Component({
  selector: 'app-consultar-documentos-cenarios',
  templateUrl: './consultar-documentos-cenarios.component.html',
  styleUrls: ['./consultar-documentos-cenarios.component.css']
})
export class ConsultarDocumentosCenariosComponent implements OnInit {
  documentos: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };

  constructor(
    private activatedRoute: ActivatedRoute,
    private CenarioService: CenarioService,
  ) {}

  ngOnInit(): void {
    this.consultarCenario();
  }

  consultarCenario(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.CenarioService.consultarCenarioPorId(id).subscribe(
      (data: any) => {
        this.documentos = data.associacoes || [];
        console.log('Associations fetched:', this.documentos);
      },
      (error: any) => {
        console.error('Error fetching associations:', error);
      }
    );
  }
}
