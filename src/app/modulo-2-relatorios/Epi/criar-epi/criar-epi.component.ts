import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EpiService } from 'src/app/services/epi.service';
import { PostEpiModel } from 'src/app/models/sms/PostEpiModel'; 
import { FuncaoDocService } from 'src/app/services/funcaodoc.service'; // Import the service
import { PutFuncaoDocModel } from 'src/app/models/funcaodoc/PutFuncaoDocModel';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-criar-epi',
  templateUrl: './criar-epi.component.html',
  styleUrls: ['./criar-epi.component.css']
})
export class CriarEpiComponent implements OnInit {
  formularioEpi!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  funcao: PutFuncaoDocModel | null = null;
  id: string | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private epiService: EpiService,
    private funcaoDocService: FuncaoDocService,
    private route: ActivatedRoute, 
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioEpi= this.formBuilder.group({
      nome_epi: ['', Validators.required],
      descricao_epi: ['', Validators.required],
       ca: ['', Validators.required],
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
        this.formularioEpi.patchValue({
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

  criarEpi() {
    // Verifique se o formulário é válido
    if (this.formularioEpi.valid) {
      const novoRisco: PostEpiModel = this.formularioEpi.value as PostEpiModel;
      this.epiService.criarEpi(novoRisco).subscribe(
        response => {
          console.log('EPI criado com sucesso:', response);
          this.cadastroSucesso = 'Epi criado com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar EPI:', error);
          this.cadastroErro = 'Erro ao criar EPI. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this.formularioEpi);
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