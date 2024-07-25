import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetMedidasDeControleModel } from 'src/app/models/sms/GetMedidasDeControleModel';
import { PutMedidasDeControleModel } from 'src/app/models/sms/PutMedidasDeControleModel'; 
import { MedidasDeControleService } from 'src/app/services/medidas-de-controle.service';

@Component({
  selector: 'app-editar-medidas-de-controle',
  templateUrl: './editar-medidas-de-controle.component.html',
  styleUrls: ['./editar-medidas-de-controle.component.css']
})
export class EditarMedidasDeControleComponent  implements OnInit {
  id: string | null = null;
  medidas:  GetMedidasDeControleModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  medidasForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private   MedidasDeControleService:   MedidasDeControleService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.medidasForm= this.formBuilder.group({
      idMedidasDeControle: ['', Validators.required],
      valor_MedidasDeControle: ['', Validators.required],
      tipo_MedidasDeControle: ['', Validators.required],
      descricao_MedidasDeControle: ['', Validators.required],


    });

    if (this.id) {
      this.buscarMedidasPorId();
    }
  }

  buscarMedidasPorId(): void {
    this.MedidasDeControleService.consultarMedidasDeControlePorId(this.id!).subscribe(
      (data: GetMedidasDeControleModel) => {
        this. medidas = data;
        this.medidasForm.patchValue({
          idMedidasDeControle: this.medidas.idMedidasDeControle,
          valor_MedidasDeControle: this.medidas.valor_MedidasDeControle,
          tipo_MedidasDeControle: this.medidas.tipo_MedidasDeControle,
          descricao_MedidasDeControle: this.medidas.descricao_MedidasDeControle,

        });
      },
      (error: any) => {
        console.error('Erro ao buscar perigo:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this.medidasForm.valid) {
      const formData = this.medidasForm.value as  PutMedidasDeControleModel;
      this.MedidasDeControleService.editarMedidasDeControle(this.id!, formData).subscribe(
        response => {
          console.log('Medidas de Controle editada com sucesso!', response);
          this.cadastroSucesso = 'Medidas de Controle editada  com sucesso!';
          this.cadastroErro = null;
        },
        error => {
          console.error('Erro ao editar Medidas de Controle:', error);
          this.cadastroErro = 'Erro ao editar Medidas de Controle. Por favor, tente novamente.';
          this.cadastroSucesso = null;
        }
      );
    } else {
      this.markFormGroupTouched(this.medidasForm);
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