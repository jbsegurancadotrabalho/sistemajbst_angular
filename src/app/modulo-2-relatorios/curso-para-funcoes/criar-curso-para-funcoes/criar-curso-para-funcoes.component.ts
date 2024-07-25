import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursoNrService } from 'src/app/services/curso-nrsfuncoes.service';
import { PostCursoModel } from 'src/app/models/sms/PostCursoNrsFuncoesModel';
import { FuncaoDocService } from 'src/app/services/funcaodoc.service'; // Import the service
import { PutFuncaoDocModel } from 'src/app/models/funcaodoc/PutFuncaoDocModel';

@Component({
  selector: 'app-criar-curso-para-funcoes',
  templateUrl: './criar-curso-para-funcoes.component.html',
  styleUrls: ['./criar-curso-para-funcoes.component.css']
})
export class CriarCursoParaFuncoesComponent implements OnInit{
  id: string | null = null;
  curso: PostCursoModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  cursoForm!: FormGroup;
  funcao: PutFuncaoDocModel | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoNrService: CursoNrService,
    private formBuilder: FormBuilder,
    private funcaoDocService: FuncaoDocService,
  ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.cursoForm = this.formBuilder.group({
  nomeCurso: ['', Validators.required],
  descricaoCurso: ['', Validators.required],
  idFuncaoDoc: ['', Validators.required]

    });
    if (this.id) {
      this.buscarFuncaoPorId();
    }
  }
  buscarFuncaoPorId(): void {
    this.funcaoDocService.buscarFuncaoPorId(this.id!).subscribe(
      (data: PutFuncaoDocModel) => {
        this.funcao = data;
        // Define os valores dos campos do formulário
        this.cursoForm.patchValue({
          idFuncaoDoc: this.funcao.idFuncaoDoc,
          nome_da_funcao: this.funcao.nome_da_funcao,
          setor_gho: this.funcao.setor_gho,
          cenario_funcaodoc: this.funcao.cenario_funcaodoc
        });
      },
      (error: any) => {
        console.error('Erro ao buscar função:', error);
      }
    );
  }

  criarCurso() {
    // Verifique se o formulário é válido
    if (this.cursoForm.valid) {
      const novoRisco: PostCursoModel = this.cursoForm.value as PostCursoModel;
      this.cursoNrService.criarCursos(novoRisco).subscribe(
        response => {
          console.log('Curso criado com sucesso:', response);
          this.cadastroSucesso = 'Curso criado com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar Curso:', error);
          this.cadastroErro = 'Erro ao criar curso. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this.cursoForm);
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