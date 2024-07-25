import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetPotencialSeveridadeModel } from 'src/app/models/sms/GetPotencialSeveridadeModel'; 
import { PutPotencialSeveridadeModel } from 'src/app/models/sms/PutPotencialSeveridadeModel';
import { PotencialSeveridadeService } from 'src/app/services/potencial-de-severidade.service'; 


@Component({
  selector: 'app-editar-potencial-severidade',
  templateUrl: './editar-potencial-severidade.component.html',
  styleUrls: ['./editar-potencial-severidade.component.css']
})
export class EditarPotencialSeveridadeComponent implements OnInit {
  id: string | null = null;
  potencial:  GetPotencialSeveridadeModel| null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  potencialForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private  PotencialSeveridadeService:  PotencialSeveridadeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.potencialForm = this.formBuilder.group({
      idPotencialSeveridade: ['', Validators.required],
      categoria_potencial_severidade: ['', Validators.required],
      tipo: ['', Validators.required],
      caracteristicas_potencial_severidade: ['', Validators.required],


    });

    if (this.id) {
      this.buscarPerigoPorId();
    }
  }

  buscarPerigoPorId(): void {
    this.PotencialSeveridadeService.consultarNivelDeSeveridadePorId(this.id!).subscribe(
      (data: GetPotencialSeveridadeModel) => {
        this.potencial = data;
        this.potencialForm.patchValue({
          idPotencialSeveridade: this.potencial.idPotencialSeveridade,
          categoria_potencial_severidade: this.potencial.categoria_potencial_severidade,
          tipo: this.potencial.tipo,
          caracteristicas_potencial_severidade: this.potencial.caracteristicas_potencial_severidade,



        });
      },
      (error: any) => {
        console.error('Erro ao buscar risco:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this.potencialForm.valid) {
      const formData = this.potencialForm.value as PutPotencialSeveridadeModel;
      this. PotencialSeveridadeService.editarPotencialDeSeveridade(this.id!, formData).subscribe(
        response => {
          console.log('Potencial de Severidade editado com sucesso!', response);
          this.cadastroSucesso = 'Potencial de Severidade editado  com sucesso!';
          this.cadastroErro = null;
        },
        error => {
          console.error('Erro ao editar Potencial de Severidade:', error);
          this.cadastroErro = 'Erro ao editar Potencial de Severidade. Por favor, tente novamente.';
          this.cadastroSucesso = null;
        }
      );
    } else {
      this.markFormGroupTouched(this.potencialForm);
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