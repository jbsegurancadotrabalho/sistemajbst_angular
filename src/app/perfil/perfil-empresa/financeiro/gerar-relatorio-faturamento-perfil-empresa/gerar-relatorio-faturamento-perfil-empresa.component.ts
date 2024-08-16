import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ConsultarFaturamento } from 'src/app/models/models_diversos/consultar-faturamentopj';



@Component({
  selector: 'app-gerar-relatorio-faturamento-perfil-empresa',
  templateUrl: './gerar-relatorio-faturamento-perfil-empresa.component.html',
  styleUrls: ['./gerar-relatorio-faturamento-perfil-empresa.component.css']
})
export class GerarRelatorioFaturamentoPerfilEmpresaComponent implements OnInit {


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
    this.httpClient.get('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/faturamento/calcularTotal/' + id)
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
