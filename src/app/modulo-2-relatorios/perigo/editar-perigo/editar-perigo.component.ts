import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PerigoService } from 'src/app/services/perigo.service';
import { PutPerigoModel } from 'src/app/models/sms/PutPerigoModel';

@Component({
  selector: 'app-editar-perigo',
  templateUrl: './editar-perigo.component.html',
  styleUrls: ['./editar-perigo.component.css']
})
export class EditarPerigoComponent implements OnInit {
  id: string | null = null;
  perigo: PutPerigoModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  perigoForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private perigoService: PerigoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.perigoForm = this.formBuilder.group({
      idPerigo: ['', Validators.required],
      nomePerigo: ['', Validators.required],
      causasPerigo: ['', Validators.required],
      consequencias_perigo: ['', Validators.required],
      medidasPreventivas: ['', Validators.required],
      classificacao: ['', Validators.required]
    });

    if (this.id) {
      this.buscarPerigoPorId();
    }
  }

  buscarPerigoPorId(): void {
    this.perigoService.consultarPerigoPorId(this.id!).subscribe(
      (data: PutPerigoModel) => {
        this.perigo = data;
        this.perigoForm.patchValue({
          idPerigo: this.perigo.idPerigo,
          nomePerigo: this.perigo.nomePerigo,
          causasPerigo: this.perigo.causasPerigo,
          consequencias_perigo: this.perigo.consequencias_perigo,
          medidasPreventivas: this.perigo.medidasPreventivas,
          classificacao: this.perigo.classificacao
        });
      },
      (error: any) => {
        console.error('Erro ao buscar perigo:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this.perigoForm.valid) {
      const formData = this.perigoForm.value as PutPerigoModel;
      this.perigoService.editarPerigo(this.id!, formData).subscribe(
        response => {
          console.log('Perigo editado com sucesso!', response);
          this.cadastroSucesso = 'Perigo editado com sucesso!';
          this.cadastroErro = null;
        },
        error => {
          console.error('Erro ao editar perigo:', error);
          this.cadastroErro = 'Erro ao editar perigo. Por favor, tente novamente.';
          this.cadastroSucesso = null;
        }
      );
    } else {
      this.markFormGroupTouched(this.perigoForm);
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