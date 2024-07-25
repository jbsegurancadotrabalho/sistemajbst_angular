import { Component, OnInit } from '@angular/core';
import { DocumentosFreeService } from 'src/app/services/documentosfree.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gerar-pta-free',
  templateUrl: './gerar-pta-free.component.html',
  styleUrls: ['./gerar-pta-free.component.css']
})
export class GerarPtaFreeComponent implements OnInit {

  documentosfree: any = {}; // Usaremos um objeto único, pois parece que recebemos um objeto único da API
  paginaAtual: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };

  constructor(
    private DocumentosFreeService: DocumentosFreeService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.consultarDocumentosUnidades();
  }

  consultarDocumentosUnidades(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    if (id) {
      this.DocumentosFreeService.consultarDocumentosPorId(id).subscribe(
        (data: any) => {
          console.log('Response data:', data); // Log the full response
          this.documentosfree = Array.isArray(data) ? data : [data]; // Adjust this line according to your API response structure
          console.log('Associacoes fetched:', this.documentosfree);
        },
        (error: any) => {
          console.error('Error fetching associacoes:', error);
        }
      );
    } else {
      console.error('ID not found in route parameters');
    }
  }

  printPage() {
    window.print();
  }
}

