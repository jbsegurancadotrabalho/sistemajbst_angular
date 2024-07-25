import { Component, OnInit } from '@angular/core';
import { MaquinaService } from 'src/app/services/maquina.service';  
import { Observable } from 'rxjs';
import { GetMaquinasModel } from 'src/app/models/sms/GetMaquinasModel';



@Component({
  selector: 'app-consultar-maquinas',
  templateUrl: './consultar-maquinas.component.html',
  styleUrls: ['./consultar-maquinas.component.css']
})
export class ConsultarMaquinasComponent {


  maquina: GetMaquinasModel[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };

  
  constructor(private maquinaService: MaquinaService) {}

  ngOnInit(): void {
    this.buscarTodasMaquinas();
  }

  buscarTodasMaquinas() {
    this.maquinaService.consultarMaquinas()
      .subscribe(
        (data: GetMaquinasModel[]) => {
          this.maquina = data;
        },
        (error) => {
          console.error('Erro ao buscar todos as Máquinas:', error);
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

  excluirMaquina(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir a Máquina "${nome}"?`)) {
      this.maquinaService.excluirMaquinas(id).subscribe(
        (response: any) => {
          console.log('Maquina excluída com sucesso:', response);
        },
        (error: any) => {
          console.error('Erro ao excluir Maquina:', error);
        }
      );
    }
  }

}
