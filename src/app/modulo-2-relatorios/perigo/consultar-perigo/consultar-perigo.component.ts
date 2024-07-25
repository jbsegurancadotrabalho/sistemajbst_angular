import { Component, OnInit } from '@angular/core';
import { FuncaoDocService } from 'src/app/services/funcaodoc.service';
import { ActivatedRoute } from '@angular/router';
import { PerigoService } from 'src/app/services/perigo.service';



@Component({
  selector: 'app-consultar-perigo',
  templateUrl: './consultar-perigo.component.html',
  styleUrls: ['./consultar-perigo.component.css']
})
export class ConsultarPerigoComponent implements OnInit {
  funcaoid: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };


  constructor(
    private funcaoDocService: FuncaoDocService,
    private activatedRoute: ActivatedRoute,
    private PerigoService: PerigoService,
  ) {}

  ngOnInit(): void {
    this.consultarFuncao();
  }

  consultarFuncao(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.funcaoDocService.buscarFuncaoPorId(id).subscribe(
      (data: any) => {
        this.funcaoid = data.perigo;
        console.log('Perigos fetched:', this.funcaoid);
      },
      (error: any) => {
        console.error('Error fetching perigos:', error);
      }
    );
  }

  excluirPerigo(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o Exame "${nome}"?`)) {
      this.PerigoService.excluirPerigo(id).subscribe(
        (response: any) => {
          console.log('Perigo excluído com sucesso:', response);
          this.consultarFuncao();
        },
        (error: any) => {
          console.error('Erro ao excluir função:', error);
        }
      );
    }
}

}