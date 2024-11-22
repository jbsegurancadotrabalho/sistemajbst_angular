import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ProfissionalSaudeService } from 'src/app/services/profissional-saude.service';
import { PutProfissionalSaudeModel } from 'src/app/models/profissional-saude/PutProfissionalSaudeModel';
import { FormacaoSaudeService } from 'src/app/services/formacaosaude.service';
import { PostFormacaoSaudeModel } from 'src/app/models/profissional-saude/formacao/PostFormacaoSaudeModel';
import { PutFormacaoSaudeModel } from 'src/app/models/profissional-saude/formacao/PutFormacaoSaudeModel';
import { PostEspecializacaoSaudeModel } from 'src/app/models/profissional-saude/formacao/especializacao-saude/PostEspecializacaoSaudeModel';
import { EspecializacaoSaudeService } from 'src/app/services/especializacao.saude.service';
import { PutEspecializacaoSaudeModel } from 'src/app/models/profissional-saude/formacao/especializacao-saude/PutEspecializacaoSaudeModel';

@Component({
  selector: 'app-editar-especializacao-saude',
  templateUrl: './editar-especializacao-saude.component.html',
  styleUrls: ['./editar-especializacao-saude.component.css']
})
export class EditarEspecializacaoSaudeComponent  implements OnInit {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioEspecialisacaoSaude: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;
  formacaosaude: PutEspecializacaoSaudeModel | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private config: NgSelectConfig,
    private EspecializacaoSaudeService  : EspecializacaoSaudeService ,
    private FormacaoSaudeService: FormacaoSaudeService,
    private router: Router
  ) {
    this. formularioEspecialisacaoSaude = this.formBuilder.group({
      nomeEspecializacaoSaude: ['', Validators.required],
      descricaoEspecializacao: ['', Validators.required],
      idEspecializacaoSaude: ['', Validators.required],
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
      this.EspecializacaoSaudeService.consultarEspecializacaoSaudePorId(this.id).subscribe(
        (data: PutEspecializacaoSaudeModel) => {
          this.formacaosaude = data;
          this.formularioEspecialisacaoSaude.patchValue(data);

        },
        (error: any) => {
          console.error('Erro ao buscar exame:', error);
        }
      );
    } else {
      console.error('ID não encontrado na rota.');
    }
  }

  editarEspecializacaoSaude(): void {
    if (this.formularioEspecialisacaoSaude.valid) {
      const profissionalAtualizado: PutEspecializacaoSaudeModel = this.formularioEspecialisacaoSaude.value;
      this.EspecializacaoSaudeService.editarEspecializacaoSaude(profissionalAtualizado).subscribe(
        response => {
          console.log('Especialização editada com sucesso:', response);
          this.cadastroSucesso = 'Especialização editada com sucesso!';
          // Redirecionar após a edição, se necessário
        },
        error => {
          console.error('Erro ao Especialização:', error);
          this.cadastroErro = 'Erro ao editar Especialização. Por favor, tente novamente.';
        }
      );
    } else {
      this.markFormGroupTouched(this.formularioEspecialisacaoSaude);
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


