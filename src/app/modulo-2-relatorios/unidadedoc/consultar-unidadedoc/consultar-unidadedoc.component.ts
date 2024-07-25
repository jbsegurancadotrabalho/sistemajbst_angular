import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UnidadeDocService } from 'src/app/services/unidadedoc.service';
import { GetUnidadeModel } from 'src/app/models/unidadedoc/GetUnidadeModel';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FuncaoDocService } from 'src/app/services/funcaodoc.service';
import 'select2'; 
import { NgSelectConfig } from '@ng-select/ng-select';
import { PostUnidadeIncluirFuncaoDocModel } from 'src/app/models/funcaodoc/PostUnidadeIncluirFuncaoDocModel';

@Component({
  selector: 'app-consultar-unidadedoc',
  templateUrl: './consultar-unidadedoc.component.html',
  styleUrls: ['./consultar-unidadedoc.component.css']
})
export class ConsultarUnidadedocComponent implements OnInit, AfterViewInit {
  @ViewChild('content') popupview!: ElementRef;
  @ViewChild('planoSelect') planoSelect!: ElementRef;

  IncluirFuncao: FormGroup;
  unidades: GetUnidadeModel[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };



  paginaAtualFuncao: number = 1;
  itensPorPaginaFuncao = 10;
  filtroFuncao: any = { nome_empresas: '' };

  unidadeSelecionada: any = null;
  funcoes: any[] = [];
  unidade: GetUnidadeModel | null = null;
  idsFuncaodoc: any[] = [];
  funcao1:  PostUnidadeIncluirFuncaoDocModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  errorMessage: string | null = null;
  sucessoMessage: string | null = null;
  idUnidade: string = ''; // Defina a variável para armazenar o ID da unidade
  idFuncao: string = '';  // Defina a variável para armazenar o ID da função

  constructor(
    private unidadeDocService: UnidadeDocService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private funcaoDocService: FuncaoDocService,
    private config: NgSelectConfig
  ) {
    this.IncluirFuncao = new FormGroup({
      idunidadeDoc: new FormControl('', [Validators.required]),
      idsFuncaodoc: new FormArray([])
    });
    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  formIncluirFuncao = new FormGroup({
    idunidadeDoc: new FormControl(''),
    idFuncaoDoc: new FormControl(''),
    idsFuncaodoc: new FormArray([])
  });

  setFuncao(unidade: GetUnidadeModel): void {
    this.unidade = unidade;
    this.formIncluirFuncao.get('idunidadeDoc')?.setValue(unidade.idunidadeDoc); // Defina o valor de idunidadeDoc no formulário

  }
  
  exibirFuncoes(unidade: any) {
    this.unidadeSelecionada = unidade;
  }


  ngAfterViewInit(): void {
    if (this.planoSelect) {
      const selectElement = $(this.planoSelect.nativeElement) as any;
  
      selectElement.select2({
        theme: 'bootstrap-5',
      }).on('change', () => {
        const selectedValue = String(selectElement.val());
        const formArray = this.formIncluirFuncao.get('idsFuncaodoc') as FormArray;
        const formGroup = formArray.at(0) as FormGroup; // Se você estiver usando apenas um elemento
  
        if (formGroup) {
          formGroup.get('idFuncaoDoc')?.setValue(selectedValue);
          formGroup.get('idFuncaoDoc')?.updateValueAndValidity();
        }
      });
  
      const lastOptionValue = this.funcoes.length > 0 ? this.funcoes[this.funcoes.length - 1].id : '';
  
      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      selectElement.val(lastOptionValue).trigger('change');
    }
  }
  
  get form(): any {
    return this.formIncluirFuncao.controls;
  }

  get formFuncao(): FormArray {
    return this.formIncluirFuncao.get('idsFuncaodoc') as FormArray;
  }

  adicionarFuncao(): void {
    this.formFuncao.push(
      new FormGroup({
        idFuncaoDoc: new FormControl('', [Validators.required]),
      })
    );
  }
  
  removerFuncao(index: number): void {
    this.formFuncao.removeAt(index);
  }

  removerUltimaFuncao(): void {
    this.formFuncao.removeAt(this.formFuncao.length - 1);
  }

  ngOnInit(): void {
    this.unidadeDocService.getTodasUnidades()
    .subscribe(
      (data: GetUnidadeModel[]) => {
        this.unidades = data;
      },
      (error) => {
        console.error('Erro ao buscar todas as unidades:', error);
      }
    ); 

    this.httpClient.get('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/funcoesdoc').subscribe({
      next: (data: any) => {
        this.funcoes = Object.values(data) as any[];
      },
      error: (e) => {
        console.log(e);
      }
    }); 

    this.route.params.subscribe(params => {
      this.idUnidade = params['idUnidade'];
      this.idFuncao = params['idFuncao'];

      if (this.idUnidade && this.idFuncao) {
        this.excluirFuncao(this.idUnidade, this.idFuncao);
      } else {
        this.errorMessage = 'IDs de unidade ou função não fornecidos.';
      }
    });
  }


  exibirSetor(setor: any): void {
    this.unidadeSelecionada = setor;
  }

  deleteUnidade(id: string) {
    this.unidadeDocService.deleteUnidadeDoc(id)
      .subscribe(
        () => {
          console.log('Unidade excluída com sucesso!');
        },
        error => {
          console.error('Erro ao excluir unidade:', error);
        }
      );
  }

  pageChange(event: any) {
    console.log('Página mudou para:', event);
  }

  confirmarExclusao(id: string, nome: string) {
    if (window.confirm(`Deseja realmente excluir a Unidade: ${nome}?`)) {
      this.deleteUnidade(id);
    }
  }
  incluirFuncaoDoc(): void {
    console.log('Iniciando IncluirFuncaoDoc');
    
    const idunidadeDoc = this.formIncluirFuncao.get('idunidadeDoc')?.value;
    console.log('idunidadeDoc:', idunidadeDoc);
    
    const funcoesFormArray = this.formIncluirFuncao.get('idsFuncaodoc') as FormArray;
    console.log('funcoesFormArray:', funcoesFormArray);
    
    const idsFuncaodoc: any[] = [];
    
    if (funcoesFormArray) {
      funcoesFormArray.controls.forEach(control => {
        const idFuncaoDoc = control.value.idFuncaoDoc;
        idsFuncaodoc.push(idFuncaoDoc);
      });
  
      console.log('idsFuncaodoc:', idsFuncaodoc);
  
      const requestData = {
        idunidadeDoc: idunidadeDoc,
        idsFuncaodoc: idsFuncaodoc
      };
  
      console.log('Enviando requestData:', requestData);
  
      this.httpClient.post('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/unidades/incluir-funcaodoc', requestData)
        .subscribe({
          next: () => {
            console.log('Funções cadastradas com sucesso!');
            this.cadastroSucesso = 'Funções cadastradas com sucesso!';

          },
          error: (e) => {
            console.error('Erro durante a requisição:', e.error);
            this.cadastroErro = 'Erro ao cadastrar Função!';

          }
        });
    } else {
      console.error('Formulário de Funções não está definido corretamente.');
    }
  }
  
  

  excluirFuncao(idUnidade: string, idFuncao: string): void {
    this.unidadeDocService.excluirFuncao(idUnidade, idFuncao).subscribe({
      next: (response) => {
        this.unidade = response;
        this.sucessoMessage = 'Função excluída com sucesso: ';

        console.log('Função excluída com sucesso:', response);
      },
      error: (error) => {
        this.errorMessage = 'Erro ao excluir função: ' + error.message;
        console.error('Erro:', error);
      }
    });
  }


}
