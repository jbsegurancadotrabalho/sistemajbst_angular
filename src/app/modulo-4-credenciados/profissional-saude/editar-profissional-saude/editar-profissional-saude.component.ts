import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ProfissionalSaudeService } from 'src/app/services/profissional-saude.service';
import { PutExamesModel } from 'src/app/models/exames/PutExamesModel';
import { PutProfissionalSaudeModel } from 'src/app/models/profissional-saude/PutProfissionalSaudeModel';

@Component({
  selector: 'app-editar-profissional-saude',
  templateUrl: './editar-profissional-saude.component.html',
  styleUrls: ['./editar-profissional-saude.component.css']
})
export class EditarProfissionalSaudeComponent implements OnInit {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioProfissionalSaude: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;
  profissionalsaude: PutProfissionalSaudeModel | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private config: NgSelectConfig,
    private ProfissionalSaudeService : ProfissionalSaudeService,
    private router: Router
  ) {
    this.formularioProfissionalSaude = this.formBuilder.group({
      id_profissionalsaude: ['', Validators.required],
      nome_profissionalsaude: ['', Validators.required],
      rg: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone_1: ['', Validators.required],
      telefone_2: ['', Validators.required],
      email: ['', Validators.required],
      senha_sistema: ['', Validators.required],
    });

    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.buscarProfissionalPorId();
  }

  buscarProfissionalPorId(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.ProfissionalSaudeService.consultarProfissionalSaudePorId(this.id).subscribe(
        (data: PutProfissionalSaudeModel) => {
          this.profissionalsaude = data;
          this.formularioProfissionalSaude.patchValue(data);

        },
        (error: any) => {
          console.error('Erro ao buscar exame:', error);
        }
      );
    } else {
      console.error('ID não encontrado na rota.');
    }
  }

  editarProfissional(): void {
    if (this.formularioProfissionalSaude.valid) {
      const profissionalAtualizado: PutProfissionalSaudeModel = this.formularioProfissionalSaude.value;
      this.ProfissionalSaudeService.editarProfissionalSaude(profissionalAtualizado).subscribe(
        response => {
          console.log('Profissional editado com sucesso:', response);
          this.cadastroSucesso = 'Profissional editado com sucesso!';
          // Redirecionar após a edição, se necessário
        },
        error => {
          console.error('Erro ao editar Profissional:', error);
          this.cadastroErro = 'Erro ao editar Profissional. Por favor, tente novamente.';
        }
      );
    } else {
      this.markFormGroupTouched(this.formularioProfissionalSaude);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
