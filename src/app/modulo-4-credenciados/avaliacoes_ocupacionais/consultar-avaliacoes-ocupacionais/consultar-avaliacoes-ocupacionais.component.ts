import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AvaliacoesOcupacionaisService } from 'src/app/services/avaliacoes-ocupacionais.service';




@Component({
  selector: 'app-consultar-avaliacoes-ocupacionais',
  templateUrl: './consultar-avaliacoes-ocupacionais.component.html',
  styleUrls: ['./consultar-avaliacoes-ocupacionais.component.css']
})
export class ConsultarAvaliacoesOcupacionaisComponent {

  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  avaliacoes: any[] = [];

  
  constructor(
    private  AvaliacoesOcupacionaisService:  AvaliacoesOcupacionaisService,
    private activatedRoute: ActivatedRoute,


  ) {}

  ngOnInit(): void {
    this.consultarExames();
  }

  consultarExames(): void {
    this.AvaliacoesOcupacionaisService.consultarAvaliações().subscribe(
      (data: any[]) => {
        this.avaliacoes = data;
        console.log('Exames recebidos:', this.avaliacoes);
      },
      (error: any) => {
        console.error('Erro ao consultar exames:', error);
      }
    );
  }


  excluirAvaliacoes(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o Exame "${nome}"?`)) {
      this.AvaliacoesOcupacionaisService.excluirAvaliacoes(id).subscribe(
        (response: any) => {
          console.log('Exame excluído com sucesso:', response);
        },
        (error: any) => {
          console.error('Erro ao excluir exame:', error);
        }
      );
    }
}


  pageChange(event: any) {
    // Aqui você pode implementar o que deseja fazer quando a página mudar
    console.log('Página mudou para:', event);
    // Por exemplo, você pode buscar as unidades da nova página
    // this.buscarTodasUnidades();
  }




  

}

