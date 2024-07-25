import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetProbabilidadeDeOcorrenciaModel } from 'src/app/models/sms/GetProbabilidadeDeOcorrenciaModel';
import { PutProbabilidadeDeOcorrenciaModel } from 'src/app/models/sms/PutProbabilidadeDeOcorrenciaModel';
import { ProbabilidadeDeOcorrenciaService } from 'src/app/services/probabilidade_de_ocorrencia.service';


@Component({
  selector: 'app-editar-probabilidade-de-ocorrencia',
  templateUrl: './editar-probabilidade-de-ocorrencia.component.html',
  styleUrls: ['./editar-probabilidade-de-ocorrencia.component.css']
})
export class EditarProbabilidadeDeOcorrenciaComponent implements OnInit {
  id: string | null = null;
  probabilidade: GetProbabilidadeDeOcorrenciaModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  probabilidadeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ProbabilidadeDeOcorrenciaService: ProbabilidadeDeOcorrenciaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.probabilidadeForm = this.formBuilder.group({
      idprobabilidadeOcorrencia: ['', Validators.required],
      categoria: ['', Validators.required],
      denominacao: ['', Validators.required],
      descricao: ['', Validators.required],

    });

    if (this.id) {
      this.buscarPerigoPorId();
    }
  }

  buscarPerigoPorId(): void {
    this.ProbabilidadeDeOcorrenciaService.consultarProbabilidadeDeOcorrenciaPorId(this.id!).subscribe(
      (data: GetProbabilidadeDeOcorrenciaModel) => {
        this.probabilidade = data;
        this.probabilidadeForm.patchValue({
          idprobabilidadeOcorrencia: this.probabilidade.idprobabilidadeOcorrencia,
          categoria: this.probabilidade.categoria,
          denominacao: this.probabilidade.denominacao,
          descricao: this.probabilidade.descricao,

        });
      },
      (error: any) => {
        console.error('Erro ao buscar perigo:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this.probabilidadeForm.valid) {
      const formData = this.probabilidadeForm.value as PutProbabilidadeDeOcorrenciaModel;
      this.ProbabilidadeDeOcorrenciaService.editarProbabilidadeDeOcorrencia(this.id!, formData).subscribe(
        response => {
          console.log('Probabilidade de Ocorrência editada com sucesso!', response);
          this.cadastroSucesso = 'Probabilidade de Ocorrência editada  com sucesso!';
          this.cadastroErro = null;
        },
        error => {
          console.error('Erro ao editar Probabilidade de Ocorrência:', error);
          this.cadastroErro = 'Erro ao editar Probabilidade de Ocorrência. Por favor, tente novamente.';
          this.cadastroSucesso = null;
        }
      );
    } else {
      this.markFormGroupTouched(this.probabilidadeForm);
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