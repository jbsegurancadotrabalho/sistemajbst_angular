import { Component, OnInit } from '@angular/core';
import { EpiService } from 'src/app/services/epi.service'; 
import { GetEpiModel } from 'src/app/models/sms/GetEpiModel'; 
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ExamesService } from 'src/app/services/exames.service';

@Component({
  selector: 'app-consultar-exames',
  templateUrl: './consultar-exames.component.html',
  styleUrls: ['./consultar-exames.component.css']
})
export class ConsultarExamesComponent {


  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  exames: any[] = [];

  
  constructor(
    private ExamesService: ExamesService,
    private activatedRoute: ActivatedRoute,


  ) {}

  ngOnInit(): void {
    this.consultarExames();
  }

  consultarExames(): void {
    this.ExamesService.consultarExames().subscribe(
      (data: any[]) => {
        this.exames = data;
        console.log('Exames recebidos:', this.exames);
      },
      (error: any) => {
        console.error('Erro ao consultar exames:', error);
      }
    );
  }


  excluirExames(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o Exame "${nome}"?`)) {
      this.ExamesService.excluirExames(id, nome).subscribe(
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

