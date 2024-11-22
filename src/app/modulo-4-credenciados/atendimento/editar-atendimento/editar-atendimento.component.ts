import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { PutAtendimentoModel } from 'src/app/models/atendimento/PutAtendimentoModel';
import { GetAtendimentoModel } from 'src/app/models/atendimento/GetAtendimentoModel';

@Component({
  selector: 'app-editar-atendimento',
  templateUrl: './editar-atendimento.component.html',
  styleUrls: ['./editar-atendimento.component.css']
})
export class EditarAtendimentoComponent implements OnInit {
  formularioAtendimento: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private config: NgSelectConfig,
    private atendimentoService: AtendimentoService
  ) {
    this.formularioAtendimento = this.formBuilder.group({
      idAtendimento: ['', Validators.required],
      tipo: ['', Validators.required],
      status: ['', Validators.required],
      link: ['', Validators.required],
      profissional: ['', Validators.required],
      descricao: ['', Validators.required]
    });
    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.consultarAtendimentoPorId();
    }
  }

  consultarAtendimentoPorId(): void {
    if (this.id) {
      this.atendimentoService.consultarAtendimentoPorId(this.id).subscribe(
        (data: GetAtendimentoModel) => {
          this.formularioAtendimento.patchValue({
            idAtendimento: data.idAtendimento,
            tipo: data.tipo,
            status: data.status,
            link: data.link,
            profissional: data.profissional,
            descricao: data.descricao
          });
        },
        (error: any) => {
          console.error('Erro ao buscar Atendimento:', error);
        }
      );
    }
  }

  editarAtendimento(): void {
    if (this.formularioAtendimento.valid && this.id) {
      const atendimento: PutAtendimentoModel = this.formularioAtendimento.value as PutAtendimentoModel;
      this.atendimentoService.editarAtendimento(this.id, atendimento).subscribe(
        response => {
          console.log('Atendimento editado com sucesso:', response);
          this.cadastroSucesso = 'Atendimento editado com sucesso!';
        },
        error => {
          console.error('Erro ao editar Atendimento:', error);
          this.cadastroErro = 'Erro ao editar Atendimento. Por favor, tente novamente.';
        }
      );
    } else {
      console.error('O formulário é inválido. Por favor, verifique os campos obrigatórios.');
      this.markFormGroupTouched(this.formularioAtendimento);
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
