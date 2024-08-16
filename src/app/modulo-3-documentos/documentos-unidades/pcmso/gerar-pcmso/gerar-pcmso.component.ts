import { Component, OnInit } from '@angular/core';
import { DocumentosService } from 'src/app/services/documentos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gerar-pcmso',
  templateUrl: './gerar-pcmso.component.html',
  styleUrls: ['./gerar-pcmso.component.css']
})
export class GerarPcmsoComponent implements OnInit {

  associacoes: any[] = []; // Modificado para uma lista para melhor gerenciamento de dados
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
          this.associacoes = Array.isArray(data) ? data : [data]; // Ajusta esta linha de acordo com a estrutura da resposta da API
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
