import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AvaliacaoFuncao } from 'src/app/services/avaliacoes.funcoes.service'; 
import { PutAvaliaçõesOcupacionaisFuncoesModel } from 'src/app/models/sms/PutAvaliaçõesOcupacionaisFuncoesModel'; 
import { GetAvaliaçõesOcupacionaisFuncoesModel } from 'src/app/models/sms/GetAvaliaçõesOcupacionaisFuncoesModel'; 


@Component({
  selector: 'app-editar-avaliacao-funcaodoc',
  templateUrl: './editar-avaliacao-funcaodoc.component.html',
  styleUrls: ['./editar-avaliacao-funcaodoc.component.css']
})
export class EditarAvaliacaoFuncaodocComponent  implements OnInit {
  id: string | null = null;
  avaliacao: PutAvaliaçõesOcupacionaisFuncoesModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  avaliacaoForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private AvaliacaoFuncao : AvaliacaoFuncao ,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.avaliacaoForm = this.formBuilder.group({
      idAvaliacoes_funcao: ['', Validators.required],
      nome_avaliacoes_funcao: ['', Validators.required],
      tipo_avaliacoes_funcao: ['', Validators.required],
      descricao_avaliacoes_funcao: ['', Validators.required],
      tipo_de_avaliacao: ['', Validators.required],
      valor_obtido: ['', Validators.required],
      limite_de_tolerancia: ['', Validators.required],
    tempo_de_exposicao: ['', Validators.required],
    metodo: ['', Validators.required],
      conclusao_da_exposicao: ['', Validators.required],
    equipamento_de_medicao: ['', Validators.required],
    modelo: ['', Validators.required],
      serie: ['', Validators.required],
      calibracao: ['', Validators.required],
    });

    if (this.id) {
      this.buscarEpiPorId();
    }
  }

  buscarEpiPorId(): void {
    this.AvaliacaoFuncao.consultarAvaliaçõesPorId(this.id!).subscribe(
      (data:  GetAvaliaçõesOcupacionaisFuncoesModel) => {
        this. avaliacao = data;
        this.avaliacaoForm.patchValue({
          idAvaliacoes_funcao: this.avaliacao.idAvaliacoes_funcao,
          nome_avaliacoes_funcao: this.avaliacao.nome_avaliacoes_funcao,
          tipo_avaliacoes_funcao: this.avaliacao.tipo_avaliacoes_funcao,
          descricao_avaliacoes_funcao: this.avaliacao.descricao_avaliacoes_funcao,
          tipo_de_avaliacao: this.avaliacao.descricao_avaliacoes_funcao,
          valor_obtido: this.avaliacao.valor_obtido,
          limite_de_tolerancia: this.avaliacao.limite_de_tolerancia,
        tempo_de_exposicao: this.avaliacao.tempo_de_exposicao,
        metodo: this.avaliacao.metodo,
          conclusao_da_exposicao: this.avaliacao.conclusao_da_exposicao,
        equipamento_de_medicao: this.avaliacao.equipamento_de_medicao,
        modelo: this.avaliacao.modelo,
          serie: this.avaliacao.serie,
          calibracao: this.avaliacao.calibracao,
        });
      },
      (error: any) => {
        console.error('Erro ao buscar EPI:', error);
      }
    );
  }

 enviarEdicao(): void {
    if (this.avaliacaoForm.valid) {
      const formData = this.avaliacaoForm.value as PutAvaliaçõesOcupacionaisFuncoesModel;
      this.AvaliacaoFuncao.editarAvaliações(this.id!, formData).subscribe(
        response => {
          console.log('Avaliação editada com sucesso!', response);
          this.cadastroSucesso = 'Avaliação editada com sucesso!';
          this.cadastroErro = null;
        },
        error => {
          console.error('Erro ao editar EPI:', error);
          this.cadastroErro = 'Erro ao editar Avaliação. Por favor, tente novamente.';
          this.cadastroSucesso = null;
        }
      );
    } else {
      this.markFormGroupTouched(this.avaliacaoForm);
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