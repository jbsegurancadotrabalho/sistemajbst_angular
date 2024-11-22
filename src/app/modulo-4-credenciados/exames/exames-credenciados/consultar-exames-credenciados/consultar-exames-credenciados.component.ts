import { Component, OnInit } from '@angular/core';
import { CredenciadoService } from 'src/app/services/credenciados.service';
import { ActivatedRoute } from '@angular/router';
import { GetCredenciadosModel } from 'src/app/models/credenciados/GetCredenciadosModel';

@Component({
  selector: 'app-consultar-exames-credenciados',
  templateUrl: './consultar-exames-credenciados.component.html',
  styleUrls: ['./consultar-exames-credenciados.component.css']
})
export class ConsultarExamesCredenciadosComponent implements OnInit {
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  credenciados: any[] = []; // Use any[] se você quiser acessar todos os dados diretamente
  credenciadoDetalhes: GetCredenciadosModel | null = null; // Adicione um campo para armazenar detalhes

  private id: string | null = null; // Armazenar o ID

  constructor(
    private CredenciadoService: CredenciadoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id'); // Obter o ID da rota
    if (this.id) {
      this.consultarCredenciadosPorId(); // Passar o ID ao método
    }
  }

  consultarCredenciadosPorId(): void {
    if (this.id) {
      this.CredenciadoService.consultarCredenciadoPorId(this.id).subscribe(
        (data: GetCredenciadosModel) => {
          this.credenciadoDetalhes = data; // Armazenar o objeto completo
          this.credenciados = data.examescredenciados; // Atualizar a lista de exames
          console.log('Detalhes do Credenciado:', this.credenciadoDetalhes);
          console.log('Exames do Credenciado:', this.credenciados);
        },
        (error: any) => {
          console.error('Error fetching credenciado details:', error);
        }
      );
    }
  }

  // Método para lidar com a mudança de página
  pageChange(event: any) {
    console.log('Página mudou para:', event);
  }
}
