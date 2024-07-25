import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostRelatoriosModel } from 'src/app/models/relatorios/PostRelatoriosModel';
import { RelatoriosService } from 'src/app/services/relatorios.service';

@Component({
  selector: 'app-criar-relatorios',
  templateUrl: './criar-relatorios.component.html',
  styleUrls: ['./criar-relatorios.component.css']
})
export class CriarRelatoriosComponent implements OnInit {

  formularioRelatorio!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private relatoriosService: RelatoriosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioRelatorio = this.formBuilder.group({
      nome_relatorio: ['', Validators.required],
      descricao_relatorio: ['', Validators.required],
      datainicio: ['', Validators.required],
      vigencia: ['', Validators.required]
    });
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

  criarRelatorios() {
    if (this.formularioRelatorio.valid) {
      const dataInicio = this.formatDate(this.formularioRelatorio.value.datainicio);
      const vigencia = this.formatDate(this.formularioRelatorio.value.vigencia);
      const novoRelatorio: PostRelatoriosModel = {
        ...this.formularioRelatorio.value,
        datainicio: dataInicio,
        vigencia: vigencia
      };

      console.log('Dados enviados:', novoRelatorio);

      this.relatoriosService.criarRelatorios(novoRelatorio).subscribe(
        response => {
          console.log('Relatório criado com sucesso:', response);
          this.cadastroSucesso = 'Relatório criado com sucesso!';
          this.router.navigate(['/relatorios']);
        },
        error => {
          console.error('Erro ao criar Relatório:', error);
          this.cadastroErro = 'Erro ao criar Relatório. Por favor, tente novamente.';
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
