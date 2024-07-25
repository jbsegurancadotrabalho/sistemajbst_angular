import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetPotencialSeveridadeModel } from 'src/app/models/sms/GetPotencialSeveridadeModel';
import { ActivatedRoute, Router } from '@angular/router';
import { PotencialSeveridadeService } from 'src/app/services/potencial-de-severidade.service'; 
import { GetPerigoModel } from 'src/app/models/sms/GetPerigoModel';
import { PerigoService } from 'src/app/services/perigo.service';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-consultar-potencial-severidade',
  templateUrl: './consultar-potencial-severidade.component.html',
  styleUrls: ['./consultar-potencial-severidade.component.css']
})
export class ConsultarPotencialSeveridadeComponent implements OnInit{
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  perigo: any = {};

  constructor(
  private perigoService: PerigoService,
  private httpClient: HttpClient,
  private activatedRoute: ActivatedRoute,
  private PotencialSeveridadeService: PotencialSeveridadeService
  
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
  excluirPotencialSeveridade(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o Potencial de Severidade do Tipo"${nome}"?`)) {
      this.PotencialSeveridadeService.excluirPotencialDeSeveridade(id).subscribe(
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
