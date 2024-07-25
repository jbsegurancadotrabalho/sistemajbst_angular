import { Component, OnInit } from '@angular/core';
import { PerigoService } from 'src/app/services/perigo.service';
import { Observable } from 'rxjs';
import { GetPerigoModel } from 'src/app/models/sms/GetPerigoModel';
import { GetDanosModel } from 'src/app/models/sms/GetDanosModel';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DanosService } from 'src/app/services/danos.service';
@Component({
  selector: 'app-consultar-danos',
  templateUrl: './consultar-danos.component.html',
  styleUrls: ['./consultar-danos.component.css']
})
export class ConsultarDanosComponent implements OnInit {
    paginaAtual1: number = 1;
    itensPorPagina = 10;
    filtro: any = { nome_empresas: '' };
    perigo: any [] = []

    constructor(
      private perigoService: PerigoService,
      private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private danosService: DanosService
    
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
    


    
  
    excluirDanos(id: string, nome: string): void {
      if (confirm(`Tem certeza de que deseja excluir o Dano "${nome}"?`)) {
        this.danosService.excluirDanos(id).subscribe(
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