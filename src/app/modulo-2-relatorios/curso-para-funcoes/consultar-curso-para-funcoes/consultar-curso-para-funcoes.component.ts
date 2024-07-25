import { Component, OnInit } from '@angular/core';
import { CursoNrService } from 'src/app/services/curso-nrsfuncoes.service';
import { GetCursoModel } from 'src/app/models/sms/GetCursoNrsFuncoesModel';
import { Observable } from 'rxjs';
import { FuncaoDocService } from 'src/app/services/funcaodoc.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-consultar-curso-para-funcoes',
  templateUrl: './consultar-curso-para-funcoes.component.html',
  styleUrls: ['./consultar-curso-para-funcoes.component.css']
})
export class ConsultarCursoParaFuncoesComponent implements OnInit {
  
  funcaoid: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };

  
  constructor(
    
    private cursoNrService: CursoNrService,
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
        this.funcaoid = data.cursodenrs;
        console.log('Perigos fetched:', this.funcaoid);
      },
      (error: any) => {
        console.error('Error fetching Curso de NR´S:', error);
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

  excluirCursos(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o "${nome}"?`)) {
      this.cursoNrService.excluirCursos(id).subscribe(
        (response: any) => {
          console.log('Função excluída com sucesso:', response);
        },
        (error: any) => {
          console.error('Erro ao excluir Risco:', error);
        }
      );
    }
  }

}
