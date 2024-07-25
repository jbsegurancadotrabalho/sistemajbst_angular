import { Component, OnInit } from '@angular/core';
import { RiscosService } from 'src/app/services/riscos.service'; 
import { Observable } from 'rxjs';
import { GetRiscosModel } from 'src/app/models/sms/GetRiscosModel'; 
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PotencialSeveridadeService } from 'src/app/services/potencial-de-severidade.service'; 

@Component({
  selector: 'app-consultar-potencial-de-severidade-riscos',
  templateUrl: './consultar-potencial-de-severidade-riscos.component.html',
  styleUrls: ['./consultar-potencial-de-severidade-riscos.component.css']
})
export class ConsultarPotencialDeSeveridadeRiscosComponent  implements OnInit {
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  riscos: any [] = []

  constructor(
    private RiscosService: RiscosService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private  PotencialSeveridadeService:  PotencialSeveridadeService
  
  ) {}

  ngOnInit(): void {
    //capturando o id enviado na URL
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/riscos/' + id)
      .subscribe({
        next: (data: any) => {
          // Certifique-se de que 'certificado' seja uma matriz
          this.riscos = Array.isArray(data) ? data : [data]; 
        },
        error: (e) => {
          console.log(e);
        }
      });
  }
  
  excluirNivelDeSeveridade(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o Potencial de Severidade do Tipo "${nome}"?`)) {
      this.PotencialSeveridadeService.excluirPotencialDeSeveridade(id).subscribe(
        (response: any) => {
          console.log('Dano excluído com sucesso:', response);
        },
        (error: any) => {
          console.error('Erro ao excluir Danos:', error);
        }
      );
    }
  }
}
