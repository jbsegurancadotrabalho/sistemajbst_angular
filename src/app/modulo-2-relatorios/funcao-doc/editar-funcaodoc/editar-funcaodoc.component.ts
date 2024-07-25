import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncaoDocService } from 'src/app/services/funcaodoc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PutFuncaoDocModel } from 'src/app/models/funcaodoc/PutFuncaoDocModel';


@Component({
  selector: 'app-editar-funcaodoc',
  templateUrl: './editar-funcaodoc.component.html',
  styleUrls: ['./editar-funcaodoc.component.css']
})


export class EditarFuncaodocComponent implements OnInit {
  id: string | null = null;
  funcao: PutFuncaoDocModel | null = null;
  edicaoSucesso: string | null = null;
  edicaoErro: string | null = null;
  funcaodocForm!: FormGroup;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private funcaoDocService: FuncaoDocService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.funcaodocForm = this.formBuilder.group({
      idFuncaoDoc: [''], 
      nome_da_funcao: ['', Validators.required],
      setor_gho: ['', Validators.required],
      cenario_funcaodoc: ['', Validators.required],
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
        this.funcaodocForm.patchValue({
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

  enviarEdicao(): void {
    if (this.funcaodocForm.valid) {
      this.funcaoDocService.editarFuncaoDoc(this.funcaodocForm.value)
        .subscribe(
          response => {
            console.log('Função editada com sucesso!', response);
            // Definindo a mensagem de sucesso
            this.edicaoSucesso = 'Função editada com sucesso!';
            // Limpando o formulário após o sucesso
            this.funcaodocForm.reset();
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
