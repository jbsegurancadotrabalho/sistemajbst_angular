import { Component, OnInit } from '@angular/core';
import { DocumentosFreeService } from 'src/app/services/documentosfree.service';  
import { GetEpiModel } from 'src/app/models/sms/GetEpiModel'; 
import { Observable } from 'rxjs';
import { EmpresaService } from 'src/app/services/empresa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultar-documentos-free-cenario',
  templateUrl: './consultar-documentos-free-cenario.component.html',
  styleUrls: ['./consultar-documentos-free-cenario.component.css']
})
export class ConsultarDocumentosFreeCenarioComponent {

  
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  documentosfree: any[] = [];

  
  constructor(
    private DocumentosFreeService : DocumentosFreeService,
    private EmpresaService: EmpresaService,
    private activatedRoute: ActivatedRoute,


  ) {}

  ngOnInit(): void {
    this.consultarDocumentosFree();
  }

  consultarDocumentosFree(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.EmpresaService.getEmpresaById(id).subscribe(
      (data: any) => {
        this.documentosfree = data.documentosfree;
        console.log('Perigos fetched:', this.documentosfree);
      },
      (error: any) => {
        console.error('Error fetching Epi:', error);
      }
    );
  }

  // Método para lidar com a mudança de página
  pageChange(event: any) {
    // Aqui você pode implementar o que deseja fazer quando a página mudar
    console.log('Página mudou para:', event);
    // Por exemplo, você pode buscar as unidades da nova página
    // this.buscarTodasUnidades();
  }

  excluirDocumentosFree(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o Documento "${nome}"?`)) {
      this.DocumentosFreeService.excluirDocumentosFree(id).subscribe(
        (response: any) => {
          console.log('Epi excluída com sucesso:', response);
        },
        (error: any) => {
          console.error('Erro ao excluir Epi:', error);
        }
      );
    }
  }

}


