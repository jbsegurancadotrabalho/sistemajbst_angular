import { Component, OnInit } from '@angular/core';
import { EmpresaDocService } from 'src/app/services/empresadoc.service';
import { GetEmpresaDocModel } from 'src/app/models/empresadoc/GetEmpresaDocModel';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-consultar-empresadoc',
  templateUrl: './consultar-empresadoc.component.html',
  styleUrls: ['./consultar-empresadoc.component.css']
})
export class ConsultarEmpresadocComponent implements OnInit {
  empresas: GetEmpresaDocModel[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };

  constructor(private empresaDocService: EmpresaDocService) { }

  ngOnInit(): void {
    this.buscarTodasEmpresas();
  }

  buscarTodasEmpresas() {
    this.empresaDocService.getTodasEmpresas().subscribe(
      (data: GetEmpresaDocModel[]) => {
        this.empresas = data;
      },
      (error) => {
        console.error('Erro ao buscar todas as empresas:', error);
      }
    );
  }

  deleteEmpresa(id: string): void {
    this.empresaDocService.deleteEmpresaDoc(id).subscribe(
      () => {
        console.log('Empresa excluída com sucesso!');
        // Atualize a lista de empresas após a exclusão
        this.buscarTodasEmpresas();
      },
      (error) => {
        console.error('Erro ao excluir empresa:', error);
      }
    );
  }
  // Método para lidar com a mudança de página
  pageChange(event: any) {
    // Aqui você pode implementar o que deseja fazer quando a página mudar
    console.log('Página mudou para:', event);
    // Por exemplo, você pode buscar as empresas da nova página
    // this.buscarTodasEmpresas();
  }

  confirmarExclusao(id: string, nome: string) {
    if (window.confirm(`Deseja realmente excluir a Empresa: ${nome}?`)) {
      this.deleteEmpresa(id);
    }
  }
  
}