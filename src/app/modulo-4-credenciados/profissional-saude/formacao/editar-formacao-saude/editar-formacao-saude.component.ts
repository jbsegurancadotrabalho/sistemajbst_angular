import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ProfissionalSaudeService } from 'src/app/services/profissional-saude.service';
import { PutProfissionalSaudeModel } from 'src/app/models/profissional-saude/PutProfissionalSaudeModel';
import { FormacaoSaudeService } from 'src/app/services/formacaosaude.service';
import { PostFormacaoSaudeModel } from 'src/app/models/profissional-saude/formacao/PostFormacaoSaudeModel';
import { PutFormacaoSaudeModel } from 'src/app/models/profissional-saude/formacao/PutFormacaoSaudeModel';

@Component({
  selector: 'app-editar-formacao-saude',
  templateUrl: './editar-formacao-saude.component.html',
  styleUrls: ['./editar-formacao-saude.component.css']
})
export class EditarFormacaoSaudeComponent implements OnInit {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioFormacaoSaude: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;
  formacaosaude: PutFormacaoSaudeModel | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private config: NgSelectConfig,
    private ProfissionalSaudeService : ProfissionalSaudeService,
    private FormacaoSaudeService: FormacaoSaudeService,
    private router: Router
  ) {
    this.formularioFormacaoSaude = this.formBuilder.group({
      idFormacaoSaude: ['', Validators.required],
      formacao_saude: ['', Validators.required],
      conselho: ['', Validators.required],
      registro: ['', Validators.required],
      estado: ['', Validators.required],
    });

    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.buscarFormacaoPorId();
  }

  buscarFormacaoPorId(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.FormacaoSaudeService.consultarFormacaoSaudePorId(this.id).subscribe(
        (data: PutFormacaoSaudeModel) => {
          this.formacaosaude = data;
          this.formularioFormacaoSaude.patchValue(data);

        },
        (error: any) => {
          console.error('Erro ao buscar exame:', error);
        }
      );
    } else {
      console.error('ID não encontrado na rota.');
    }
  }

  editarFormacaoSaude(): void {
    if (this.formularioFormacaoSaude.valid) {
      const profissionalAtualizado: PutFormacaoSaudeModel = this.formularioFormacaoSaude.value;
      this.FormacaoSaudeService.editarFormacaoSaude(profissionalAtualizado).subscribe(
        response => {
          console.log('Formação editada com sucesso:', response);
          this.cadastroSucesso = 'Formação editada com sucesso!';
          // Redirecionar após a edição, se necessário
        },
        error => {
          console.error('Erro ao editar Formação do Profissional:', error);
          this.cadastroErro = 'Erro ao editar Formação. Por favor, tente novamente.';
        }
      );
    } else {
      this.markFormGroupTouched(this.formularioFormacaoSaude);
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

