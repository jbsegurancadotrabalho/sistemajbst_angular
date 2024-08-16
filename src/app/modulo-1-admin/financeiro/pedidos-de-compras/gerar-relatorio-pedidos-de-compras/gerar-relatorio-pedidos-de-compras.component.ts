import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';






@Component({
  selector: 'app-gerar-relatorio-pedidos-de-compras',
  templateUrl: './gerar-relatorio-pedidos-de-compras.component.html',
  styleUrls: ['./gerar-relatorio-pedidos-de-compras.component.css']
})
export class GerarRelatorioPedidosDeComprasComponent implements OnInit {

  relatorio: any = { matriculas: [], total: 0 };  // Defina as propriedades matriculas e total aqui

 
 

  
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,

  ) {
  }



  ngOnInit(): void {
    //capturando o id enviado na URL
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/pedidos-de-compras/calcularTotal/' + id)
      .subscribe({
        next: (data: any) => {
          // Certifique-se de que 'certificado' seja uma matriz
          this.relatorio = Array.isArray(data) ? { matriculas: data, total: 0 } : data;    
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
