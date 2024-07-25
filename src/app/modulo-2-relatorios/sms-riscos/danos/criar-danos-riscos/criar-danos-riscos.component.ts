import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DanosService } from 'src/app/services/danos.service';
import { PostDanosModel } from 'src/app/models/sms/PostDanosModel';
import { GetRiscosModel } from 'src/app/models/sms/GetRiscosModel';
import { ActivatedRoute, Router } from '@angular/router';
import { RiscosService } from 'src/app/services/riscos.service'; 
import { PostDanosRiscosModel } from 'src/app/models/sms/PostDanosRiscosModel';


@Component({
  selector: 'app-criar-danos-riscos',
  templateUrl: './criar-danos-riscos.component.html',
  styleUrls: ['./criar-danos-riscos.component.css']
})
export class CriarDanosRiscosComponent implements OnInit {
  formularioDanos!: FormGroup;
  idRisco: string | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  riscos: GetRiscosModel | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private danosService: DanosService,
    private RiscosService : RiscosService ,
  ) {}

  ngOnInit(): void {
    // Inicialize o formulário e defina os controles
    this.formularioDanos = this.formBuilder.group({
      nomeDano: ['', Validators.required],
      descricaoDano: ['', Validators.required],
      idRisco: ['', Validators.required]
    });

    this.idRisco = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.idRisco) {
      this.RiscosService.consultarRiscoPorId(this.idRisco).subscribe({
        next: (data: GetRiscosModel) => {
          console.log('Dados da função:', data); // Verifique os dados retornados pela API
          this.formularioDanos.patchValue({
            idRisco: data.idRisco,
          });
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }

  criarDanosRiscos() {
    console.log('Método criarDanos() chamado'); // Verifique se o método está sendo chamado
    // Verifique se o formulário é válido
    if (this.formularioDanos.valid) {
      const novoRisco: PostDanosRiscosModel = this.formularioDanos.value as PostDanosRiscosModel;
      console.log('Dados do formulário:', this.formularioDanos.value); // Verifique os valores do formulário
      this.danosService.criarDanosRiscos(novoRisco).subscribe(
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
