import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostNivelSeveridadeModel } from 'src/app/models/sms/PostNivelSeveridadeModel'; 
import { ActivatedRoute, Router } from '@angular/router';
import { NivelSeveridadeService } from 'src/app/services/nivel_severidade.service';
import { GetPerigoModel } from 'src/app/models/sms/GetPerigoModel';
import { PerigoService } from 'src/app/services/perigo.service';
import { GetNivelSeveridadeModel } from 'src/app/models/sms/GetNivelSeveridadeModel';


@Component({
  selector: 'app-criar-nivel-severidade',
  templateUrl: './criar-nivel-severidade.component.html',
  styleUrls: ['./criar-nivel-severidade.component.css']
})
export class CriarNivelSeveridadeComponent implements OnInit {
  formNivel!: FormGroup;
  perigoForm!: FormGroup;
  id: string | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  perigo: GetNivelSeveridadeModel  | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private NivelSeveridadeService : NivelSeveridadeService ,
    private perigoService: PerigoService
  ) {}

  ngOnInit(): void {
    // Inicialize o formulário e defina os controles
    this.formNivel = this.formBuilder.group({
      nivel_risco_MedidasDeControle: ['', Validators.required],
      numero_risco_MedidasDeControle: ['', Validators.required],
      descricao_MedidasDeControle: ['', Validators.required],
      nivel_permissao_MedidasDeControle: ['', Validators.required],
      idPerigo: ['', Validators.required]
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.perigoService.consultarPerigoPorId(this.id).subscribe({
        next: (data: GetPerigoModel) => {
          console.log('Dados da função:', data); // Verifique os dados retornados pela API
          this.formNivel.patchValue({
            idPerigo: data.idPerigo,
          });
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }

  criarNivelDeSeveridade() {
    console.log('Método criar nivel de severidade() chamado'); // Verifique se o método está sendo chamado
    // Verifique se o formulário é válido
    if (this.formNivel.valid) {
      const novoRisco:  PostNivelSeveridadeModel = this.formNivel.value as PostNivelSeveridadeModel;
      console.log('Dados do formulário:', this.formNivel.value); // Verifique os valores do formulário
      this.NivelSeveridadeService.criarNivelDeSeveridade(novoRisco).subscribe(
        response => {
          console.log('Nivel de Severidade criado com sucesso:', response);
          this.cadastroSucesso = 'Nivel de Severidade criado com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar Nivel de Severidade:', error);
          this.cadastroErro = 'Erro ao criar Nivel de Severidade. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this.formNivel);
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
