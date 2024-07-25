import { Component, OnInit } from '@angular/core';
import { UnidadeDocService } from 'src/app/services/unidadedoc.service';
import { ActivatedRoute } from '@angular/router';
import { SetorService } from 'src/app/services/setor.service'; 


@Component({
  selector: 'app-consultar-setor',
  templateUrl: './consultar-setor.component.html',
  styleUrls: ['./consultar-setor.component.css']
})
export class ConsultarSetorComponent implements OnInit {
  setor: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };


  constructor(
    private  UnidadeDocService:  UnidadeDocService,
    private activatedRoute: ActivatedRoute,
    private SetorService : SetorService,
  ) {}

  ngOnInit(): void {
    this.consultarSetor();
  }

  consultarSetor(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.UnidadeDocService.getUnidadeDocById(id).subscribe(
      (data: any) => {
        this.setor = data.gho_setor;
        console.log('Perigos fetched:', this.setor);
      },
      (error: any) => {
        console.error('Error fetching perigos:', error);
      }
    );
  }

  excluirSetor(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o setor "${nome}"?`)) {
      this.SetorService.deleteSetor(id).subscribe(
        (response: any) => {
          console.log('Setor excluído com sucesso:', response);
          this.consultarSetor();
        },
        (error: any) => {
          console.error('Erro ao excluir setor:', error);
        }
      );
    }
  }

}