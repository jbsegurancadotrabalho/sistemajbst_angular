import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostMedidasDeControleModel } from 'src/app/models/sms/PostMedidasDeControleModel'; 
import { ActivatedRoute, Router } from '@angular/router';
import { MedidasDeControleService } from 'src/app/services/medidas-de-controle.service'; 
import { GetPerigoModel } from 'src/app/models/sms/GetPerigoModel';
import { PerigoService } from 'src/app/services/perigo.service';
import { GetMedidasDeControleModel } from 'src/app/models/sms/GetMedidasDeControleModel'; 



@Component({
  selector: 'app-criar-medidas-de-controle',
  templateUrl: './criar-medidas-de-controle.component.html',
  styleUrls: ['./criar-medidas-de-controle.component.css']
})
export class CriarMedidasDeControleComponent implements OnInit {
  formMedidas!: FormGroup;
  perigoForm!: FormGroup;
  id: string | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  perigo:  PostMedidasDeControleModel | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private  MedidasDeControleService  :  MedidasDeControleService,
    private perigoService: PerigoService
  ) {}

  ngOnInit(): void {
    // Inicialize o formulário e defina os controles
    this.formMedidas = this.formBuilder.group({
      valor_MedidasDeControle: ['', Validators.required],
      tipo_MedidasDeControle: ['', Validators.required],
      descricao_MedidasDeControle: ['', Validators.required],
      idPerigo: ['', Validators.required]
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.perigoService.consultarPerigoPorId(this.id).subscribe({
        next: (data: GetPerigoModel) => {
          console.log('Dados da função:', data); // Verifique os dados retornados pela API
          this.formMedidas.patchValue({
            idPerigo: data.idPerigo,
          });
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }

  criarMedidasDeControle() {
    console.log('Método criar Medidas de Controle() chamado'); // Verifique se o método está sendo chamado
    // Verifique se o formulário é válido
    if (this.formMedidas.valid) {
      const medidas:  PostMedidasDeControleModel  = this.formMedidas.value as PostMedidasDeControleModel ;
      console.log('Dados do formulário:', this.formMedidas.value); // Verifique os valores do formulário
      this.MedidasDeControleService.criarMedidasDeControle(medidas).subscribe(
        response => {
          console.log('Medidas de Controle criada com sucesso:', response);
          this.cadastroSucesso = 'Medidas de Controle criada com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar Medidas de Controle:', error);
          this.cadastroErro = 'Erro ao criar Medidas de Controle. Por favor, tente novamente.';
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
