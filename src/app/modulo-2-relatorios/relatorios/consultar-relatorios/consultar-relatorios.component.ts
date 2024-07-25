import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RelatoriosService } from 'src/app/services/relatorios.service'; 
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-consultar-relatorios',
  templateUrl: './consultar-relatorios.component.html',
  styleUrls: ['./consultar-relatorios.component.css']
})
export class ConsultarRelatoriosComponent {


  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  relatorios: any[] = [];

  
  constructor(
    private RelatoriosService : RelatoriosService,
    private activatedRoute: ActivatedRoute,


  ) {}

  ngOnInit(): void {
    this.consultarRelatorios();
  }

  consultarRelatorios(): void {
    this.RelatoriosService.consultarRelatorios().subscribe(
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

  excluirRelatorio(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o Relatório "${nome}"?`)) {
      this.RelatoriosService.excluirRelatorios(id).subscribe(
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
