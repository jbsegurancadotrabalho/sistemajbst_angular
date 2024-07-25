import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncaoEspecificaService } from 'src/app/services/funcaoespecifica.service';// Import the service
import { ActivatedRoute, Router } from '@angular/router';
import { PostAvaliacaoOcupacionalFuncaoEspecificaModel } from 'src/app/models/sms/PostAvaliacaoOcupacionalFuncaoEspecificaModel'; 
import { GetFuncaoEspecificaUnidadeModel } from 'src/app/models/funcao-especifica/GetFuncaoEspecificaUnidadeModel';
import { AvaliacaoFuncao } from 'src/app/services/avaliacoes.funcoes.service';

@Component({
  selector: 'app-criar-avaliacao-funcao-especifica',
  templateUrl: './criar-avaliacao-funcao-especifica.component.html',
  styleUrls: ['./criar-avaliacao-funcao-especifica.component.css']
})
export class CriarAvaliacaoFuncaoEspecificaComponent implements OnInit {
  formularioExame!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  funcao: GetFuncaoEspecificaUnidadeModel | null = null;
  id: string | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private FuncaoEspecificaService: FuncaoEspecificaService,
    private EAvaliacaoFuncao: AvaliacaoFuncao,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this. formularioExame = this.formBuilder.group({
      nome_avaliacoes_funcao: ['', Validators.required],
      tipo_avaliacoes_funcao: ['', Validators.required],
      descricao_avaliacoes_funcao: ['', Validators.required],
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
        this. formularioExame.patchValue({
          idFuncaoEspecifica: this.funcao.idFuncaoEspecifica
    
        });
      },
      (error: any) => {
        console.error('Erro ao buscar função:', error);
      }
    );
  }

  criarAvaliacao() {
    // Verifique se o formulário é válido
    if (this. formularioExame.valid) {
      const novoRisco: PostAvaliacaoOcupacionalFuncaoEspecificaModel = this.formularioExame.value as PostAvaliacaoOcupacionalFuncaoEspecificaModel;
      this.EAvaliacaoFuncao.criarAvaliacoesOcupacionaisFuncaoEspecifica(novoRisco).subscribe(
        response => {
          console.log('Avaliação criada com sucesso:', response);
          this.cadastroSucesso = 'Avaliação criada com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar Avaliação:', error);
          this.cadastroErro = 'Erro ao criar Avaliação. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this. formularioExame);
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