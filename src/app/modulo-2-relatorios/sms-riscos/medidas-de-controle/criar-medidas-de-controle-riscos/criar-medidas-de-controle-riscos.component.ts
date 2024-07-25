import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedidasDeControleService } from 'src/app/services/medidas-de-controle.service'; 
import { GetRiscosModel } from 'src/app/models/sms/GetRiscosModel'; 
import { RiscosService } from 'src/app/services/riscos.service'; 
import { PostMedidasDeControleRiscosModel } from 'src/app/models/sms/PostMedidasDeControleRiscosModel'; 

@Component({
  selector: 'app-criar-medidas-de-controle-riscos',
  templateUrl: './criar-medidas-de-controle-riscos.component.html',
  styleUrls: ['./criar-medidas-de-controle-riscos.component.css']
})
export class CriarMedidasDeControleRiscosComponent  implements OnInit {
  formMedidas!: FormGroup;
  perigoForm!: FormGroup;
  id: string | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private MedidasDeControleService: MedidasDeControleService,
    private RiscosService: RiscosService
  ) {}

  ngOnInit(): void {
    // Inicialize o formulário e defina os controles
    this.formMedidas = this.formBuilder.group({
      valor_MedidasDeControle: ['', Validators.required],
      tipo_MedidasDeControle: ['', Validators.required],
      descricao_MedidasDeControle: ['', Validators.required],
      idRisco: ['', Validators.required]
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.RiscosService.consultarRiscoPorId(this.id).subscribe({
        next: (data: GetRiscosModel) => {
          console.log('Dados da Medidas de Controle:', data); // Verifique os dados retornados pela API
          this.formMedidas.patchValue({
            idRisco: data.idRisco,
          });
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }

  criarMedidasDeControleRiscos() {
    console.log('Método criar Medidas de Controle() chamado'); // Verifique se o método está sendo chamado
    // Verifique se o formulário é válido
    if (this.formMedidas.valid) {
      const novoRisco:  PostMedidasDeControleRiscosModel = this.formMedidas.value as PostMedidasDeControleRiscosModel;
      console.log('Dados do formulário:', this.formMedidas.value); // Verifique os valores do formulário
      this.MedidasDeControleService.criarMedidasDeControleRiscos(novoRisco).subscribe(
        response => {
          console.log('Medidas de Controle criada com sucesso para o Risco escolhido:', response);
          this.cadastroSucesso = 'Medidas de Controle criada com sucesso para o Risco escolhido!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar Medidas de Controle criada com sucesso para o Risco escolhido:', error);
          this.cadastroErro = 'Erro ao criar Medidas de Controle criada com sucesso para o Risco escolhido. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this.formMedidas);
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
