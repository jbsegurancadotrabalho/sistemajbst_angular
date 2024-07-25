import { Component, OnInit } from '@angular/core';
import { UnidadeDocService } from 'src/app/services/unidadedoc.service';
import { ActivatedRoute } from '@angular/router';
import { SetorService } from 'src/app/services/setor.service'; 
import { PosturaService } from 'src/app/services/postura.service';
import { AnalisePosturaService } from 'src/app/services/analise-postura.service';
@Component({
  selector: 'app-consultar-analise-de-postura',
  templateUrl: './consultar-analise-de-postura.component.html',
  styleUrls: ['./consultar-analise-de-postura.component.css']
})
export class ConsultarAnaliseDePosturaComponent implements OnInit {
  posturas: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };


  constructor(
    private  UnidadeDocService:  UnidadeDocService,
    private activatedRoute: ActivatedRoute,
    private SetorService : SetorService,
    private  PosturaService:  PosturaService,
    private AnalisePosturaService: AnalisePosturaService,
  ) {}

  ngOnInit(): void {
    this.consultarPosturaDoSetor();
  }

  consultarPosturaDoSetor(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.PosturaService.consultarPosturaPorId(id).subscribe(
      (data: any) => {
        this.posturas = data.analisepostura;
        console.log('Perigos fetched:', this.posturas);
      },
      (error: any) => {
        console.error('Error fetching perigos:', error);
      }
    );
  }

  excluirAnalisePostura(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir a Postura "${nome}"?`)) {
      this.AnalisePosturaService.excluirAnálisePostura(id).subscribe(
        (response: any) => {
          console.log('Setor excluído com sucesso:', response);
          this.consultarPosturaDoSetor();
        },
        (error: any) => {
          console.error('Erro ao excluir setor:', error);
        }
      );
    }
  }

}
