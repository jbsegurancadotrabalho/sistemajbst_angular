import { Component, OnInit, AfterViewInit,  ElementRef, ViewChild, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ConsultarPedidos } from 'src/app/models/models_diversos/consultar-pedidos.model';

@Component({
  selector: 'app-consultar-matriculas-pedidos',
  templateUrl: './consultar-matriculas-pedidos.component.html',
  styleUrls: ['./consultar-matriculas-pedidos.component.css']
})
export class ConsultarMatriculasPedidosComponent implements OnInit, AfterViewInit {

  @ViewChild('content') popupview!: ElementRef;


  pedidos: ConsultarPedidos | null = null;
  pedidoSelecionado: any = null;
  matriculas: any [] = []
  Invoiceheader: any;
  invoiceno: any;
  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  pagina: number = 1; 
  filtro: any = { matriculas: '' }; 
  itensPorPagina = 10;
  paginaAtual: number = 1; 
  
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,

  ) {
  }


  exibirPedidos(pedidos: any) {
    this.pedidoSelecionado = pedidos;
                 }


  ngAfterViewInit(): void {
    $(document).ready(() => {
      const table = $('#myTable').DataTable({
        
        language: {
          url: 'https://cdn.datatables.net/plug-ins/1.11.6/i18n/Portuguese-Brasil.json'
        }
      });
      
    });
  }
  ngOnInit(): void {

    this.httpClient.get('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/matriculas')
    .subscribe({ //capturando o retorno da API
      next: (data) => { //recebe o retorno de sucesso da API
        this.dtTrigger.next(null);
        this.matriculas = data as any[];
      },
      error: (e) => { //recebe o retorno de erro da API
        console.log(e);
      }
    });

    this.dtoptions = {
      pagingType: 'full_numbers',
      searching: true,
      lengthChange: false,
      language: {
        searchPlaceholder: 'Text Customer'
      }
    };
    
  }

}

