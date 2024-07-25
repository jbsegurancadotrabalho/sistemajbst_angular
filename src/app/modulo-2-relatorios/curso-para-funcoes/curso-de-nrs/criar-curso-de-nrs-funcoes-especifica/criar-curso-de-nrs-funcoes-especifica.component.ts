import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncaoEspecificaService } from 'src/app/services/funcaoespecifica.service';// Import the service
import { PutFuncaoDocModel } from 'src/app/models/funcaodoc/PutFuncaoDocModel';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoNrService } from 'src/app/services/curso-nrsfuncoes.service'; 
import { PostEpiIncluirFuncaoEspecificaModel } from 'src/app/models/sms/PostEpiIncluirFuncaoEspecificaModel';  // Importe o modelo
import { GetFuncaoEspecificaUnidadeModel } from 'src/app/models/funcao-especifica/GetFuncaoEspecificaUnidadeModel';
import { PostCriarCursoFuncaoEspecificaModel } from 'src/app/models/sms/PostCriarCursoFuncaoEspecificaModel';


@Component({
  selector: 'app-criar-curso-de-nrs-funcoes-especifica',
  templateUrl: './criar-curso-de-nrs-funcoes-especifica.component.html',
  styleUrls: ['./criar-curso-de-nrs-funcoes-especifica.component.css']
})
export class CriarCursoDeNrsFuncoesEspecificaComponent implements OnInit {
  formularioCurso!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  funcao: GetFuncaoEspecificaUnidadeModel | null = null;
  id: string | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private FuncaoEspecificaService: FuncaoEspecificaService,
    private CursoNrService: CursoNrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioCurso = this.formBuilder.group({
      nomeCurso: ['', Validators.required],
      descricaoCurso: ['', Validators.required],
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
        this.formularioCurso.patchValue({
          idFuncaoEspecifica: this.funcao.idFuncaoEspecifica
    
        });
      },
      (error: any) => {
        console.error('Erro ao buscar função:', error);
      }
    );
  }

  criarCurso() {
    // Verifique se o formulário é válido
    if (this.formularioCurso.valid) {
      const novoRisco: PostCriarCursoFuncaoEspecificaModel = this.formularioCurso.value as PostCriarCursoFuncaoEspecificaModel ;
      this.CursoNrService.criarCursosFuncoesEspecificas(novoRisco).subscribe(
        response => {
          console.log('Curso criado com sucesso:', response);
          this.cadastroSucesso = 'Curso criado com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar curso:', error);
          this.cadastroErro = 'Erro ao criar curso. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this.formularioCurso);
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