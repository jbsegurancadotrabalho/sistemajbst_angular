import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvaliacaoFuncao } from 'src/app/services/avaliacoes.funcoes.service'; 
import { PostAvaliaçõesOcupacionaisFuncoesModel } from 'src/app/models/sms/PostAvaliaçõesOcupacionaisFuncoesModel'; 
import { FuncaoDocService } from 'src/app/services/funcaodoc.service'; // Import the service
import { ActivatedRoute, Router } from '@angular/router';
import { PutFuncaoDocModel } from 'src/app/models/funcaodoc/PutFuncaoDocModel';


@Component({
  selector: 'app-criar-avaliacao-funcaodoc',
  templateUrl: './criar-avaliacao-funcaodoc.component.html',
  styleUrls: ['./criar-avaliacao-funcaodoc.component.css']
})
export class CriarAvaliacaoFuncaodocComponent  implements OnInit {
  formularioAvaliacao!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  avaliacao: PostAvaliaçõesOcupacionaisFuncoesModel | null = null;
  id: string | null = null;
  funcao: PutFuncaoDocModel | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private AvaliacaoFuncao: AvaliacaoFuncao,
    private funcaoDocService: FuncaoDocService,
    private route: ActivatedRoute, 

  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioAvaliacao = this.formBuilder.group({
      nome_avaliacoes_funcao: ['', Validators.required],
      tipo_avaliacoes_funcao: ['', Validators.required],
      descricao_avaliacoes_funcao: ['', Validators.required],
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
        this.formularioAvaliacao.patchValue({
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

  criarAvaliacao() {
    console.log('Creating danger with form data:', this.formularioAvaliacao.value);
    // Check if the form is valid
    if (this.formularioAvaliacao.valid) {
      const novoRisco: PostAvaliaçõesOcupacionaisFuncoesModel = this.formularioAvaliacao.value as PostAvaliaçõesOcupacionaisFuncoesModel;
      console.log('Form is valid, submitting:', novoRisco);
      this.AvaliacaoFuncao.criarAvaliações(novoRisco).subscribe(
        response => {
          console.log('Danger created successfully:', response);
          this.cadastroSucesso = 'Avaliação Ocupacional criada com sucesso!';
          // Additional logic if necessary, such as redirecting to another page
        },
        error => {
          console.error('Error creating danger:', error);
          this.cadastroErro = 'Erro ao criar Avaliação Ocupacional. Por favor, tente novamente.';
          // Additional logic to handle the error, such as displaying an error message to the user
        }
      );
    } else {
      console.warn('Form is invalid, marking all fields as touched');
      // If the form is not valid, mark the fields as touched to display the errors
      this.markFormGroupTouched(this.formularioAvaliacao);
    }
  }

  // Function to mark all fields in the form as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
    console.log('All form fields marked as touched:', formGroup);
  }
}

