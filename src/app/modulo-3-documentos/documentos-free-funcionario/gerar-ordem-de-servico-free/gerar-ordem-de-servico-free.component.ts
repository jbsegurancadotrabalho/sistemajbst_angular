import { Component, OnInit } from '@angular/core';
import { DocFreeFuncionarioService } from 'src/app/services/docfreefuncionario.service'; 
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gerar-ordem-de-servico-free',
  templateUrl: './gerar-ordem-de-servico-free.component.html',
  styleUrls: ['./gerar-ordem-de-servico-free.component.css']
})
export class GerarOrdemDeServicoFreeComponent  implements OnInit {

  funcionario: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}




  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.httpClient.get(`http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/doc-free-funcionario/relatorios/${id}`)
      .subscribe({
        next: (data: any) => {
          this.funcionario = Array.isArray(data) ? data : [data];
        },
        error: (e) => {
          console.log(e);
        }
      });
  }
  printPage(): void {
    window.print();
  }
}