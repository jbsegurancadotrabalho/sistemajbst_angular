import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetNivelSeveridadeModel } from 'src/app/models/sms/GetNivelSeveridadeModel';
import { PutNivelSeveridadeModel } from 'src/app/models/sms/PutNivelSeveridadeModel'; 
import { NivelSeveridadeService } from 'src/app/services/nivel_severidade.service'; 




@Component({
  selector: 'app-editar-nivel-severidade',
  templateUrl: './editar-nivel-severidade.component.html',
  styleUrls: ['./editar-nivel-severidade.component.css']
})
export class EditarNivelSeveridadeComponent implements OnInit {
  id: string | null = null;
  nivel: GetNivelSeveridadeModel| null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  nivelForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private NivelSeveridadeService: NivelSeveridadeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.nivelForm = this.formBuilder.group({
      idNivelSeveridade: ['', Validators.required],
      nivel_risco_MedidasDeControle: ['', Validators.required],
      numero_risco_MedidasDeControle: ['', Validators.required],
      descricao_MedidasDeControle: ['', Validators.required],
      nivel_permissao_MedidasDeControle: ['', Validators.required],


    });

    if (this.id) {
      this.buscarPerigoPorId();
    }
  }

  buscarPerigoPorId(): void {
    this.NivelSeveridadeService.consultarNivelDeSeveridadePorId(this.id!).subscribe(
      (data: GetNivelSeveridadeModel) => {
        this.nivel = data;
        this.nivelForm.patchValue({
          idNivelSeveridade: this.nivel.idNivelSeveridade,
          nivel_risco_MedidasDeControle: this.nivel.nivel_risco_MedidasDeControle,
          numero_risco_MedidasDeControle: this.nivel.numero_risco_MedidasDeControle,
          descricao_risco_MedidasDeControle: this.nivel.descricao_MedidasDeControle,
          nivel_permissao_MedidasDeControle: this.nivel.nivel_permissao_MedidasDeControle,


        });
      },
      (error: any) => {
        console.error('Erro ao buscar perigo:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this.nivelForm.valid) {
      const formData = this.nivelForm.value as PutNivelSeveridadeModel;
      this.NivelSeveridadeService.editarNivelDeSeveridade(this.id!, formData).subscribe(
        response => {
          console.log('Nivel de Severidade editado com sucesso!', response);
          this.cadastroSucesso = 'Nivel de Severidade editado  com sucesso!';
          this.cadastroErro = null;
        },
        error => {
          console.error('Erro ao editar Nivel de Severidade:', error);
          this.cadastroErro = 'Erro ao editar Nivel de Severidade. Por favor, tente novamente.';
          this.cadastroSucesso = null;
        }
      );
    } else {
      this.markFormGroupTouched(this.nivelForm);
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