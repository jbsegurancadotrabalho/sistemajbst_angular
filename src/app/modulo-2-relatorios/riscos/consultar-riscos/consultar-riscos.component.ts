import { Component, OnInit } from '@angular/core';
import { FuncaoDocService } from 'src/app/services/funcaodoc.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultar-riscos',
  templateUrl: './consultar-riscos.component.html',
  styleUrls: ['./consultar-riscos.component.css']
})
export class ConsultarRiscosComponent implements OnInit {
  riscos: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };


  constructor(
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
        this.riscos = data.riscos;
        console.log('Perigos fetched:', this.riscos);
      },
      (error: any) => {
        console.error('Error fetching perigos:', error);
      }
    );
  }

  excluirRiscos(idRisco: string, tipo: string): void {
    // Implemente a lógica para excluir riscos usando os parâmetros idRisco e tipo
  }
}