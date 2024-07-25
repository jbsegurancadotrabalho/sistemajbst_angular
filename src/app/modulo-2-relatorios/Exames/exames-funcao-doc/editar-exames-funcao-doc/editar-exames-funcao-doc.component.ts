import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExameService } from 'src/app/services/examesfuncaodoc.service'; 
import { PutExamesFuncaoModel } from 'src/app/models/sms/PutExameFuncaoModel'; 
import { GetExamesFuncaoModel } from 'src/app/models/sms/GetExamesFuncaoModel';


@Component({
  selector: 'app-editar-exames-funcao-doc',
  templateUrl: './editar-exames-funcao-doc.component.html',
  styleUrls: ['./editar-exames-funcao-doc.component.css']
})
export class EditarExamesFuncaoDocComponent implements OnInit {
  id: string | null = null;
  exame:  PutExamesFuncaoModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  exameForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ExameService : ExameService ,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.exameForm = this.formBuilder.group({
      id_exames_funcaodoc: ['', Validators.required],
      nome_exames_funcaodoc: ['', Validators.required],
      descricao_exames_funcaodoc: ['', Validators.required],
    });

    if (this.id) {
      this.buscarEpiPorId();
    }
  }

  buscarEpiPorId(): void {
    this.ExameService.consultarExamesPorId(this.id!).subscribe(
      (data: GetExamesFuncaoModel) => {
        this.exame = data;
        this.exameForm.patchValue({
        id_exames_funcaodoc: this.exame.id_exames_funcaodoc,
        nome_exames_funcaodoc: this.exame.nome_exames_funcaodoc,
        descricao_exames_funcaodoc: this.exame.descricao_exames_funcaodoc,

        });
      },
      (error: any) => {
        console.error('Erro ao buscar EPI:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this.exameForm.valid) {
      const formData = this.exameForm.value as  PutExamesFuncaoModel;
      this.ExameService.editarExames(this.id!, formData).subscribe(
        response => {
          console.log('Exame editado com sucesso!', response);
          this.cadastroSucesso = 'Exame editado com sucesso!';
          this.cadastroErro = null;
        },
        error => {
          console.error('Erro ao editar Exame:', error);
          this.cadastroErro = 'Erro ao editar Exame. Por favor, tente novamente.';
          this.cadastroSucesso = null;
        }
      );
    } else {
      this.markFormGroupTouched(this.exameForm);
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