import { Component, OnInit } from '@angular/core';
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
import { environment } from 'src/environments/environment.development';
import * as CryptoJS from 'crypto-js';



@Component({
  selector: 'app-consultar-matriculas-aluno',
  templateUrl: './consultar-matriculas-aluno.component.html',
  styleUrls: ['./consultar-matriculas-aluno.component.css']
})
export class ConsultarMatriculasAlunoComponent implements OnInit{

  mensagem: string = '';
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
  userId: string | null = null;



  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) { 
  }
 



  ngOnInit(): void {
    const encryptedUserId = localStorage.getItem('encryptedUserId');
    if (encryptedUserId !== null) {
      // Descriptografa o ID do usuário (substitua esta lógica pela sua função de descriptografia)
      this.userId = this.decryptData(encryptedUserId, environment.cryptoKey);
    }

    if (this.userId !== null) {
      // Se tivermos o ID do usuário, fazemos a solicitação HTTP
      this.obterMatriculas(this.userId);
    } else {
      console.error('ID do usuário não encontrado na localStorage.');
    }
  }





  obterMatriculas(userId: string): void {
    const endpoint = `https://matricula-pessoa-fisica-jb-env.eba-eccktdxj.us-east-1.elasticbeanstalk.com/api/matriculas-pessoafisica/usuario/${userId}`;

    this.httpClient.get<any[]>(endpoint)
      .subscribe({
        next: (data) => {
          // Realize a lógica necessária com os dados obtidos
          this.matriculas = data;
          console.log('Matrículas:', this.matriculas);
        },
        error: (e) => {
          console.error('Erro ao obter matrículas:', e);
        }
      });
  }
  decryptData(data: string, key: string): string {
    try {
      const bytes = CryptoJS.AES.decrypt(data, key);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedData;
    } catch (error) {
      console.error('Erro ao descriptografar dados:', error);
      return ''; // ou outra ação apropriada em caso de erro
    }

  }
  exibirEvidencias(matricula: any) {
    this.matriculaSelecionada = matricula;
  }

  setMatriculas(matriculas: ConsultarMatriculas): void {
    this.matricula = matriculas;
    this.formEditarEvidencias.patchValue(matriculas);  
    this.formUploadEvidencia.patchValue(matriculas);  
    this.formCadastrarEvidencias.patchValue(matriculas);  

            
    }
  setEvidencias(evidencias: CadastrarEvidencias): void {
    this.evidencias = evidencias;
    this.formEditarEvidencias.patchValue(evidencias);  
    this.formUploadEvidencia.patchValue(evidencias);  
            
    }

    
    setMatricula(matriculas: ConsultarMatriculas): void {
      this.matricula = matriculas;
      this.formCadastrarEvidencias.patchValue(matriculas);  
      this.EditarMatriculas.patchValue(matriculas);  
                
      }



    setCadastrar(evidencias: CadastrarEvidencias): void {
      this.evidencias = evidencias;
      this.formCadastrarEvidencias.patchValue(evidencias); 
              
      }

      
      EditarMatriculas = new FormGroup({
        idMatricula: new FormControl('', [Validators.required]),
        status: new FormControl('', [Validators.required]),
      });
    

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
          

  get form(): any {
    return this.formCadastrarEvidencias.controls;
    return this.formEditarEvidencias.controls;
    return this.formUploadEvidencia.controls;
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
        this.mensagem = `Proficiência atualizada com sucesso!`;
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


onSubmit(): void {
  this.httpClient
  .put('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/matriculas/editar-matriculas-cliente', this.EditarMatriculas.value)

  .subscribe({
    next: (data: any) => {
      this.mensagem = `Conclusão do curso informada com  sucesso!`;

    },
    error: (e) => {

      console.log(e.error);

    }
  })


}



}
  

