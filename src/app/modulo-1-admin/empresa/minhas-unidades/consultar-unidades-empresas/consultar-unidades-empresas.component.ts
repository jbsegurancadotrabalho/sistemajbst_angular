import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultar-unidades-empresas',
  templateUrl: './consultar-unidades-empresas.component.html',
  styleUrls: ['./consultar-unidades-empresas.component.css']
})
export class ConsultarUnidadesEmpresasComponent implements OnInit {
  unidades: any[] = [];
  paginaAtual: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };

  constructor(
    private empresaService: EmpresaService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.consultarEmpresasUnidades();
  }

  consultarEmpresasUnidades(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.empresaService.consultarUnidadesDasEmpresas(id).subscribe(
      (data: any) => {
        this.unidades = data.empresadoc.unidadedoc;
        console.log('Unidades fetched:', this.unidades);
      },
      (error: any) => {
        console.error('Error fetching unidades:', error);
      }
    );
  }

  printPage() {
    window.print();
  }
}
