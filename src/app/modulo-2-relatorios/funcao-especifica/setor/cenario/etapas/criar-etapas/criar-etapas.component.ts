import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CenarioService } from 'src/app/services/cenario.service';
import { PostEtapasModel } from 'src/app/models/funcao-especifica/PostEtapasModel';
import { ActivatedRoute, Router } from '@angular/router';
import { GetCenarioModel } from 'src/app/models/funcao-especifica/GetCenarioModel';
import { EtapasService } from 'src/app/services/etapas.service';


@Component({
  selector: 'app-criar-etapas',
  templateUrl: './criar-etapas.component.html',
  styleUrls: ['./criar-etapas.component.css']
})
export class CriarEtapasComponent {


  formularioEtapas!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  cenario: GetCenarioModel | null = null;
  id: string | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private CenarioService : CenarioService ,
    private EtapasService : EtapasService ,
    private route: ActivatedRoute, 
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioEtapas = this.formBuilder.group({
      numero_etapa: ['', Validators.required],
      nome_etapa: ['', Validators.required],
      descricao_etapa: ['', Validators.required],
      acoes: ['', Validators.required],
      idCenario: ['', Validators.required]
    });
    if (this.id) {
      this.buscarUnidadePorId();
    }
  }

  buscarUnidadePorId(): void {
    this.CenarioService.consultarCenarioPorId(this.id!).subscribe(
      (data:  GetCenarioModel ) => {
        this.cenario = data;
        this.formularioEtapas.patchValue({
          idCenario: this.cenario.idCenario,
   
        });
      },
      (error: any) => {
        console.error('Erro ao buscar unidade:', error);
      }
    );
  }

  criarEtapas() {
    // Verifique se o formulário é válido
    if (this.formularioEtapas.valid) {
      const novoRisco: PostEtapasModel = this.formularioEtapas.value as PostEtapasModel;
      this.EtapasService.criarEtapas(novoRisco).subscribe(
        response => {
          console.log('Etapa criada com sucesso:', response);
          this.cadastroSucesso = 'Etapa criada com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar Etapa:', error);
          this.cadastroErro = 'Erro ao criar Etapa. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this.formularioEtapas);
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