import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';  
import { GetEpiModel } from 'src/app/models/sms/GetEpiModel'; 
import { Observable } from 'rxjs';
import { DocFreeFuncionarioService } from 'src/app/services/docfreefuncionario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultar-documentos-free-funcionario',
  templateUrl: './consultar-documentos-free-funcionario.component.html',
  styleUrls: ['./consultar-documentos-free-funcionario.component.css']
})
export class ConsultarDocumentosFreeFuncionarioComponent {


  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  documentosfree: any[] = [];

  
  constructor(
    private FuncionarioService: FuncionarioService,
    private DocFreeFuncionarioService: DocFreeFuncionarioService,
    private activatedRoute: ActivatedRoute,


  ) {}

  ngOnInit(): void {
    this.consultarDocumentosFree();
  }

  consultarDocumentosFree(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.FuncionarioService.consultarFuncionarioPorId(id).subscribe(
      (data: any) => {
        this.documentosfree = data.docfreefuncionario;
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
      this.DocFreeFuncionarioService.excluirDocumentosFree(id).subscribe(
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


