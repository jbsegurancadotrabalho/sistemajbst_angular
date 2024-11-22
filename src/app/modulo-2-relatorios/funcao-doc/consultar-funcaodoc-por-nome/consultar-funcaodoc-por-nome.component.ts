import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { FuncaoDocService } from 'src/app/services/funcaodoc.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-consultar-funcaodoc-por-nome',
  templateUrl: './consultar-funcaodoc-por-nome.component.html',
  styleUrls: ['./consultar-funcaodoc-por-nome.component.css']
})
export class ConsultarFuncaodocPorNomeComponent implements OnInit {
  formularioFuncao: FormGroup;
  paginaAtual1: number = 1;
  itensPorPagina: number = 100;
  filtro: any = { nome_empresas: '' };
  funcoes: any[] = [];
  itensPorPaginas = 10;

  constructor(
    private formBuilder: FormBuilder,
    private FuncaoDocService: FuncaoDocService,
    private config: NgSelectConfig,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.formularioFuncao = this.formBuilder.group({
      nome_da_funcao: ['', Validators.required],
    });

    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    // Remova a chamada para consultarFuncaoPorNome aqui.
  }

  // Método chamado ao submeter o formulário
  onSubmit(): void {
    this.consultarFuncaoPorNome();
  }

  consultarFuncaoPorNome(): void {
    console.log('Iniciando busca de função...');

    if (this.formularioFuncao.valid) {
        const funcao = this.formularioFuncao.get('nome_da_funcao')?.value;

        console.log('Valor da funcao:', funcao);

        this.FuncaoDocService.buscarFuncaoPorNome(funcao).subscribe(
            (data) => {
                this.funcoes = Array.isArray(data) ? data : [data]; // Garantir que seja um array
                console.log('Funções encontradas:', this.funcoes); // Log para inspecionar o array
            },
            (error) => {
                console.error('Erro ao buscar funções:', error);
            }
        );
    } else {
        console.log('Formulário inválido');
        this.markFormGroupTouched(this.formularioFuncao);
    }
}



  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}