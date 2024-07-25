import { Component, OnInit } from '@angular/core';
import { FuncaoDocService } from 'src/app/services/funcaodoc.service';
import { ActivatedRoute } from '@angular/router';
import { ExameService } from 'src/app/services/examesfuncaodoc.service';
@Component({
  selector: 'app-consultar-exames-funcao-doc',
  templateUrl: './consultar-exames-funcao-doc.component.html',
  styleUrls: ['./consultar-exames-funcao-doc.component.css']
})
export class ConsultarExamesFuncaoDocComponent implements OnInit {
  funcaoid: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };


  constructor(
    private funcaoDocService: FuncaoDocService,
    private activatedRoute: ActivatedRoute,
    private ExameService: ExameService 
  ) {}

  ngOnInit(): void {
    this.consultarFuncao();
  }

  consultarFuncao(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.funcaoDocService.buscarFuncaoPorId(id).subscribe(
      (data: any) => {
        this.funcaoid = data.exames_funcaodoc;
        console.log('Exames fetched:', this.funcaoid);
      },
      (error: any) => {
        console.error('Error fetching perigos:', error);
      }
    );
  }



excluirExame(id: string, nome: string): void {
  if (confirm(`Tem certeza de que deseja excluir o Exame "${nome}"?`)) {
    this.ExameService.excluirExames(id).subscribe(
      (response: any) => {
        console.log('Exame excluído com sucesso:', response);
        this.consultarFuncao();
      },
      (error: any) => {
        console.error('Erro ao excluir função:', error);
      }
    );
  }


}

}