import { Component, OnInit } from '@angular/core';
import { ChamadosClienteService } from 'src/app/services/chamados-clientes.service';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { GetChamadosModel } from 'src/app/models/chamados/GetChamadosModel';  // Corrigindo o tipo importado

@Component({
  selector: 'app-resposta-suporte-ao-cliente',
  templateUrl: './resposta-suporte-ao-cliente.component.html',
  styleUrls: ['./resposta-suporte-ao-cliente.component.css']
})
export class RespostaSuporteAoClienteComponent implements OnInit {

  chamado: GetChamadosModel[] = [];  // Definindo corretamente o tipo como array de GetChamadosModel
  id: string | null = null;
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_contato: '' };

  constructor(
    private chamadosClienteService: ChamadosClienteService,
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.consultarChamados();
  }

  consultarChamados(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.chamadosClienteService.getChamadoById(this.id).subscribe(
      (data: GetChamadosModel) => {  // Usando o tipo correto retornado pelo serviço
        this.chamado = Array.isArray(data) ? data : [data];  // Garantindo que chamado seja um array
        console.log('Chamados fetched:', this.chamado);
      },
      (error: any) => {
        console.error('Error fetching Chamados:', error);
      }
    );
  }
}
