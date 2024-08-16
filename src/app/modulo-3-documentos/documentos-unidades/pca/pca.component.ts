import { Component, OnInit } from '@angular/core';
import { DocumentosService } from 'src/app/services/documentos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pca',
  templateUrl: './pca.component.html',
  styleUrls: ['./pca.component.css']
})
export class PcaComponent implements OnInit {

  associacoes: any = {}; // Usaremos um objeto único, pois parece que recebemos um objeto único da API
  paginaAtual: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };

  constructor(
    private documentosService: DocumentosService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.consultarDocumentosUnidades();
  }

  consultarDocumentosUnidades(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    if (id) {
      this.documentosService.gerarDocumentosPorId(id).subscribe(
        (data: any) => {
          console.log('Response data:', data); // Log the full response
          this.associacoes = Array.isArray(data) ? data : [data]; // Adjust this line according to your API response structure
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

  printPage() {
    window.print();
  }
}
