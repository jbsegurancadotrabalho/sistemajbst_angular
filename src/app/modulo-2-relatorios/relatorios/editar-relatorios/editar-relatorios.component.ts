import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetRelatoriosModel } from 'src/app/models/relatorios/GetRelatoriosModel';
import { PutRelatoriosModel } from 'src/app/models/relatorios/PutRelatoriosModel';
import { RelatoriosService } from 'src/app/services/relatorios.service';

@Component({
  selector: 'app-editar-relatorios',
  templateUrl: './editar-relatorios.component.html',
  styleUrls: ['./editar-relatorios.component.css']
})
export class EditarRelatoriosComponent  implements OnInit {

  formularioRelatorio!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;
  relatorio: GetRelatoriosModel | null = null;



  constructor(
    private formBuilder: FormBuilder,
    private relatoriosService: RelatoriosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioRelatorio = this.formBuilder.group({
      idRelatorios: ['', Validators.required],
      nome_relatorio: ['', Validators.required],
      descricao_relatorio: ['', Validators.required],
      datainicio: ['', Validators.required],
      vigencia: ['', Validators.required]
    });

    if (this.id) {
      this.buscarRelatorioPorId();
    
  }
  }


  buscarRelatorioPorId(): void {
    this.relatoriosService.consultarRelatoriosPorId(this.id!).subscribe(
      (data: GetRelatoriosModel) => {
        this.relatorio = data;
        this.formularioRelatorio.patchValue({
          idRelatorios: this.relatorio.idRelatorios,
          nome_relatorio:this.relatorio.nome_relatorio,
          descricao_relatorio: this.relatorio.descricao_relatorio,
          datainicio: this.relatorio.datainicio,
          vigencia: this.relatorio.vigencia,
        });
      },
      (error: any) => {
        console.error('Erro ao buscar perigo:', error);
      }
    );
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toISOString(); // Formatar para ISO 8601 com timezone
    } else {
      console.error('Data inválida:', dateString);
      return '';
    }
  }

  editarRelatorios() {
    if (this.formularioRelatorio.valid) {
      const dataInicio = this.formatDate(this.formularioRelatorio.value.datainicio);
      const vigencia = this.formatDate(this.formularioRelatorio.value.vigencia);
      const novoRelatorio: PutRelatoriosModel = {
        ...this.formularioRelatorio.value,
        datainicio: dataInicio,
        vigencia: vigencia
      };

      console.log('Dados enviados:', novoRelatorio);

      this.relatoriosService.editarRelatorios(novoRelatorio).subscribe(
        response => {
          console.log('Relatório editado com sucesso:', response);
          this.cadastroSucesso = 'Relatório editado com sucesso!';
          this.router.navigate(['/relatorios']);
        },
        error => {
          console.error('Erro ao editar Relatório:', error);
          this.cadastroErro = 'Erro ao editar Relatório. Por favor, tente novamente.';
        }
      );
    } else {
      this.markFormGroupTouched(this.formularioRelatorio);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
