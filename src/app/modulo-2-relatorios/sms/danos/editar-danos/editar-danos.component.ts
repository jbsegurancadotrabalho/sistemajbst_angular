import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetDanosModel } from 'src/app/models/sms/GetDanosModel';
import { PutDanosModel } from 'src/app/models/sms/PutDanosModel';
import { DanosService } from 'src/app/services/danos.service';

@Component({
  selector: 'app-editar-danos',
  templateUrl: './editar-danos.component.html',
  styleUrls: ['./editar-danos.component.css']
})
export class EditarDanosComponent implements OnInit {
  id: string | null = null;
  danos: GetDanosModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  danosForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private danosService: DanosService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.danosForm = this.formBuilder.group({
      idDanos: ['', Validators.required],
      nomeDano: ['', Validators.required],
      descricaoDano: ['', Validators.required],

    });

    if (this.id) {
      this.buscarPerigoPorId();
    }
  }

  buscarPerigoPorId(): void {
    this.danosService.consultarDanosPorId(this.id!).subscribe(
      (data: GetDanosModel) => {
        this.danos = data;
        this.danosForm.patchValue({
          idDanos: this.danos.idDanos,
          nomeDano: this.danos.nomeDano,
          descricaoDano: this.danos.descricaoDano,

        });
      },
      (error: any) => {
        console.error('Erro ao buscar perigo:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this.danosForm.valid) {
      const formData = this.danosForm.value as PutDanosModel;
      this.danosService.editarDanos(this.id!, formData).subscribe(
        response => {
          console.log('Dano editado com sucesso!', response);
          this.cadastroSucesso = 'Dano editado com sucesso!';
          this.cadastroErro = null;
        },
        error => {
          console.error('Erro ao editar perigo:', error);
          this.cadastroErro = 'Erro ao editar perigo. Por favor, tente novamente.';
          this.cadastroSucesso = null;
        }
      );
    } else {
      this.markFormGroupTouched(this.danosForm);
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