import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import { CadastrarTurmas } from 'src/app/models/models_diversos/cadastrar-turmas.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-consultar-turmas',
  templateUrl: './consultar-turmas.component.html',
  styleUrls: ['./consultar-turmas.component.css']
})
export class ConsultarTurmasComponent implements AfterViewInit {
  @ViewChild('content') popupview!: ElementRef;

  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  anoAtual: number = (new Date()).getFullYear();
  mesAtual: number = (new Date()).getMonth();
  mensagem: string = '';
  turmaSelecionada: any = null;
  instrutores: any[] = [];
  turma: CadastrarTurmas | null = null;
  turmas: any[] = [];
  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  IncluirInstrutor: FormGroup;
  pagina: number = 1; 
  filtro: any = { matriculas: '' }; 
  itensPorPagina = 10;
  paginaAtual: number = 1; 

  itensPorPagina1 = 10;
  paginaAtual1: number = 1; 

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) {
    this.IncluirInstrutor = new FormGroup({
      idTurmas: new FormControl('', [Validators.required]),
      idinstrutores: new FormArray([])
    });
  }

  consultarTurmasPorMesEAno(mes: number, ano: number): void {
    const url = `http://turmas-jb-env.eba-gupb3gze.us-east-1.elasticbeanstalk.com/api/turmas/consultar-turmas-por-mes-e-ano?mes=${mes + 1}&ano=${ano}`;
  
    this.httpClient.get(url).subscribe({
      next: (data: any) => {
        this.turmas = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  
  selecionarMes(mes: number): void {
    this.mesAtual = mes;
    this.consultarTurmasPorMesEAno(this.mesAtual, this.anoAtual);
  }

  formIncluirInstrutor = new FormGroup({
    idTurmas: new FormControl(''),
    idinstrutor: new FormControl(''),
    instrutores: new FormArray([]),
  });

  ngAfterViewInit(): void {
    $(document).ready(() => {
      this.inicializarDataTable();

      $(this.popupview.nativeElement).on('shown.bs.modal', () => {
        this.inicializarDataTable();
      });
    });
  }

  private inicializarDataTable(): void {
    const table = $('#consulta_empresas').DataTable({
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.6/i18n/Portuguese-Brasil.json'
      }
    });
  }

  ngOnInit(): void {
    this.consultarTurmasPorMesEAno(this.mesAtual, this.anoAtual);

    this.dtoptions = {
      pagingType: 'full_numbers',
      searching: true,
      lengthChange: false,
      language: {
        searchPlaceholder: 'Text Customer'
      }
    };

    this.httpClient.get('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/instrutor').subscribe({
      next: (data) => {
        this.instrutores = data as any[];
      },
      error: (e) => {
        console.log(e);
      }
    });
  }


  onDelete(idTurmas: number, numeroTurma: string): void {
    const confirmDelete = window.confirm(`Deseja realmente excluir a Turma selecionada?\n${numeroTurma}`);
    if (confirmDelete) {
      this.httpClient.delete(`http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/turmas/${idTurmas}`).subscribe({
        next: () => {
          this.ngOnInit();
        },
        error: (e) => {
          console.error(e);
        }
      });
    }
  }

  setTurma(turma: CadastrarTurmas): void {
    this.turma = turma;
    this.formIncluirInstrutor.patchValue(turma);
  }

  exibirMatriculas(turma: any): void {
    this.turmaSelecionada = turma;
    setTimeout(() => {
      this.inicializarDataTable();
    }, 100);
  }

  exibirInstrutores(turmas: any): void {
    this.turmaSelecionada = turmas;
  }

  get form(): any {
    return this.formIncluirInstrutor.controls;
  }

  // Função para acessar o FormArray do formulário
  get formInstrutores(): FormArray {
    return this.formIncluirInstrutor.get('instrutores') as FormArray;
  }

  adicionarIntrutor(): void {
    // Criar um novo registro dentro do FormArray
    this.formInstrutores.push(
      new FormGroup({
        idinstrutor: new FormControl(''),
      })
    );
  }

  removerInstrutor(index: number): void {
    this.formInstrutores.removeAt(index);
  }

  // Função para remover o último dependente
  removerUltimoInstrutor(): void {
    this.formInstrutores.removeAt(this.formInstrutores.length - 1);
  }

  IncluirInstrutorSubmit(): void {
    console.log('Iniciando IncluirInstrutorSubmit');

    const idTurmas = this.formIncluirInstrutor.get('idTurmas')?.value;
    console.log('idTurmas:', idTurmas);

    const instrutoresFormArray = this.formIncluirInstrutor.get('instrutores') as FormArray;
    console.log('instrutoresFormArray:', instrutoresFormArray);

    if (instrutoresFormArray) {
      const instrutores = instrutoresFormArray.value.map((idinstrutor: any) => idinstrutor.idinstrutor);
      console.log('instrutores:', instrutores);

      const requestData = {
        idTurmas: idTurmas,
        idinstrutor: instrutores
      };

      console.log('Enviando requestData:', requestData);

      this.httpClient.put('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/turmas/incluir-instrutor', requestData)
        .subscribe({
          next: () => {
            console.log('Instrutores cadastrados com sucesso!');
            this.mensagem = 'Instrutores cadastrados com sucesso!';
          },
          error: (e) => {
            console.error('Erro durante a requisição:', e.error);
          }
        });
    } else {
      console.error('Formulário de instrutores não está definido corretamente.');
    }
  }

  excluirInstrutor(idTurmas: string, idInstrutor: string): void {
    const confirmDelete = window.confirm(`Deseja realmente excluir o Instrutor selecionado?\n${idInstrutor}`);
    if (confirmDelete) {
      const url = `http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/turmas/${idTurmas}/instrutores/${idInstrutor}`;
      this.httpClient.delete(url).subscribe({
        next: (data: any) => {
          this.ngOnInit();
        },
        error: (e) => {
          console.error(e);
        }
      });
    }
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

    this.consultarTurmasPorMesEAno(this.mesAtual, this.anoAtual);
  }

  getStatusTurma(item: any): string {
    console.log('turmaFechada:', item.turmaFechada);
    return item.turmaFechada ? 'Turma Fechada' : 'Turma Aberta';
  }
  

  getStatusCor(item: any): string {
    console.log(item.turmaFechada); // Verifique se a função está retornando os valores esperados
    return item.turmaFechada ? 'red' : 'green';
  }
  

  getTableRowClass(item: any): string {
    return item.turmaFechada ? 'table-white' : 'table-white';
}


  abrirTurma(idTurmas: string): void {
    this.httpClient
      .post(`http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/turmas/abrir/${idTurmas}`, {})
      .subscribe({
        next: (data: any) => {
          this.mensagem = 'Turma aberta com sucesso!';
        },
        error: (e) => {
          console.log(e.error);
          if (e.error && e.error.message) {
            this.mensagem = e.error.message;
          } else {
            this.mensagem = 'Erro desconhecido ao abrir turma.';
          }
        }
      });
  }
  
  fecharTurma(idTurmas: string): void {
    this.httpClient
      .post(`http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/turmas/fechar/${idTurmas}`, {})
      .subscribe({
        next: (data: any) => {
          this.mensagem = 'Turma fechada com sucesso!';
        },
        error: (e) => {
          console.log(e.error);
          if (e.error && e.error.message) {
            this.mensagem = e.error.message;
          } else {
            this.mensagem = 'Erro desconhecido ao fechar turma.';
          }
        }
      });
  }
  

}
