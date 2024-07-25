import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UnidadeDocService } from 'src/app/services/unidadedoc.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-consultar-documentos-por-unidades',
  templateUrl: './consultar-documentos-por-unidades.component.html',
  styleUrls: ['./consultar-documentos-por-unidades.component.css']
})
export class ConsultarDocumentosPorUnidadesComponent implements OnInit {

  associacoes: any[] = []; // Define an array to hold the associacoes
  paginaAtual: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };

  constructor(
    private unidadeDocService: UnidadeDocService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.consultarDocumentosUnidades();
  }

  consultarDocumentosUnidades(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    if (id) {
      this.unidadeDocService.getUnidadeDocByIdDocumentos(id).subscribe(
        (data: any) => {
          this.associacoes = data.associacoes; // Extracting associacoes from the response
          console.log('Associacoes fetched:', this.associacoes);
        },
        (error: any) => {
          console.error('Error fetching associacoes:', error);
        }
      );
    } else {
      console.error('ID not found in route parameters');
    }
  }


}
