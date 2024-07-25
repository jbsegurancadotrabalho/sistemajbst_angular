// criar-danos.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DanosService } from 'src/app/services/danos.service';
import { PostDanosModel } from 'src/app/models/sms/PostDanosModel';
import { GetPerigoModel } from 'src/app/models/sms/GetPerigoModel';
import { ActivatedRoute, Router } from '@angular/router';
import { PerigoService } from 'src/app/services/perigo.service';

@Component({
  selector: 'app-criar-danos',
  templateUrl: './criar-danos.component.html',
  styleUrls: ['./criar-danos.component.css']
})
export class CriarDanosComponent implements OnInit {
  formularioDanos!: FormGroup;
  perigoForm!: FormGroup;
  id: string | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  perigo: GetPerigoModel | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private danosService: DanosService,
    private perigoService: PerigoService,
  ) {}

  ngOnInit(): void {
    // Inicialize o formulário e defina os controles
    this.formularioDanos = this.formBuilder.group({
      nomeDano: ['', Validators.required],
      descricaoDano: ['', Validators.required],
      idPerigo: ['', Validators.required]
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.perigoService.consultarPerigoPorId(this.id).subscribe({
        next: (data: GetPerigoModel) => {
          console.log('Dados da função:', data); // Verifique os dados retornados pela API
          this.formularioDanos.patchValue({
            idPerigo: data.idPerigo,
          });
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }

  criarDanos() {
    console.log('Método criarDanos() chamado'); // Verifique se o método está sendo chamado
    // Verifique se o formulário é válido
    if (this.formularioDanos.valid) {
      const novoRisco: PostDanosModel = this.formularioDanos.value as PostDanosModel;
      console.log('Dados do formulário:', this.formularioDanos.value); // Verifique os valores do formulário
      this.danosService.criarDanos(novoRisco).subscribe(
        response => {
          console.log('Dano criado com sucesso:', response);
          this.cadastroSucesso = 'Dano criado com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar Dano:', error);
          this.cadastroErro = 'Erro ao criar Dano. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this.formularioDanos);
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
