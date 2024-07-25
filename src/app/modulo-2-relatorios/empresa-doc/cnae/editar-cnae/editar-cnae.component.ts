import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CnaeService } from 'src/app/services/cnae.service';
import { PutCnaeModel } from 'src/app/models/empresadoc/PutCnaeModel';
import { GetCnaeModel } from 'src/app/models/empresadoc/GetCnaeModel';


@Component({
  selector: 'app-editar-cnae',
  templateUrl: './editar-cnae.component.html',
  styleUrls: ['./editar-cnae.component.css']
})
export class EditarCnaeComponent  implements OnInit {
  id: string | null = null;
  cnae: PutCnaeModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  cnaeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private CnaeService: CnaeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.cnaeForm = this.formBuilder.group({
      idCnae: ['', Validators.required],
      codigo: ['', Validators.required],
      denominacao: ['', Validators.required],
      grau_de_risco: ['', Validators.required]
    });

    if (this.id) {
      this. buscarCnaePorId();
    }
  }

  buscarCnaePorId(): void {
    this.CnaeService.consultarCnaePorId(this.id!).subscribe(
      (data: GetCnaeModel) => {
        this.cnae = data;
        this.cnaeForm.patchValue({
          idCnae: this.cnae.idCnae,
          codigo: this.cnae.codigo,
          denominacao: this.cnae.denominacao,
          grau_de_risco: this.cnae.grau_de_risco
        });
      },
      (error: any) => {
        console.error('Erro ao buscar EPI:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this.cnaeForm.valid) {
      const formData = this.cnaeForm.value as PutCnaeModel;
      this.CnaeService.editarCnae(this.id!, formData).subscribe(
        response => {
          console.log('Cnae editado com sucesso!', response);
          this.cadastroSucesso = 'Cnae editado com sucesso!';
          this.cadastroErro = null;
        },
        error => {
          console.error('Erro ao editar Cnae:', error);
          this.cadastroErro = 'Erro ao editar Cnae. Por favor, tente novamente.';
          this.cadastroSucesso = null;
        }
      );
    } else {
      this.markFormGroupTouched(this.cnaeForm);
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