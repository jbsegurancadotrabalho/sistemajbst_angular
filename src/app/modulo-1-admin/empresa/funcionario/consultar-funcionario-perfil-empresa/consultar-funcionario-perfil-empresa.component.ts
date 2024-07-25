import { Component, OnInit,   AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultar-funcionario-perfil-empresa',
  templateUrl: './consultar-funcionario-perfil-empresa.component.html',
  styleUrls: ['./consultar-funcionario-perfil-empresa.component.css']
})
export class ConsultarFuncionarioPerfilEmpresaComponent  implements OnInit {
  @ViewChild('planoSelect') planoSelect!: ElementRef;

  empresas: any [] = []
  pagina: number = 1; 
  filtro: any = { nome_contato: '' }; 
  paginaAtual1: number = 1;
  itensPorPagina = 10;
 
    constructor(
      private httpClient: HttpClient,
      private activatedRoute: ActivatedRoute,

    ) {
    }


    ngOnInit(): void {

      var idEmpresa = this.activatedRoute.snapshot.paramMap.get('id') as string;
      this.httpClient.get('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/empresas/'+ idEmpresa)
      .subscribe({ //capturando o retorno da API
        next: (data: any) => { //recebe o retorno de sucesso da API
          //armazenar os dados na variável
          this.empresas = data.funcionarios;

        },
        error: (e) => { //recebe o retorno de erro da API
          console.log(e);
        }
      });
      
    }

    pageChange(event: any): void {
      this.pagina = event;
    }




    onDelete(idChamados: number, nome: string): void {
      if(window.confirm('Deseja realmente excluir o Chamado selecionado?\n' + nome)) {
        //enviando uma reqquisição para o serviço de exclusão da API
        this.httpClient.delete('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/chamados/' + idChamados)
          .subscribe({
            next: (data: any) => {
              this.ngOnInit();
            },
            error: (e) => {
            }
          })
      }
    }
  


}


