import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncaoDocService } from 'src/app/services/funcaodoc.service'; // Import the service
import { PutFuncaoDocModel } from 'src/app/models/funcaodoc/PutFuncaoDocModel';
import { ActivatedRoute, Router } from '@angular/router';
import { RiscosService } from 'src/app/services/riscos.service';
import { PostRiscosModel } from 'src/app/models/sms/PostRiscosModel'; // Importe o modelo

@Component({
  selector: 'app-criar-riscos',
  templateUrl: './criar-riscos.component.html',
  styleUrls: ['./criar-riscos.component.css']
})
export class CriarRiscosComponent implements OnInit {
  formularioRiscos!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  funcao: PutFuncaoDocModel | null = null;
  id: string | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private riscosService: RiscosService,
    private funcaoDocService: FuncaoDocService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioRiscos = this.formBuilder.group({
      grupo: ['', Validators.required],
      tipo: ['', Validators.required],
      fonte_geradora: ['', Validators.required],
      meios_de_propagacao: ['', Validators.required],
      cor: ['', Validators.required],
      meios_de_controles: ['', Validators.required],
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
        this.formularioRiscos.patchValue({
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

  criarRisco() {
    // Verifique se o formulário é válido
    if (this.formularioRiscos.valid) {
      const novoRisco: PostRiscosModel = this.formularioRiscos.value as PostRiscosModel;
      this.riscosService.criarRiscos(novoRisco).subscribe(
        response => {
          console.log('Risco criado com sucesso:', response);
          this.cadastroSucesso = 'Risco criado com sucesso!';
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
      this.markFormGroupTouched(this.formularioRiscos);
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