import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncaoEspecificaService } from 'src/app/services/funcaoespecifica.service';// Import the service
import { PutFuncaoDocModel } from 'src/app/models/funcaodoc/PutFuncaoDocModel';
import { ActivatedRoute, Router } from '@angular/router';
import { EpiService } from 'src/app/services/epi.service'; 
import { PostEpiIncluirFuncaoEspecificaModel } from 'src/app/models/sms/PostEpiIncluirFuncaoEspecificaModel';  // Importe o modelo
import { GetFuncaoEspecificaUnidadeModel } from 'src/app/models/funcao-especifica/GetFuncaoEspecificaUnidadeModel';



@Component({
  selector: 'app-criar-epi-funcao-especifica',
  templateUrl: './criar-epi-funcao-especifica.component.html',
  styleUrls: ['./criar-epi-funcao-especifica.component.css']
})
export class CriarEpiFuncaoEspecificaComponent implements OnInit {
  formularioEPI!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  funcao: GetFuncaoEspecificaUnidadeModel | null = null;
  id: string | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private FuncaoEspecificaService: FuncaoEspecificaService,
    private EpiService : EpiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioEPI = this.formBuilder.group({
      nome_epi: ['', Validators.required],
      descricao_epi: ['', Validators.required],
      ca: ['', Validators.required],
      idFuncaoEspecifica: ['', Validators.required]

    });
    if (this.id) {
      this.buscarFuncaoPorId();
    }
  }


  buscarFuncaoPorId(): void {
    this.FuncaoEspecificaService.consultarFuncaoPorId(this.id!).subscribe(
      (data: GetFuncaoEspecificaUnidadeModel) => {
        this.funcao = data;
        // Define os valores dos campos do formulário
        this.formularioEPI.patchValue({
          idFuncaoEspecifica: this.funcao.idFuncaoEspecifica
    
        });
      },
      (error: any) => {
        console.error('Erro ao buscar função:', error);
      }
    );
  }

  criarEpi() {
    // Verifique se o formulário é válido
    if (this.formularioEPI.valid) {
      const novoRisco: PostEpiIncluirFuncaoEspecificaModel = this.formularioEPI.value as PostEpiIncluirFuncaoEspecificaModel;
      this.EpiService.criarEpiIncluirFuncaoEspecifica(novoRisco).subscribe(
        response => {
          console.log('EPI criado com sucesso:', response);
          this.cadastroSucesso = 'EPI criado com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar risco:', error);
          this.cadastroErro = 'Erro ao criar risco. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this.formularioEPI);
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