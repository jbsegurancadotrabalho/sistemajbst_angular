import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostNivelSeveridadeModel } from 'src/app/models/sms/PostNivelSeveridadeModel'; 
import { ActivatedRoute, Router } from '@angular/router';
import { PotencialSeveridadeService } from 'src/app/services/potencial-de-severidade.service'; 
import { GetPerigoModel } from 'src/app/models/sms/GetPerigoModel';
import { PerigoService } from 'src/app/services/perigo.service';
import { PostPotencialSeveridadeModel } from 'src/app/models/sms/PostPotencialSeveridadeModel'; 
@Component({
  selector: 'app-criar-potencial-severidade',
  templateUrl: './criar-potencial-severidade.component.html',
  styleUrls: ['./criar-potencial-severidade.component.css']
})
export class CriarPotencialSeveridadeComponent implements OnInit {
  formPotencial!: FormGroup;
  perigoForm!: FormGroup;
  id: string | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  perigo: PostPotencialSeveridadeModel  | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private PotencialSeveridadeService : PotencialSeveridadeService,
    private perigoService: PerigoService
  ) {}

  ngOnInit(): void {
    // Inicialize o formulário e defina os controles
    this.formPotencial = this.formBuilder.group({
      categoria_potencial_severidade: ['', Validators.required],
      tipo: ['', Validators.required],
      caracteristicas_potencial_severidade: ['', Validators.required],
      idPerigo: ['', Validators.required]
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.perigoService.consultarPerigoPorId(this.id).subscribe({
        next: (data: GetPerigoModel) => {
          console.log('Dados da função:', data); // Verifique os dados retornados pela API
          this.formPotencial.patchValue({
            idPerigo: data.idPerigo,
          });
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }

  criarPotencialDeSeveridade() {
    console.log('Método criar nivel de severidade() chamado'); // Verifique se o método está sendo chamado
    // Verifique se o formulário é válido
    if (this.formPotencial.valid) {
      const novoRisco:  PostPotencialSeveridadeModel = this.formPotencial.value as PostPotencialSeveridadeModel;
      console.log('Dados do formulário:', this.formPotencial.value); // Verifique os valores do formulário
      this.PotencialSeveridadeService.criarPotencialDeSeveridade(novoRisco).subscribe(
        response => {
          console.log('Potencial de Severidade criado com sucesso:', response);
          this.cadastroSucesso = 'Potencial de Severidade criado com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar Potencial de Severidade:', error);
          this.cadastroErro = 'Erro ao criar Nivel de Severidade. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this.formPotencial);
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
