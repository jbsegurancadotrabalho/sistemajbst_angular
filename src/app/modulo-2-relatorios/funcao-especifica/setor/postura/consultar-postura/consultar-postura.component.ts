import { Component, OnInit } from '@angular/core';
import { UnidadeDocService } from 'src/app/services/unidadedoc.service';
import { ActivatedRoute } from '@angular/router';
import { SetorService } from 'src/app/services/setor.service'; 
import { PosturaService } from 'src/app/services/postura.service';


@Component({
  selector: 'app-consultar-postura',
  templateUrl: './consultar-postura.component.html',
  styleUrls: ['./consultar-postura.component.css']
})
export class ConsultarPosturaComponent implements OnInit {
  posturas: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };


  constructor(
    private  UnidadeDocService:  UnidadeDocService,
    private activatedRoute: ActivatedRoute,
    private SetorService : SetorService,
    private  PosturaService:  PosturaService,
  ) {}

  ngOnInit(): void {
    this.consultarPosturaDoSetor();
  }

  consultarPosturaDoSetor(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.SetorService.consultarSetorPorId(id).subscribe(
      (data: any) => {
        this.posturas = data.postura;
        console.log('Perigos fetched:', this.posturas);
      },
      (error: any) => {
        console.error('Error fetching perigos:', error);
      }
    );
  }

  excluirPostura(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir a Postura "${nome}"?`)) {
      this.PosturaService.excluirPostura(id).subscribe(
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
