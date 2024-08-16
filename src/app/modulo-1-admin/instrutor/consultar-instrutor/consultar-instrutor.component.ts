import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';
import { ConsultarFormacao } from 'src/app/models/models_diversos/consultar-formacao.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CadastrarFormacao } from 'src/app/models/models_diversos/cadastrar-formacao.model';
import { ConsultarInstrutor } from 'src/app/models/models_diversos/consultar-instrutor.model';
import { ConsultarProficiencia } from 'src/app/models/models_diversos/consultar-proficiencia.model';
import { saveAs } from 'file-saver';
import { CadastrarProficiencia } from 'src/app/models/models_diversos/cadastrar-proficiencia.model';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-consultar-instrutor',
  templateUrl: './consultar-instrutor.component.html',
  styleUrls: ['./consultar-instrutor.component.css']
})
export class ConsultarInstrutorComponent implements OnInit{
 
  proficienciaDowload!: string;
  mensagem: string = ''
  instrutores: any [] = []
  pagina: number = 1; //contador da paginação da consulta
  filtro: any = { instrutor: '' }; //filtro de pesquisa na consulta 
  itensPorPagina = 15;
  arquivo: File | null = null;
  imageUrl: string = '';

  paginaAtual: number = 1;  
  instrutorSelecionado: any = null;
  formacao: ConsultarFormacao | null = null;
  proficiencia: ConsultarProficiencia | null = null;
  instrutor: ConsultarInstrutor | null = null;
  formacoes: CadastrarFormacao | null = null;
  proficiencias: CadastrarProficiencia | null = null;
  inserir_proficiencia: File | null = null;
  arquivoMsgErro: string = '';
  incluirassinatura: File | null = null;
  selectedInstrutorId: string | null = null;

  id: string = ''; // Inicialize o id



    constructor(
      private httpClient: HttpClient,
      private activatedRoute: ActivatedRoute,

    ) {


    }


    displayImageForInstrutor(instrutorId: string | null): boolean {
      const display = instrutorId === this.selectedInstrutorId;
      console.log('Display Image:', display);
      console.log('Image URL:', this.imageUrl);
      return display;
    }
    
    
    
  exibirFormacao(instrutor: any) {
    this.instrutorSelecionado = instrutor;
                 }



setFormacao(formacoes: CadastrarFormacao): void {
this.formacoes = formacoes;
this.formCadastrarFormacao.patchValue(formacoes);  
this.formEditarFormacao.patchValue(formacoes);  
        
                              }


  setProficiencia(proficiencias: CadastrarProficiencia): void {
  this.proficiencias = proficiencias;
  this.formCadastrarProficiencia.patchValue(proficiencias);  
  this.formEditarProficiencia.patchValue(proficiencias);                                        
              }
              
  setInstrutor(instrutor: ConsultarInstrutor): void {
  this.instrutor = instrutor;
  this.formEditarFormacao.patchValue(instrutor);   
  this.formEditarProficiencia.patchValue(instrutor);  
  this.formIncluirProficiencia.patchValue(instrutor);  
  this.formIncluirAssinatura.patchValue(instrutor);  

                              
          }


          formIncluirProficiencia = new FormGroup({
            idinstrutor: new FormControl('', [Validators.required]),
            idProficiencia: new FormControl('', [Validators.required]),
            inserir_proficiencia: new FormControl(null) // Adicione esta linha para definir 'arquivo'
      
              });


              formIncluirAssinatura = new FormGroup({
                idinstrutor: new FormControl<string | null>(''),
                incluirassinatura: new FormControl<null>(null),
                arquivo: new FormControl<null>(null)
              });
              


          formCadastrarProficiencia = new FormGroup({
            idinstrutor: new FormControl('', [Validators.required]),
            proficiencia: new FormControl('', [Validators.required]),
            descricao: new FormControl('', [Validators.required]),
       
              });
          
          
              formEditarProficiencia = new FormGroup({
                idinstrutor: new FormControl('', [Validators.required]),
                idProficiencia: new FormControl('', [Validators.required]),
                proficiencia: new FormControl('', [Validators.required]),
                descricao: new FormControl('', [Validators.required]),
           
                  });
              

                 formCadastrarFormacao = new FormGroup({
                  idinstrutor: new FormControl('', [Validators.required]),
                  formacao: new FormControl('', [Validators.required]),
                  conselho: new FormControl('', [Validators.required]),
                  registro: new FormControl('', [Validators.required]),
                  estado: new FormControl('', [Validators.required]),
                    });
                
                
                 formEditarFormacao = new FormGroup({
                  idFormacao: new FormControl('', [Validators.required]),
                  idinstrutor: new FormControl('', [Validators.required]),
                  formacao: new FormControl('', [Validators.required]),
                  conselho: new FormControl('', [Validators.required]),
                  registro: new FormControl('', [Validators.required]),
                  estado: new FormControl('', [Validators.required]),
                    });
                
                
                  get form(): any {
                      return this. formCadastrarFormacao.controls;
                      return this. formEditarFormacao.controls;
                      return this.formCadastrarProficiencia.controls;
                      return this.formEditarProficiencia.controls;
                      return this.formIncluirProficiencia.controls;
                      return this.formIncluirAssinatura.controls;

                    }

                    IncluirProficienciaSubmit(): void {
                      // Use this.id para acessar o valor do id
                      const formData: FormData = new FormData();
                      formData.append('id', this.id);
                  
                      if (this.inserir_proficiencia) {
                        formData.append('incluirproficiencia', this.inserir_proficiencia);
                      }
                  
                      this.httpClient
                        .put('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/proficiencias/incluir-proficiencia', formData)
                        .subscribe(
                          (data: any) => {
                            this.mensagem = `Proficiência atualizada com sucesso!`;
                            this.formIncluirProficiencia.reset();
                          },
                          (error) => {
                            console.error(error);
                            // Lógica de tratamento de erro, se necessário
                          }
                        );
                    }
                    IncluirAssinaturaSubmit(): void {
                      // Use this.id para acessar o valor do id
                      const formData: FormData = new FormData();
                      formData.append('id', this.id);
                    
                      // Adicione o arquivo ao FormData
                      const incluirassinatura = this.formIncluirAssinatura.controls['incluirassinatura'].value;
                      if (incluirassinatura) {
                        formData.append('assinatura', incluirassinatura);
                      }
                    
                      // Fazer a requisição para a API
                      this.httpClient
                        .put('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/instrutor/incluir-assinatura', formData)
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
                    }
                    
                    
                    


 
                    CadastrarProficienciaSubmit(): void {
                      this.httpClient.post('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/proficiencias', this.formCadastrarProficiencia.value)
                      .subscribe({
                        next: (data: any) => {
                          this.mensagem = `Proficiência criada com sucesso!`;
                            this.formCadastrarProficiencia.reset();       
                                           },
                        error: (e) => {
                        }
                      });                   
                    }


                    EditarProficienciaSubmit(): void {
                      this.httpClient.put('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/proficiencias', this.formEditarProficiencia.value)
                      .subscribe({
                        next: (data: any) => {
                          this.mensagem = `Proficiência criada com sucesso!`;
                            this.formEditarProficiencia.reset();       
                                           },
                        error: (e) => {
                        }
                      });                   
                    }
                
                CadastroFormacaoSubmit(): void {
                      this.httpClient.post('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/formacao', this.formCadastrarFormacao.value)
                      .subscribe({
                        next: (data: any) => {
                          this.mensagem = `Formação cadastrada com sucesso !`;
                            this.formCadastrarFormacao.reset();       
                                           },
                        error: (e) => {
                        }
                      });      
                
                    }
          
                    EditarFormacaoSubmit(): void {
                      this.httpClient.put('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/formacao', this.formEditarFormacao.value)
                      .subscribe({
                        next: (data: any) => {
                          this.mensagem = `Formação Atualizada com sucesso !`;
                            this.formEditarFormacao.reset();       
                                           },
                        error: (e) => {
                        }
                      });                   
                     }
                
                 FormacaoDelete(idFormacao: number, formacao: string): void {
              if(window.confirm('Deseja realmente excluir a Formação?\n' + formacao)) {
                //enviando uma reqquisição para o serviço de exclusão da API
                this.httpClient.delete('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/formacao/' + idFormacao)
                  .subscribe({
                    next: (data: any) => {
                      this.ngOnInit();
                    },
                    error: (e) => {
                    }
                  })
              }
            }
 ngOnInit(): void {
    const apiUrl = 'http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/instrutor';

    this.httpClient.get(apiUrl)
      .subscribe({
        next: (data: any) => {
          this.instrutores = data as any[];
          if (this.instrutores.length > 0 && this.instrutores[0].assinatura_instrutor) {
            this.imageUrl = 'data:image/jpeg;base64,' + this.instrutores[0].assinatura_instrutor;
          }
        },
        error: (error) => {
          console.error(error);
          // Lógica de tratamento de erro, se necessário
        }
      });
  }
        
            onDelete(idinstrutor: number, instrutor: string): void {
              if(window.confirm('Deseja realmente excluir o Instrutor selecionado?\n' + instrutor)) {
                //enviando uma reqquisição para o serviço de exclusão da API
                this.httpClient.delete('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/instrutor/' + idinstrutor)
                  .subscribe({
                    next: (data: any) => {
                      this.ngOnInit();
                    },
                    error: (e) => {
                    }
                  })
              }
            }

            ProficienciaDelete(idProficiencia: number, proficiencia: string): void {
              if(window.confirm('Deseja realmente excluir a proficiência selecionada?\n' + proficiencia)) {
                //enviando uma reqquisição para o serviço de exclusão da API
                this.httpClient.delete('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/proficiencias/' + idProficiencia)
                  .subscribe({
                    next: (data: any) => {
                      this.ngOnInit();
                    },
                    error: (e) => {
                    }
                  })
              }
            }
        
            gerarPDF(base64Data: string, proficienciaNome: string, instrutorNome: string) {
              // Converte a string base64 em um ArrayBuffer
              const binaryData = atob(base64Data);
              const arrayBuffer = new ArrayBuffer(binaryData.length);
              const uint8Array = new Uint8Array(arrayBuffer);
            
              for (let i = 0; i < binaryData.length; i++) {
                uint8Array[i] = binaryData.charCodeAt(i);
              }
            
              // Cria um Blob a partir do ArrayBuffer
              const blob = new Blob([uint8Array], { type: 'application/pdf' });
            
              // Cria um URL para o Blob
              const url = window.URL.createObjectURL(blob);
            
              // Gere o nome do arquivo com o nome do instrutor e da proficiência
              const fileName = `${instrutorNome}-${proficienciaNome}-proficiencia.pdf`;
            
              // Cria um elemento "a" para fazer o download
              const a = document.createElement('a');
              a.href = url;
              a.download = fileName;
            
              // Simula um clique no elemento "a" para iniciar o download
              a.click();
            
              // Revoga o URL para liberar recursos
              window.URL.revokeObjectURL(url);
            }
            
         //função para fazer a captura do arquivo
onFileChange(event: any) {
  //capturar o arquivo selecionado
  const file = event.target.files[0];
  //verificar se algum arquivo foi selecionado
  if (file) {
    console.log(file);
    //verificar se o arquivo é um PDF
    if (file.type === 'application/pdf') {
      if (file.size <= 1024 * 1024) {
        //faço a captura do arquivo
        this.inserir_proficiencia = file;
        this.arquivoMsgErro = '';
      } else {
        //gerar erro
        this.inserir_proficiencia = null;
        this.arquivoMsgErro = 'Envie um arquivo PDF com até 1MB de tamanho.';
      }
    } else {
      //gerar erro
      this.inserir_proficiencia = null;
      this.arquivoMsgErro = 'Selecione apenas arquivos no formato PDF.';
    }
  }
}
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




downloadProficiencia(proficiencia: any) {
  if (proficiencia && proficiencia.idProficiencia ) {
    const proficienciaId = proficiencia.idProficiencia;

    // Make a request to the server to get the proficiency file
    this.httpClient.get(`http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/proficiencias/download/${proficienciaId}`, {
      responseType: 'arraybuffer' as 'json' // Specify that the response is binary data
    }).subscribe(
      (data: any) => {
        this.downloadFile(data, `proficiencia_${proficienciaId}.pdf`);
      },
      (error) => {
        console.error(error);
        // Handle the error, e.g., show an error message to the user
      }
    );
  }
}


private downloadFile(data: any, fileName: string) {
  const blob = new Blob([data], { type: 'application/pdf' });
  const url = window.URL.createObjectURL(blob);

  // Trigger the file download
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.click();

  // Clean up
  window.URL.revokeObjectURL(url);
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

}





