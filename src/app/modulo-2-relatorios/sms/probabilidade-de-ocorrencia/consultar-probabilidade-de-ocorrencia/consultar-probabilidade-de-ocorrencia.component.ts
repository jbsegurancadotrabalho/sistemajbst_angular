import { Component, OnInit } from '@angular/core';
import { PerigoService } from 'src/app/services/perigo.service';
import { Observable } from 'rxjs';
import { GetPerigoModel } from 'src/app/models/sms/GetPerigoModel';
import { GetProbabilidadeDeOcorrenciaModel } from 'src/app/models/sms/GetProbabilidadeDeOcorrenciaModel';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProbabilidadeDeOcorrenciaService } from 'src/app/services/probabilidade_de_ocorrencia.service';


@Component({
  selector: 'app-consultar-probabilidade-de-ocorrencia',
  templateUrl: './consultar-probabilidade-de-ocorrencia.component.html',
  styleUrls: ['./consultar-probabilidade-de-ocorrencia.component.css']
})
export class ConsultarProbabilidadeDeOcorrenciaComponent  implements OnInit{
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  perigo: any = {};

  constructor(
  private perigoService: PerigoService,
  private httpClient: HttpClient,
  private activatedRoute: ActivatedRoute,
  private probabilidadeDeOcorrenciaService: ProbabilidadeDeOcorrenciaService
  
  ) {}

  ngOnInit(): void {
    //capturando o id enviado na URL
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/perigos/' + id)
      .subscribe({
        next: (data: any) => {
          // Certifique-se de que 'certificado' seja uma matriz
          this.perigo = Array.isArray(data) ? data : [data];
        },
        error: (e) => {
          console.log(e);
        }
      });
  }
  excluirProbabilidadeDeOcorrencia(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir a Probabilidade de Ocorrência "${nome}"?`)) {
      this.probabilidadeDeOcorrenciaService.excluirProbabilidadeDeOcorrencia(id).subscribe(
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
