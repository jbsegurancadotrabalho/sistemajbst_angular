import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consultar-exames-geral',
  templateUrl: './consultar-exames-geral.component.html',
  styleUrls: ['./consultar-exames-geral.component.css']
})
export class ConsultarExamesGeralComponent {


  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };

  
  constructor() {}


  


  // Método para lidar com a mudança de página
  pageChange(event: any) {
    // Aqui você pode implementar o que deseja fazer quando a página mudar
    console.log('Página mudou para:', event);
    // Por exemplo, você pode buscar as unidades da nova página
    // this.buscarTodasUnidades();
  }



}

