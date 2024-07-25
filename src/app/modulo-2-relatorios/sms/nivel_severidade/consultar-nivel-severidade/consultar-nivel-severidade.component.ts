import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostProbabilidadeDeOcorrenciaModel } from 'src/app/models/sms/PostProbabilidadeDeOcorrenciaModel';
import { GetProbabilidadeDeOcorrenciaModel } from 'src/app/models/sms/GetProbabilidadeDeOcorrenciaModel';
import { ActivatedRoute, Router } from '@angular/router';
import { NivelSeveridadeService } from 'src/app/services/nivel_severidade.service'; 
import { GetPerigoModel } from 'src/app/models/sms/GetPerigoModel';
import { PerigoService } from 'src/app/services/perigo.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-consultar-nivel-severidade',
  templateUrl: './consultar-nivel-severidade.component.html',
  styleUrls: ['./consultar-nivel-severidade.component.css']
})
export class ConsultarNivelSeveridadeComponent  implements OnInit{
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  perigo: any = {};

  constructor(
  private perigoService: PerigoService,
  private httpClient: HttpClient,
  private activatedRoute: ActivatedRoute,
  private NivelSeveridadeService: NivelSeveridadeService
  
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
  excluirNivel(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o Nivel de Severidade"${nome}"?`)) {
      this.NivelSeveridadeService.excluirNivelDeSeveridade(id).subscribe(
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
