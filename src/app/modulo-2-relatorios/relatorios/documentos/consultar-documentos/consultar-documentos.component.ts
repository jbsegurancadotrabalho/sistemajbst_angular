import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostDocumentosModel } from 'src/app/models/relatorios/PostDocumentosModel'; 
import { DocumentosService } from 'src/app/services/documentos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultar-documentos',
  templateUrl: './consultar-documentos.component.html',
  styleUrls: ['./consultar-documentos.component.css']
})
export class ConsultarDocumentosComponent  implements OnInit{

  formularioRelatorios!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  relatorios: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };

  constructor(
    private formBuilder: FormBuilder,
    private documentosService: DocumentosService,
    private route: ActivatedRoute, 
    private activatedRoute: ActivatedRoute,
  ) {

 
  }

  ngOnInit(): void {
    this.consultarRelatorios();
  }

  consultarRelatorios(): void {
    this.documentosService.consultarDocumentos().subscribe(
      (data: any[]) => {
        this.relatorios = data;
        console.log('Relatórios recebidos:', this.relatorios);
      },
      (error: any) => {
        console.error('Erro ao consultar relatórios:', error);
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

  excluirDocumentos(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o Documento "${nome}"?`)) {
      this.documentosService.excluirDocumentos(id).subscribe(
        (response: any) => {
          console.log('Relatório excluído com sucesso:', response);
        },
        (error: any) => {
          console.error('Erro ao excluir Relatório:', error);
        }
      );
    }
  }


  

}
