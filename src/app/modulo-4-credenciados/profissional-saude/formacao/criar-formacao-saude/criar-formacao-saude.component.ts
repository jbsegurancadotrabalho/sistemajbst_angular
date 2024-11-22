import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ProfissionalSaudeService } from 'src/app/services/profissional-saude.service';
import { PutProfissionalSaudeModel } from 'src/app/models/profissional-saude/PutProfissionalSaudeModel';
import { FormacaoSaudeService } from 'src/app/services/formacaosaude.service';
import { PostFormacaoSaudeModel } from 'src/app/models/profissional-saude/formacao/PostFormacaoSaudeModel';



@Component({
  selector: 'app-criar-formacao-saude',
  templateUrl: './criar-formacao-saude.component.html',
  styleUrls: ['./criar-formacao-saude.component.css']
})
export class CriarFormacaoSaudeComponent implements OnInit {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioFormacaoSaude: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;
  profissionalsaude: PutProfissionalSaudeModel | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private config: NgSelectConfig,
    private ProfissionalSaudeService : ProfissionalSaudeService,
    private FormacaoSaudeService: FormacaoSaudeService,
    private router: Router
  ) {
    this.formularioFormacaoSaude = this.formBuilder.group({
      id_profissionalsaude: ['', Validators.required],
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
      this.ProfissionalSaudeService.consultarProfissionalSaudePorId(this.id).subscribe(
        (data: PutProfissionalSaudeModel) => {
          this.profissionalsaude = data;
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

  criarFormacaoSaude(): void {
    if (this.formularioFormacaoSaude.valid) {
      const profissionalAtualizado: PostFormacaoSaudeModel = this.formularioFormacaoSaude.value;
      this.FormacaoSaudeService.criarFormacaoSaude(profissionalAtualizado).subscribe(
        response => {
          console.log('Formação criada com sucesso:', response);
          this.cadastroSucesso = 'Formação criada com sucesso!';
          // Redirecionar após a edição, se necessário
        },
        error => {
          console.error('Erro ao criar Formação do Profissional:', error);
          this.cadastroErro = 'Erro ao criar Formação. Por favor, tente novamente.';
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

