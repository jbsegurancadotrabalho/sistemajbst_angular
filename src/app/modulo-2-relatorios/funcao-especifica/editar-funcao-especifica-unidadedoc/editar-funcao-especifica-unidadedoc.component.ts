import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncaoEspecificaService } from 'src/app/services/funcaoespecifica.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PutFuncaoEspecificaUnidadeModel } from 'src/app/models/funcao-especifica/PutFuncaoEspecificaUnidadeModel'; 
import { GetFuncaoEspecificaUnidadeModel } from 'src/app/models/funcao-especifica/GetFuncaoEspecificaUnidadeModel';


@Component({
  selector: 'app-editar-funcao-especifica-unidadedoc',
  templateUrl: './editar-funcao-especifica-unidadedoc.component.html',
  styleUrls: ['./editar-funcao-especifica-unidadedoc.component.css']
})
export class EditarFuncaoEspecificaUnidadedocComponent implements OnInit {
  id: string | null = null;
  funcao: PutFuncaoEspecificaUnidadeModel | null = null;
  edicaoSucesso: string | null = null;
  edicaoErro: string | null = null;
  funcaodocForm!: FormGroup;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private  FuncaoEspecificaService:  FuncaoEspecificaService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.funcaodocForm = this.formBuilder.group({
      idFuncaoEspecifica: [''], 
      setor_gho: ['', Validators.required],
      nome_da_funcao: ['', Validators.required],
      cenario_funcaodoc: ['', Validators.required],
      cbo: ['', Validators.required],
      descricao: ['', Validators.required],
      gro: ['', Validators.required],
       gp: ['', Validators.required],
    });

    if (this.id) {
      this.buscarFuncaoPorId();
    }
  }

  buscarFuncaoPorId(): void {
    this.FuncaoEspecificaService.consultarFuncaoPorId(this.id!).subscribe(
      (data: GetFuncaoEspecificaUnidadeModel ) => {
        this.funcao = data;
        // Define os valores dos campos do formulário
        this.funcaodocForm.patchValue({
          idFuncaoEspecifica: this.funcao.idFuncaoEspecifica,
          setor_gho: this.funcao.setor_gho,
          nome_da_funcao: this.funcao.nome_da_funcao,
         cenario_funcaodoc: this.funcao.cenario_funcaodoc,
          cbo: this.funcao.cbo,
          descricao: this.funcao.descricao,
          gro: this.funcao.gro,
         gp: this.funcao.gp,
        });
      },
      (error: any) => {
        console.error('Erro ao buscar função:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this.funcaodocForm.valid) {
      this.FuncaoEspecificaService.editarFuncao(this.id!, this.funcaodocForm.value)
        .subscribe(
          response => {
            console.log('Função editada com sucesso!', response);
            // Definindo a mensagem de sucesso
            this.edicaoSucesso = 'Função editada com sucesso!';
            // Limpando o formulário após o sucesso
          },
          error => {
            console.error('Erro ao editar função:', error);
            // Definindo a mensagem de erro
            this.edicaoErro = 'Erro ao editar função. Por favor, tente novamente.';
          }
        );
    }
  }
  
}  
