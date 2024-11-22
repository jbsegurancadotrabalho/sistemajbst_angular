import { Component, OnInit } from '@angular/core';
import { EpiService } from 'src/app/services/epi.service'; 
import { GetEpiModel } from 'src/app/models/sms/GetEpiModel'; 
import { Observable } from 'rxjs';
import { CredenciadoService } from 'src/app/services/credenciados.service'; 
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-consultar-credenciados',
  templateUrl: './consultar-credenciados.component.html',
  styleUrls: ['./consultar-credenciados.component.css']
})
export class ConsultarCredenciadosComponent {

  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  credenciados: any[] = [];

  
  constructor(
    private CredenciadoService: CredenciadoService,
    private activatedRoute: ActivatedRoute,


  ) {}

  ngOnInit(): void {
    this.consultarCredenciados();
  }

  consultarCredenciados(): void {
    this.CredenciadoService.consultarCredenciado2().subscribe(
      (data: any[]) => {
        this.credenciados = data;
        console.log('Relatórios recebidos:', this.credenciados);
      },
      (error: any) => {
        console.error('Erro ao consultar relatórios:', error);
      }
    );
  }

  // Método para lidar com a mudança de página
  pageChange(event: any) {
    // Aqui você pode implementar o que deseja fazer quando a página mudar
    console.log('Página mudou para:', event);
    // Por exemplo, você pode buscar as unidades da nova página
    // this.buscarTodasUnidades();
  }




  

}
