import { Component, OnInit } from '@angular/core';
import { EpiService } from 'src/app/services/epi.service'; 
import { GetEpiModel } from 'src/app/models/sms/GetEpiModel'; 
import { Observable } from 'rxjs';
import { FuncaoDocService } from 'src/app/services/funcaodoc.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-consultar-epi',
  templateUrl: './consultar-epi.component.html',
  styleUrls: ['./consultar-epi.component.css']
})
export class ConsultarEpiComponent {


  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  funcaoid: any[] = [];

  
  constructor(
    private epiService: EpiService,
    private funcaoDocService: FuncaoDocService,
    private activatedRoute: ActivatedRoute,


  ) {}

  ngOnInit(): void {
    this.consultarFuncao();
  }

  consultarFuncao(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.funcaoDocService.buscarFuncaoPorId(id).subscribe(
      (data: any) => {
        this.funcaoid = data.epi;
        console.log('Perigos fetched:', this.funcaoid);
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

  excluirEpi(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o EPI "${nome}"?`)) {
      this.epiService.excluirEpi(id).subscribe(
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
