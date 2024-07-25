import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EpiService } from 'src/app/services/epi.service'; 
import { PutEpiModel } from 'src/app/models/sms/PutEpiModel'; 
import { GetEpiModel } from 'src/app/models/sms/GetEpiModel';


@Component({
  selector: 'app-editar-epi',
  templateUrl: './editar-epi.component.html',
  styleUrls: ['./editar-epi.component.css']
})
export class EditarEpiComponent  implements OnInit {
  id: string | null = null;
  epi: PutEpiModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  epiForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private epiService: EpiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.epiForm = this.formBuilder.group({
      idEpi: ['', Validators.required],
      nome_epi: ['', Validators.required],
      descricao_epi: ['', Validators.required],
      ca: ['', Validators.required]
    });

    if (this.id) {
      this.buscarEpiPorId();
    }
  }

  buscarEpiPorId(): void {
    this.epiService.consultarEpiPorId(this.id!).subscribe(
      (data: GetEpiModel) => {
        this.epi = data;
        this.epiForm.patchValue({
          idEpi: this.epi.idEpi,
          nome_epi: this.epi.nome_epi,
          descricao_epi: this.epi.descricao_epi,
          ca: this.epi.ca
        });
      },
      (error: any) => {
        console.error('Erro ao buscar EPI:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this.epiForm.valid) {
      const formData = this.epiForm.value as PutEpiModel;
      this.epiService.editarEpi(this.id!, formData).subscribe(
        response => {
          console.log('EPI editado com sucesso!', response);
          this.cadastroSucesso = 'EPI editado com sucesso!';
          this.cadastroErro = null;
        },
        error => {
          console.error('Erro ao editar EPI:', error);
          this.cadastroErro = 'Erro ao editar EPI. Por favor, tente novamente.';
          this.cadastroSucesso = null;
        }
      );
    } else {
      this.markFormGroupTouched(this.epiForm);
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