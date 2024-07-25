import { Component, OnInit } from '@angular/core';
import { AvaliacaoFuncao } from 'src/app/services/avaliacoes.funcoes.service';
import { GetAvaliaçõesOcupacionaisFuncoesModel } from 'src/app/models/sms/GetAvaliaçõesOcupacionaisFuncoesModel'; 
import { Observable } from 'rxjs';
import { FuncaoDocService } from 'src/app/services/funcaodoc.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-consultar-avaliacao-funcaodoc',
  templateUrl: './consultar-avaliacao-funcaodoc.component.html',
  styleUrls: ['./consultar-avaliacao-funcaodoc.component.css']
})
export class ConsultarAvaliacaoFuncaodocComponent {


  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  funcaoid: any[] = [];

  
  constructor(
    private AvaliacaoFuncao: AvaliacaoFuncao,
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
        this.funcaoid = data.avaliacoesocupacionaisfuncoes;
        console.log('Avaliação fetched:', this.funcaoid);
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

  excluirAvaliacao(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir a Avaliação "${nome}"?`)) {
      this.AvaliacaoFuncao.excluirAvaliações(id).subscribe(
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
