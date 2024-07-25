import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gerar-ordem-de-servico',
  templateUrl: './gerar-ordem-de-servico.component.html',
  styleUrls: ['./gerar-ordem-de-servico.component.css']
})
export class GerarOrdemDeServicoComponent implements OnInit {
  funcionario: any[] = [];

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.httpClient.get(`http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/funcionarios/relatorios/${id}`)
      .subscribe({
        next: (data: any) => {
          this.funcionario = Array.isArray(data) ? data : [data];
        },
        error: (e) => {
          console.log(e);
        }
      });
  }

  printPage() {
    window.print();
  }
}
