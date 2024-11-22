import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CadastrarTurmas } from 'src/app/models/models_diversos/cadastrar-turmas.model';
import { ConsultarMatriculas } from 'src/app/models/models_diversos/consultar-matriculas.model';
import { HttpErrorResponse } from '@angular/common/http';
import { FilterPipe } from 'ngx-filter-pipe';
import { CadastrarEvidencias } from 'src/app/models/matriculas/cadastrar-evidencias.model';
import * as $ from 'jquery';
import 'select2'; // Adicione esta importação
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-matriculas-pessoa-fisica-gerar-documentos',
  templateUrl: './matriculas-pessoa-fisica-gerar-documentos.component.html',
  styleUrls: ['./matriculas-pessoa-fisica-gerar-documentos.component.css']
})
export class MatriculasPessoaFisicaGerarDocumentosComponent  implements OnInit{

  @ViewChild('planoSelect') planoSelect!: ElementRef;


  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  anoAtual: number = (new Date()).getFullYear();
  mesAtual: number = (new Date()).getMonth();
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
  curso: any; 
  evidencias: CadastrarEvidencias | null = null;
  inserir_evidencias: File | null = null;
  arquivoMsgErro: string = '';
  id: string = ''; // Inicialize o id
  arquivo: File | null = null;
  usuarios: any[] = [];
  idsUsuarios: any[] = [];
  IncluirUsuarios: FormGroup;
  selectedUsuario: any; // Adjust the type accordingly

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) {
    this.IncluirUsuarios = new FormGroup({
      idMatricula: new FormControl('', [Validators.required]),
      idsUsuarios: new FormArray([])
    });
    
  }
 

  ngAfterViewInit(): void {
    if (this.planoSelect) {
      const selectElement = $(this.planoSelect.nativeElement) as any;
  
      selectElement.select2({
        theme: 'bootstrap-5',
      }).on('change', () => {
        const selectedValue = String(selectElement.val());
        const formArray = this.formIncluirUsuario.get('idsUsuarios') as FormArray;
        const formGroup = formArray.at(0) as FormGroup; // Se você estiver usando apenas um elemento
  
        if (formGroup) {
          formGroup.get('id')?.setValue(selectedValue);
          formGroup.get('id')?.updateValueAndValidity();
        }
      });
  
      const lastOptionValue = this.usuarios.length > 0 ? this.usuarios[this.usuarios.length - 1].id : '';
  
      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      selectElement.val(lastOptionValue).trigger('change');
    }
  }
  


  formIncluirUsuario = new FormGroup({
    idMatricula: new FormControl(''),
    id: new FormControl(''),
    idsUsuarios: new FormArray([]),
  });

    //função para acessar o formArray do formulário
    get formUsuarios(): FormArray {
      return this.formIncluirUsuario.get('idsUsuarios') as FormArray;
    }


    adicionarUsuario(): void {
      //criar um novo registro dentro do FormArray
      this.formUsuarios.push(
        new FormGroup({
          id: new FormControl(''),
        })
      );
    }
  

    removerUsuario(index: number): void {
      this.formUsuarios.removeAt(index);
    }
  
  
    //função para remover o ultimo dependente
    removerUltimoUsuario(): void {
      this.formUsuarios.removeAt(this.formUsuarios.length - 1);
    }

 

  ngOnInit(): void {
    this.consultarMatriculas();
    
    this.consultarMatriculas();
    this.httpClient.get('http://usuario-jb-env.eba-2udmmd4g.us-east-1.elasticbeanstalk.com/api/usuarios/consultar-usuarios').subscribe({
      next: (data: any) => {
        this.usuarios = Object.values(data) as any[];
      },
      error: (e) => {
        console.log(e);
      }
    }); 
 
  }
 
  consultarMatriculas(): void {
    const url = `http://matricula-pessoa-fisica-jb-env.eba-eccktdxj.us-east-1.elasticbeanstalk.com/api/matriculas-pessoafisica/consultar-matriculas-pessoafisica?mes=${this.mesAtual + 1}`;
      

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
  
  selecionarMes(mes: number): void {
    this.mesAtual = mes;
    this.consultarMatriculas();
  }


  exibirUsuarios(matriculas: any) {
    this.matriculaSelecionada = matriculas;
  }
 
  exibirEvidencias(matricula: any) {
    this.matriculaSelecionada = matricula;
  }


  setEvidencias(evidencias: CadastrarEvidencias): void {
    this.evidencias = evidencias;
    this.formEditarEvidencias.patchValue(evidencias);  
    this.formUploadEvidencia.patchValue(evidencias);  
    this.formIncluirUsuario.patchValue(evidencias);  
    this.IncluirUsuarios.patchValue(evidencias);  
            
    }


    setCadastrar(evidencias: CadastrarEvidencias): void {
      this.evidencias = evidencias;
      this.formCadastrarEvidencias.patchValue(evidencias); 
      this.formIncluirUsuario.patchValue(evidencias);  
      this.IncluirUsuarios.patchValue(evidencias);     
              
      }

    formCadastrarEvidencias = new FormGroup({
    idMatricula: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
       });

      formEditarEvidencias = new FormGroup({
      idMatricula: new FormControl('', [Validators.required]),
      idEvidencias: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
          });

          formUploadEvidencia = new FormGroup({
            idMatricula: new FormControl('', [Validators.required]),
            idEvidencias: new FormControl('', [Validators.required]),
            inserir_evidencias: new FormControl<string | null>(null),  
            arquivo: new FormControl<null>(null)
            // Permitindo string ou null
          });
      
          
          setMatriculas(matriculas: ConsultarMatriculas): void {
            this.matricula = matriculas;
            this.formEditarEvidencias.patchValue(matriculas);  
            this.formUploadEvidencia.patchValue(matriculas);  
            this.formCadastrarEvidencias.patchValue(matriculas);  
            this.EditarMatriculas.patchValue(matriculas);                      
            }

            EditarMatriculas = new FormGroup({
              idMatricula: new FormControl('', [Validators.required]),
              status: new FormControl('', [Validators.required]),
            });

  get form(): any {
    return this.formCadastrarEvidencias.controls;
    return this.formEditarEvidencias.controls;
    return this.formUploadEvidencia.controls;
    return this.formIncluirUsuario.controls;
    return this.IncluirUsuarios.controls;
    return this.EditarMatriculas.controls;
  }


 

  CadastrarEvidenciaSubmit(): void {
    this.httpClient
    .post('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/evidencias',
    this.formCadastrarEvidencias.value  

   )

    .subscribe({
      next: (data: any) => {
        this.mensagem = `Evidência cadastrada com sucesso!`;

      },
      error: (e) => {

        console.log(e.error);

      }
    })

  
}

EditarEvidenciaSubmit(): void {
  this.httpClient
  .put('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/evidencias',
  this.formEditarEvidencias.value  

 )

  .subscribe({
    next: (data: any) => {
      this.mensagem = `Evidência editada com sucesso!`;

    },
    error: (e) => {

      console.log(e.error);

    }
  })


}

onFileChange(event: any) {
  //capturar o arquivo selecionado
  const file = event.target.files[0];
  //verificar se algum arquivo foi selecionado
  if (file) {
    console.log(file);
    //verificar se o arquivo é um PDF
    if (file.type.startsWith('image/') || file.type === 'application/pdf') {
      if (file.size <= 1024 * 1024) {
        //faço a captura do arquivo
        this.inserir_evidencias = file;
        this.arquivoMsgErro = '';
      } else {
        //gerar erro
        this.inserir_evidencias = null;
        this.arquivoMsgErro = 'Envie um arquivo PDF com até 1MB de tamanho.';
      }
    } else {
      //gerar erro
      this.inserir_evidencias = null;
      this.arquivoMsgErro = 'Selecione apenas arquivos no formato PDF.';
    }
  }
}



UploadEvidenciaSubmit(): void {
  // Use this.id para acessar o valor do id
  const formData: FormData = new FormData();
formData.append('id', this.id);

if (this.inserir_evidencias) {
    formData.append('inserir_evidencias', this.inserir_evidencias);
}
  this.httpClient
    .put('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/evidencias/incluir-evidencia', formData)
    .subscribe(
      (data: any) => {
        this.mensagem = `Upload da Evidência realizado com sucesso!`;
        this.formUploadEvidencia.reset();
      },
      (error) => {
        console.error(error);
        // Lógica de tratamento de erro, se necessário
      }
    );
}
  
downloadEvidencias(evidencias: any) {
  if (evidencias && evidencias.idEvidencias) {
    const evidencia = evidencias.idEvidencias;
    this.httpClient.get(`https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/evidencias/download-evidencia/${evidencia}`, {
      responseType: 'arraybuffer' as 'json', // Specify that the response is binary data
      observe: 'response' // Ensure full response is returned, including headers
    }).subscribe(
      (response: HttpResponse<any>) => {
        const contentDisposition = response.headers.get('content-disposition');
        const fileName = this.extractFileName(contentDisposition) || `evidencia-do-curso_${evidencia}`;

        // Trigger the file download
        this.downloadFile(response.body, fileName);
      },
      (error) => {
        console.error(error);
        // Handle the error, e.g., show an error message to the user
      }
    );
  }
}

private extractFileName(contentDisposition: string | null): string | null {
  if (!contentDisposition) {
    return null;
  }

  const matches = contentDisposition.match(/filename="(.+)"|filename=([^;]+)/);
  if (matches) {
    return matches[1] || matches[2];
  }

  return null;
}

private downloadFile(data: any, fileName: string) {
  const blob = new Blob([data], { type: 'application/octet-stream' });
  const url = window.URL.createObjectURL(blob);

  // Trigger the file download
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.click();

  // Clean up
  window.URL.revokeObjectURL(url);
}

IncluirUsuarioSubmit(): void {
  console.log('Iniciando IncluirUsuarioSubmit');

  const idMatricula = this.formIncluirUsuario.get('idMatricula')?.value;
  console.log('idMatricula:', idMatricula);

  const usuariosFormArray = this.formIncluirUsuario.get('idsUsuarios') as FormArray;
  console.log('usuariosFormArray:', usuariosFormArray);

  if (usuariosFormArray) {
    const usuarios = usuariosFormArray.value.map((id: any) => id.id);
    console.log('idsUsuarios:', usuarios);

    const requestData = {
      idMatricula: idMatricula,
      idsUsuarios: usuarios
    };

    console.log('Enviando requestData:', requestData);
    this.httpClient.put('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/matriculas/incluirUsuarios', requestData)
    .subscribe({
      next: () => {
        console.log('Usuarios cadastrados com sucesso!');
        this.mensagem = 'Usuários cadastrados com sucesso!';
      },
      error: (e) => {
        console.error('Erro durante a requisição:', e.error);
      }
    });
  } else {
    console.error('Formulário de Usuário não está definido corretamente.');
  }
}

excluirUsuarioMatricula(idMatricula: string, idUsuario: string): void {
  const url = `https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/matriculas/${idMatricula}/usuarios/${idUsuario}`;

  this.httpClient.delete(url).subscribe(
    () => {
      console.log('Usuário excluído com sucesso.');
      // Add additional logic if needed
    },
    (error) => {
      console.error('Erro ao excluir usuário:', error);
      // Add additional logic to handle the error if needed
    }
  );
}


onSubmit(): void {
  this.httpClient
  .put('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/matriculas/editar-matriculas-cliente', this.EditarMatriculas.value)

  .subscribe({
    next: (data: any) => {
      this.mensagem = `Status da Matricula Alterado com Sucesso!`;
      

    },
    error: (e) => {

      console.log(e.error);

    }
  })


}

}
  

