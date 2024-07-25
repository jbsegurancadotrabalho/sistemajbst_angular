import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CadastrarTurmas } from 'src/app/models/models_diversos/cadastrar-turmas.model';
import { ConsultarMatriculas } from 'src/app/models/models_diversos/consultar-matriculas.model';
import { HttpErrorResponse } from '@angular/common/http';
import { FilterPipe } from 'ngx-filter-pipe';
import * as $ from 'jquery';
import 'select2'; // Adicione esta importação
import { NgSelectConfig } from '@ng-select/ng-select';
import { EditarMatriculasPJ } from 'src/app/models/matriculas/editar-matriculas-pj.model';
import { forkJoin } from 'rxjs';
import { EditarMatriculasPF } from 'src/app/models/matriculas/editar-matriculas-pf.model';
import { EditarMatriculasPedidos } from 'src/app/models/matriculas/editar-matriculas-pedidos.model';

@Component({
  selector: 'app-consultar-matriculas-faturamento-pj',
  templateUrl: './consultar-matriculas-faturamento-pj.component.html',
  styleUrls: ['./consultar-matriculas-faturamento-pj.component.css']
})
export class ConsultarMatriculasFaturamentoPjComponent implements OnInit {

  @ViewChild('content') popupview!: ElementRef;
  @ViewChild('planoSelect') planoSelect!: ElementRef;

  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  anoAtual: number = 2023;
  mesAtual: number = 0; // Janeiro é o índice 0
  pedidos: any[] = [];
  faturamentos: any[] = [];
  faturamentopf: any[] = [];
  funcionarios: any[] = [];
  pessoafisica: any[] = [];
  mensagem: string = '';
  turmas: CadastrarTurmas | null = null;
  matriculaSelecionada: any = null;
  matricula: ConsultarMatriculas | null = null;
  matriculas: any[] = [];
  pagina: number = 1; //contador da paginação da consulta
  filtro: any = { nome_contato: '' }; //filtro de pesquisa na consulta
  itensPorPagina = 10;
  paginaAtual: number = 1;
  turma: any[] = [];
  matriculaspj: EditarMatriculasPJ | null = null;
  matriculaspf: EditarMatriculasPF | null = null;
  matriculaspedidos: EditarMatriculasPedidos| null = null;


  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private config: NgSelectConfig
  ) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  

  }

 
  setMatriculasPJ(matriculas: EditarMatriculasPJ): void {
    this.matriculaspj = matriculas;
    this.formEdicaoMatriculasPj.patchValue(matriculas); 
               }

    setMatriculasPF(matriculas: EditarMatriculasPF): void {
    this.matriculaspf = matriculas;
    this.formEdicaoMatriculasPf.patchValue(matriculas); 
                           }

    setMatriculasPedidos(matriculas: EditarMatriculasPedidos): void {
    this.matriculaspedidos = matriculas;
    this.formEdicaoMatriculasPedidos.patchValue(matriculas); 
          }

  ngAfterViewInit(): void {

    if (this.planoSelect) {
      const selectElement = $(this.planoSelect.nativeElement) as any;
  
      selectElement.select2({
        theme: 'bootstrap-5',
      }).on('change', () => {
        const selectedValue = String(selectElement.val());
        this.formEdicaoMatriculasPf.get('idpessoafisica')?.setValue(selectedValue);
        this.formEdicaoMatriculasPf.get('idpessoafisica')?.updateValueAndValidity();
      });
  
      const lastOptionValue = this.pessoafisica.length > 0 ? this.pessoafisica[this.pessoafisica.length - 1].id : '';
  
      $(selectElement).next().find('.select2-selection').addClass('form-control');
      $(selectElement).next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      $(selectElement).val(lastOptionValue).trigger('change');
    }

    if (this.planoSelect) {
      const selectElement = $(this.planoSelect.nativeElement) as any;
  
      selectElement.select2({
        theme: 'bootstrap-5',
      }).on('change', () => {
        const selectedValue = String(selectElement.val());
        this.formEdicaoMatriculasPj.get('idFuncionario')?.setValue(selectedValue);
        this.formEdicaoMatriculasPj.get('idFuncionario')?.updateValueAndValidity();
      });
  
      const lastOptionValue = this.funcionarios.length > 0 ? this.funcionarios[this.funcionarios.length - 1].id : '';
  
      $(selectElement).next().find('.select2-selection').addClass('form-control');
      $(selectElement).next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      $(selectElement).val(lastOptionValue).trigger('change');
    }

    if (this.planoSelect) {
      const selectElement = $(this.planoSelect.nativeElement) as any;
  
      selectElement.select2({
        theme: 'bootstrap-5',
      }).on('change', () => {
        const selectedValue = String(selectElement.val());
        this.formEdicaoMatriculasPedidos.get('idMatricula')?.setValue(selectedValue);
        this.formEdicaoMatriculasPedidos.get('idMatricula')?.updateValueAndValidity();
      });
  
      const lastOptionValue = this.pedidos.length > 0 ? this.pedidos[this.pedidos.length - 1].idPedidos : '';
  
      $(selectElement).next().find('.select2-selection').addClass('form-control');
      $(selectElement).next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      $(selectElement).val(lastOptionValue).trigger('change');
    }
  }

  ngOnInit(): void {


    this.consultarMatriculas();
    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/funcionarios/api/funcionarios/todos').subscribe({
      next: (data: any) => {
        this.funcionarios = Object.values(data) as any[];
      },
      error: (e) => {
        console.log(e);
      }
    });

    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/faturamento').subscribe({
      next: (data: any) => {
        this.faturamentos = Object.values(data) as any[];
      },
      error: (e) => {
        console.log(e);
      }
    });

    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/funcionarios/api/funcionarios/todos').subscribe({
      next: (data: any) => {
        this.funcionarios = Object.values(data) as any[];
      },
      error: (e) => {
        console.log(e);
      }
    });

    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/faturamentopf').subscribe({
      next: (data: any) => {
        this.faturamentopf = Object.values(data) as any[];
      },
      error: (e) => {
        console.log(e);
      }
    });

    this.httpClient.get('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/pessoa-fisica').subscribe({
      next: (data: any) => {
        this.pessoafisica = Object.values(data) as any[];
      },
      error: (e) => {
        console.log(e);
      }
    });

    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/pedidos-de-compras').subscribe({
      next: (data: any) => {
        this.pedidos = Object.values(data) as any[];
      },
      error: (e) => {
        console.log(e);
      }
    });
    
    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/turmas').subscribe({
      next: (data: any) => {
        this.turma = Object.values(data) as any[];
      },
      error: (e) => {
        console.log(e);
      }
    });
    
  }



  selecionarMes(mes: number): void {
    this.mesAtual = mes;
    this.consultarMatriculas();
  }



  exibirMatriculas(matricula: any) {
    this.matriculaSelecionada = matricula;
  }

  setMatriculas(matricula: ConsultarMatriculas): void {
    this.matricula = matricula;
    this.formEdicaoMatriculasPj.patchValue(matricula);
  }

  formEdicaoMatriculasPj = new FormGroup({
    idMatricula: new FormControl('', [Validators.required]),
    idTurmas: new FormControl('', [Validators.required]),
    idFuncionario: new FormControl('', [Validators.required]),
    idfaturamento: new FormControl('', [Validators.required]),
    venda: new FormControl('', [Validators.required]),
    valor: new FormControl(null as string | null, [Validators.required]),
    status: new FormControl('', [Validators.required]),
    tipo_de_pagamento: new FormControl('', [Validators.required]),
    observacoes: new FormControl('', [Validators.required]),

  });


  formEdicaoMatriculasPedidos = new FormGroup({
    idMatricula: new FormControl('', [Validators.required]),
    idTurmas: new FormControl('', [Validators.required]),
    venda: new FormControl('', [Validators.required]),
    valor: new FormControl(null as string | null, [Validators.required]),
    status: new FormControl('', [Validators.required]),
    tipo_de_pagamento: new FormControl('', [Validators.required]),
    observacoes: new FormControl('', [Validators.required]),

  });


  formEdicaoMatriculasPf = new FormGroup({
    idMatricula: new FormControl('', [Validators.required]),
    idTurmas: new FormControl('', [Validators.required]),
    idpessoafisica: new FormControl('', [Validators.required]),
    idfaturamentopf: new FormControl('', [Validators.required]),
    venda: new FormControl('', [Validators.required]),
    valor: new FormControl(null as string | null, [Validators.required]),
    status: new FormControl('', [Validators.required]),
    tipo_de_pagamento: new FormControl('', [Validators.required]),
    observacoes: new FormControl('', [Validators.required]),

  });


  get form(): any {
    return this.formEdicaoMatriculasPj.controls;
    return this.formEdicaoMatriculasPedidos.controls;
    return this.formEdicaoMatriculasPf.controls;


  }

  onSubmitformEdicaoMatriculasPj(): void {
    //enviando uma requisição PUT para a api
  //enviando uma requisição PUT para a api
  this.httpClient.put('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/matriculas/editar-matriculas-faturamento-pj',  this.formEdicaoMatriculasPj.value)
  .subscribe({
    next: (data: any) => {
      this.mensagem = `Matricula Atualizada com sucesso!`;

    },
     error: (e) => {
          
      console.log(e.error);
      if (e.error && e.error.message) {
        // Exiba a mensagem de erro da API
        this.mensagem = e.error.message;
      } else {
        // Se não houver uma mensagem de erro específica da API, exiba uma mensagem genérica
        this.mensagem = 'Erro desconhecido ao realizar a matrícula.';
      }
    }
  });  }


  onSubmitformEdicaoMatriculasPf(): void {
    //enviando uma requisição PUT para a api
    this.httpClient.put('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/matriculas/editar-matriculas-faturamento-pf',  this.formEdicaoMatriculasPf.value)
      .subscribe({
        next: (data: any) => {
          this.mensagem = `Matricula Atualizada com sucesso!`;

        },
        error: (e) => {
          
          console.log(e.error);
          if (e.error && e.error.message) {
            // Exiba a mensagem de erro da API
            this.mensagem = e.error.message;
          } else {
            // Se não houver uma mensagem de erro específica da API, exiba uma mensagem genérica
            this.mensagem = 'Erro desconhecido ao realizar a matrícula.';
          }
        }
      });
  }

  onSubmitformEdicaoMatriculasPedidos(): void {
    // Extraia os controles do formulário para facilitar o acesso
    const { idMatricula, ...formData } = this.formEdicaoMatriculasPedidos.value;
  
    // Construa a URL com os IDs de pedidos e matrícula no caminho
    const url = `https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/matriculas/${idMatricula}`;
  
    // Adicione outros dados ao corpo da requisição
    const requestBody = {
      ...formData,
      idMatricula: idMatricula,
    };
  
    // Enviando uma requisição PUT para a API
    this.httpClient.put(url, requestBody)
      .subscribe({
        next: (data: any) => {
          this.mensagem = `Edição de Matrícula Atualizada com sucesso!`;
        },
        error: (error) => {
          console.error('Erro na requisição:', error);
  
          if (error instanceof HttpErrorResponse) {
            console.error('Status:', error.status);
            console.error('Mensagem de erro:', error.error);
          }
  
          // Adicione lógica para lidar com o erro
          // Por exemplo, você pode exibir uma mensagem de erro mais detalhada para o usuário
          this.mensagem = 'Erro ao editar matrícula. Por favor, verifique os dados e tente novamente.';
        }
      });
  }

  consultarMatriculas(): void {
    const url =  'http://matriculaspj-env.eba-xxh4wnjp.us-east-1.elasticbeanstalk.com/api/matriculas/consultar-matriculas';

    this.httpClient.get(url).subscribe({
        next: (data: any) => {
            this.matriculas = data;
        },
        error: (e) => {
            console.log(e);
        }
    });
}


  get periodoAtual(): string {
    return `${this.meses[this.mesAtual]} de ${this.anoAtual}`;
  }

  mudarMes(delta: number): void {
    this.mesAtual += delta;

    if (this.mesAtual > 11) {
      this.mesAtual = 0;
      this.anoAtual++;
    } else if (this.mesAtual < 0) {
      this.mesAtual = 11;
      this.anoAtual--;
    }

    this.consultarMatriculas();
  }
  
  
}