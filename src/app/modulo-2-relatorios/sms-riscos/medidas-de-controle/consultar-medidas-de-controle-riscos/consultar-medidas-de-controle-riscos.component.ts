import { Component, OnInit } from '@angular/core';
import { RiscosService } from 'src/app/services/riscos.service'; 
import { Observable } from 'rxjs';
import { GetRiscosModel } from 'src/app/models/sms/GetRiscosModel'; 
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MedidasDeControleService } from 'src/app/services/medidas-de-controle.service'; 

@Component({
  selector: 'app-consultar-medidas-de-controle-riscos',
  templateUrl: './consultar-medidas-de-controle-riscos.component.html',
  styleUrls: ['./consultar-medidas-de-controle-riscos.component.css']
})
export class ConsultarMedidasDeControleRiscosComponent implements OnInit {
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  riscos: any [] = []

  constructor(
    private RiscosService: RiscosService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private  MedidasDeControleService:  MedidasDeControleService
  
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
  
  excluirMedidasDeControle(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir Medidas de Controle "${nome}"?`)) {
      this.MedidasDeControleService.excluirMedidasDeControle(id).subscribe(
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
