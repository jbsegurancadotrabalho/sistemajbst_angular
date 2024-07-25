  import { Component, OnInit,   AfterViewInit, ViewChild, ElementRef} from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { ActivatedRoute } from '@angular/router';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  import {ConsultarEmpresas} from 'src/app/models/models_diversos/consultar-empresas.model';
  import {ConsultarContatos} from 'src/app/models/models_diversos/consultar-contatos.model';
  import { FilterPipe } from 'ngx-filter-pipe';
  import {CadastrarFuncionario} from 'src/app/models/models_diversos/cadastrar-funcionario.model';
  import {EditarFuncionario} from 'src/app/models/models_diversos/editar-funcionario.model';
  import {EditarFuncao} from 'src/app/models/models_diversos/editar-funcao.model';
  import { NgxPaginationModule } from 'ngx-pagination';
  import { Subject } from 'rxjs';
  import * as $ from 'jquery';
  import 'select2'; // Adicione esta importação
  import { NgSelectConfig } from '@ng-select/ng-select';

  @Component({
    selector: 'app-consultar-empresa',
    templateUrl: './consultar-empresa.component.html',
    styleUrls: ['./consultar-empresa.component.css']
  })
  
  export class ConsultarEmpresaComponent implements OnInit , AfterViewInit  {
    @ViewChild('planoSelect') planoSelect!: ElementRef;


  
    idFuncionario: any; // Declare idFuncionario here
    editarfuncao: EditarFuncao | null = null;
    editarfuncionario: EditarFuncionario | null = null;
    funcionario: CadastrarFuncionario | null = null;
    mensagem: string = '';
    empresa: ConsultarEmpresas | null = null;
    contato: ConsultarContatos | null = null;
    empresaSelecionada: any = null;
    funcionarioSelecionado: any = null;
    contatos: any [] = []
    funcionarios: any [] = []
    funcoes: any [] = []
    empresas: any [] = []
    pagina: number = 1; //contador da paginação da consulta
    filtro: any = { nomefantasia: '' }; //filtro de pesquisa na consulta
    itensPorPagina = 10;
    paginaAtual: number = 1;
    turmas: any[] = [];
    Invoiceheader: any;
    invoiceno: any;
    dtoptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject<any>();
    incluirassinatura: File | null = null;
    arquivoMsgErro: string = '';
  mensagemErro: string = '';
  paginaAtual1: number = 1;




    ngAfterViewInit(): void {
      $(document).ready(() => {
        const table = $('#myTable').DataTable({
          language: {
            url: 'Portuguese.json'
          }
        });
  
        if (this.planoSelect) {
          const selectElement = $(this.planoSelect.nativeElement) as any;
  
          selectElement.select2({
            theme: 'bootstrap-5',
          }).on('change', () => {
            const selectedValue = String(selectElement.val());
            this.formEditarFuncionario.get('idFuncao')?.setValue(selectedValue);
            this.formEditarFuncionario.get('idFuncao')?.updateValueAndValidity();
          });
  
          const lastOptionValue = this.funcoes.length > 0 ? this.funcoes[this.funcoes.length - 1].idFuncao : '';
  
          selectElement.next().find('.select2-selection').addClass('form-control');
          selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
          selectElement.val(lastOptionValue).trigger('change');
        }
      });

    }

    setEmpresa(empresa: ConsultarEmpresas): void {
      this.empresa = empresa;
      this.formCadastrarContato.patchValue(empresa);
      this.formEditarFuncionario.patchValue(empresa);
      this.formContato.patchValue(empresa);
    }

    pageChange(event: any): void {
      this.pagina = event;
      this.itensPorPagina = event;
    }

    setContato(contato: ConsultarContatos): void {
      this.contato = contato;
      this.formContato.patchValue(contato);
      this.formCadastrarContato.patchValue(contato);
    }

    setEditarFuncionario(editarfuncionario: EditarFuncionario): void {
      this.editarfuncionario = editarfuncionario;
      this.formEditarFuncionario.patchValue(this.empresaSelecionada);

    }

    setEditarFuncao(editarfuncao: EditarFuncao): void {
      this.editarfuncao = editarfuncao;
      this.editarFuncao.patchValue(editarfuncao);

    }

    exibirContatos(empresa: any) {
      this.empresaSelecionada = empresa;
    }

    exibirFuncoes(funcao: any) {
      this.funcionarioSelecionado = funcao;
    }
     
    exibirFuncionarios(empresa: any) {
      this.empresaSelecionada = empresa;
    }
  
    setFuncionario(funcionario: CadastrarFuncionario): void {
      this.funcionario= funcionario;
      this.formEditarFuncionario.patchValue(funcionario); 
                 }
    

      constructor(
        private httpClient: HttpClient,
        private activatedRoute: ActivatedRoute,
        private config: NgSelectConfig

      ) {

        this.config.notFoundText = 'Custom not found';
        this.config.appendTo = 'body';
        this.config.bindValue = 'value';
      }



      ngOnInit(): void {
        var idEmpresa = this.activatedRoute.snapshot.paramMap.get('id') as string;
        this.httpClient.get('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/empresas')
        .subscribe({ //capturando o retorno da API
          next: (data) => { //recebe o retorno de sucesso da API
            this.dtTrigger.next(null);
            this.empresas = data as any[];
            this.formContato.patchValue(data);
          },
          error: (e) => { //recebe o retorno de erro da API
            console.log(e);
          }
        });

        this.dtoptions = {
          pagingType: 'full_numbers',
          searching: true,
          lengthChange: false,
          language: {
            searchPlaceholder: 'Text Customer'
          }
        };

        this.httpClient.get('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/contato')
          .subscribe({
            next: (data: any) => {
              //preencher o formulário com os dados do produto obtido
              this.contatos = data as any[];
              this.formContato.patchValue(data);
            },
            error: (e) => {
              console.log(e);
            }
          }) 
          
          
          this.httpClient.get('http://empresa-env.eba-t4xm3x3c.us-east-2.elasticbeanstalk.com/api/funcionario')
          .subscribe({
            next: (data: any) => {
              //preencher o formulário com os dados do produto obtido
              this.funcionarios = data as any[];
            },
            error: (e) => {
              console.log(e);
            }
          }) 

          this.httpClient.get('http://empresa-env.eba-t4xm3x3c.us-east-2.elasticbeanstalk.com/api/funcao')
          .subscribe({
            next: (data: any) => {
              //preencher o formulário com os dados do produto obtido
              this.funcoes = data as any[];
            },
            error: (e) => {
              console.log(e);
            }
          }) 
      }
  


      
      formCadastrarContato = new FormGroup({
        idEmpresa: new FormControl('', [Validators.required]),
        contato: new FormControl('', [Validators.required]),
        telefone_1: new FormControl('', [Validators.required]),
        telefone_2: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
          });



      formContato = new FormGroup({
        idEmpresa: new FormControl('', [Validators.required]),
        idContato: new FormControl('', [Validators.required]),
        contato: new FormControl('', [Validators.required]),
        telefone_1: new FormControl('', [Validators.required]),
        telefone_2: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),

          });

          formEditarFuncionario = new FormGroup({
            idFuncionario: new FormControl('',),
            idEmpresa: new FormControl('',),
            idFuncao: new FormControl('',),
            nome: new FormControl('', [Validators.required]),
            cpf: new FormControl('', [Validators.required]),
            rg: new FormControl('', [Validators.required]),
            status: new FormControl('', [Validators.required]),
              });

              formFuncao = new FormGroup({
                funcao: new FormControl('', [Validators.required]),
                cbo: new FormControl('', [Validators.required]),
                descricao: new FormControl('', [Validators.required]),
              
                  });
              
                  editarFuncao = new FormGroup({
                    idFuncao: new FormControl('', [Validators.required]),
                    funcao: new FormControl('', [Validators.required]),
                    cbo: new FormControl('', [Validators.required]),
                    descricao: new FormControl('', [Validators.required]),
                  
                      }); 
    
          get form(): any {
            return this.formContato.controls;
            return this.formEditarFuncionario.controls;
            return this.formFuncao.controls;
            return this.editarFuncao.controls;
            return this.formIncluirAssinatura.controls;


          }

          editarFuncaoSubmit(): void {
            //enviando uma requisição PUT para a api
            this.httpClient.put('http://empresa-env.eba-t4xm3x3c.us-east-2.elasticbeanstalk.com/api/funcao', this.editarFuncao.value)
              .subscribe({
                next: (data: any) => {
                  this.mensagem = `Contato Atualizado com sucesso!`;
                  this.formContato.reset();       
                },
                error: (e) => {
                }
              });
          }
      


    onSubmit(): void {
      //enviando uma requisição PUT para a api
      this.httpClient.put('http://empresa-env.eba-t4xm3x3c.us-east-2.elasticbeanstalk.com/api/contato', this.formContato.value)
        .subscribe({
          next: (data: any) => {
            this.mensagem = `Contato Atualizado com sucesso!`;
            this.formContato.reset();       
          },
          error: (e) => {
          }
        });
    }

    CadastroSubmit(): void {
      //enviando uma requisição PUT para a api
      this.httpClient.post('http://empresa-env.eba-t4xm3x3c.us-east-2.elasticbeanstalk.com/api/contato', this.formCadastrarContato.value)
        .subscribe({
          next: (data: any) => {
            this.mensagem = `Contato cadastrado com sucesso!`;
              this.formCadastrarContato.reset();       
                             },
          error: (e) => {
          }
        });      
    }

    
    EditarFuncionarioSubmit(): void {
  //enviando uma requisição PUT para a api
  this.httpClient.put('http://empresa-env.eba-t4xm3x3c.us-east-2.elasticbeanstalk.com/api/funcionario', this.formEditarFuncionario.value)
  .subscribe({
    next: (data: any) => {
      this.mensagem = `Funcionario Atualizado com sucesso!`;
      this.formEditarFuncionario.reset();       
               },
    error: (e) => {
        }
      });    
    }

    onDelete(idContato: number, contato: string): void {
      if(window.confirm('Deseja realmente excluir o Contato selecionado?\n' + contato)) {
        //enviando uma reqquisição para o serviço de exclusão da API
        this.httpClient.delete('http://empresa-env.eba-t4xm3x3c.us-east-2.elasticbeanstalk.com/api/contato/' + idContato)
          .subscribe({
            next: (data: any) => {
              this.ngOnInit();
            },
            error: (e) => {
            }
          })
      }
    }

    EmpresaDelete(idEmpresa: number): void {
      if(window.confirm('Deseja realmente excluir o Contato selecionado?\n' )) {
        //enviando uma reqquisição para o serviço de exclusão da API
        this.httpClient.delete('http://empresa-env.eba-t4xm3x3c.us-east-2.elasticbeanstalk.com/api/empresa/' + idEmpresa)
          .subscribe({
            next: (data: any) => {
              this.ngOnInit();
            },
            error: (e) => {
            }
          })
      }
    }

    FuncionarioDelete(idFuncionario: number): void {
      if(window.confirm('Deseja realmente excluir o Funcionario selecionado?\n' )) {
        //enviando uma reqquisição para o serviço de exclusão da API
        this.httpClient.delete('http://empresa-env.eba-t4xm3x3c.us-east-2.elasticbeanstalk.com/api/funcionario/' + idFuncionario)
          .subscribe({
            next: (data: any) => {
              this.ngOnInit();
            },
            error: (e) => {
            }
          })
      }
    }

    funcaoDelete(idFuncao: number): void {
      if(window.confirm('Deseja realmente excluir a Função selecionada?\n' )) {
        //enviando uma reqquisição para o serviço de exclusão da API
        this.httpClient.delete('http://empresa-env.eba-t4xm3x3c.us-east-2.elasticbeanstalk.com/api/funcao/' + idFuncao)
          .subscribe({
            next: (data: any) => {
              this.ngOnInit();
            },
            error: (e) => {
            }
          })
      }
    }

    CadastrarFuncaoSubmit(): void {
      this.httpClient
        .post('http://empresa-env.eba-t4xm3x3c.us-east-2.elasticbeanstalk.com/api/funcao', this.formFuncao.value)
        .subscribe(
          (data: any) => {
            this.mensagem = `Função cadastrada com sucesso!`;
            this.formFuncao.reset();
          },
          (error) => {
            console.error('Erro ao cadastrar função', error);
  
            if (error.error && error.error.message) {
              this.mensagemErro = error.error.message;
            } else if (error.status === 400) {
              // Se o erro for de validação, você pode tratar de acordo com suas necessidades
              this.mensagemErro = 'Erro de validação. Verifique os dados inseridos.';
            } else {
              this.mensagemErro = 'Erro desconhecido ao cadastrar a função.';
            }
          }
        );
    }
  
  

printPage() {
  window.print();
}


formIncluirAssinatura = new FormGroup({
  idFuncionario: new FormControl<string | null>(''),
  incluirassinatura: new FormControl<null>(null),
  arquivo: new FormControl<null>(null)
});

onFileChange1(event: any) {
  // Capturar o arquivo selecionado
  const file = event.target.files[0];
  // Verificar se algum arquivo foi selecionado
  if (file) {
    console.log(file);
    // Verificar se o arquivo é uma imagem
    if (file.type.startsWith('image/')) {
      if (file.size <= 1024 * 1024) {
        // Fazer a captura do arquivo
        this.formIncluirAssinatura.controls['incluirassinatura'].setValue(file);
        this.arquivoMsgErro = '';
      } else {
        // Gerar erro
        this.formIncluirAssinatura.controls['incluirassinatura'].setValue(null);
        this.arquivoMsgErro = 'Envie um arquivo com até 1MB de tamanho.';
      }
    } else {
      // Gerar erro
      this.formIncluirAssinatura.controls['incluirassinatura'].setValue(null);
      this.arquivoMsgErro = 'Selecione somente imagens JPG, PNG, BMP ou GIF.';
    }
  }
}

private async arrayBufferToBase64(buffer: ArrayBuffer): Promise<string> {
  const blob = new Blob([buffer], { type: 'application/pdf' });
  const reader = new FileReader();
  return new Promise<string>((resolve, reject) => {
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject('Error converting ArrayBuffer to base64.');
      }
    };
    reader.readAsDataURL(blob);
  });
}

IncluirAssinaturaSubmit(): void {
  // Certifique-se de que this.funcionario não seja nulo e tenha um idFuncionario válido
  if (this.funcionario && this.funcionario.idFuncionario) {
    const formData: FormData = new FormData();
    formData.append('id', this.funcionario.idFuncionario);

    const incluirassinatura = this.formIncluirAssinatura.controls['incluirassinatura'].value;
    
    if (incluirassinatura) {
      formData.append('assinatura', incluirassinatura);
    }

    // Fazer a requisição para a API
    this.httpClient
      .put('http://empresa-env.eba-t4xm3x3c.us-east-2.elasticbeanstalk.com/api/funcionario/incluir-assinatura', formData)
      .subscribe(
        (data: any) => {
          this.mensagem = `Assinatura inserida com sucesso!`;
          this.formIncluirAssinatura.reset();
        },
        (error) => {
          console.error(error);
          // Lógica de tratamento de erro, se necessário
        }
      );
  } else {
    console.error("ID do funcionário não está presente. Certifique-se de que o funcionário tem um ID válido.");
    // Lógica de tratamento de erro, se necessário
  }
}


  
}


    
  