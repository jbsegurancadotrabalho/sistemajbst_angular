import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncaoEspecificaService } from 'src/app/services/funcaoespecifica.service';
import { PutFuncaoDocModel } from 'src/app/models/funcaodoc/PutFuncaoDocModel';
import { ActivatedRoute, Router } from '@angular/router';
import { RiscosService } from 'src/app/services/riscos.service';
import { PostRiscosIncluirFuncaoEspecifica } from 'src/app/models/sms/PostRiscosIncluirFuncaoEspecifica.Model'; 
import { GetFuncaoEspecificaUnidadeModel } from 'src/app/models/funcao-especifica/GetFuncaoEspecificaUnidadeModel';


@Component({
  selector: 'app-criar-riscos-funcao-especifica',
  templateUrl: './criar-riscos-funcao-especifica.component.html',
  styleUrls: ['./criar-riscos-funcao-especifica.component.css']
})
export class CriarRiscosFuncaoEspecificaComponent implements OnInit {
  formularioRiscos!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  funcao: GetFuncaoEspecificaUnidadeModel | null = null;
  id: string | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private riscosService: RiscosService,
    private FuncaoEspecificaService: FuncaoEspecificaService,
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
        this.formularioRiscos.patchValue({
          idFuncaoEspecifica: this.funcao.idFuncaoEspecifica,
    
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
      const novoRisco: PostRiscosIncluirFuncaoEspecifica = this.formularioRiscos.value as PostRiscosIncluirFuncaoEspecifica;
      this.riscosService.criarRiscosFuncaoEspecifica(novoRisco).subscribe(
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