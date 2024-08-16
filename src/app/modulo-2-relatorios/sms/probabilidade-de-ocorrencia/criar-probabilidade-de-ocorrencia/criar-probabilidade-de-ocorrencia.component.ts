import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DanosService } from 'src/app/services/danos.service';
import { PostProbabilidadeDeOcorrenciaModel } from 'src/app/models/sms/PostProbabilidadeDeOcorrenciaModel';
import { GetProbabilidadeDeOcorrenciaModel } from 'src/app/models/sms/GetProbabilidadeDeOcorrenciaModel';
import { ActivatedRoute, Router } from '@angular/router';
import { ProbabilidadeDeOcorrenciaService } from 'src/app/services/probabilidade_de_ocorrencia.service';
import { GetPerigoModel } from 'src/app/models/sms/GetPerigoModel';
import { PerigoService } from 'src/app/services/perigo.service';


@Component({
  selector: 'app-criar-probabilidade-de-ocorrencia',
  templateUrl: './criar-probabilidade-de-ocorrencia.component.html',
  styleUrls: ['./criar-probabilidade-de-ocorrencia.component.css']
})
export class CriarProbabilidadeDeOcorrenciaComponent implements OnInit {
  formularioProbabilidadeDeOcorrencia!: FormGroup;
  perigoForm!: FormGroup;
  id: string | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  perigo: GetProbabilidadeDeOcorrenciaModel | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private danosService: DanosService,
    private probabilidadeDeOcorrenciaService: ProbabilidadeDeOcorrenciaService,
    private perigoService: PerigoService
  ) {}

  ngOnInit(): void {
    // Inicialize o formulário e defina os controles
    this.formularioProbabilidadeDeOcorrencia = this.formBuilder.group({
      categoria: ['', Validators.required],
      denominacao: ['', Validators.required],
      descricao: ['', Validators.required],
      idPerigo: ['', Validators.required]
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.perigoService.consultarPerigoPorId(this.id).subscribe({
        next: (data: GetPerigoModel) => {
          console.log('Dados da função:', data); // Verifique os dados retornados pela API
          this.formularioProbabilidadeDeOcorrencia.patchValue({
            idPerigo: data.idPerigo,
          });
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }

  criarProbabilidadeDeOcorrencia() {
    console.log('Método criarProbabilidadeDeOcorrencia() chamado'); // Verifique se o método está sendo chamado
    // Verifique se o formulário é válido
    if (this.formularioProbabilidadeDeOcorrencia.valid) {
      const novoRisco:  PostProbabilidadeDeOcorrenciaModel = this.formularioProbabilidadeDeOcorrencia.value as PostProbabilidadeDeOcorrenciaModel;
      console.log('Dados do formulário:', this.formularioProbabilidadeDeOcorrencia.value); // Verifique os valores do formulário
      this.probabilidadeDeOcorrenciaService.criarProbabilidadeDeOcorrencia(novoRisco).subscribe(
        response => {
          console.log('Probabilidade de Ocorrencia criado com sucesso:', response);
          this.cadastroSucesso = 'Probabilidade de Ocorrencia criada com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar Probabilidade de Ocorrencia:', error);
          this.cadastroErro = 'Erro ao criar Probabilidade de Ocorrencia. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this.formularioProbabilidadeDeOcorrencia);
    }
  }

  // Função para marcar todos os campos do formulário como tocados
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
