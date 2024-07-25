import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ConsultarMatriculas } from 'src/app/models/models_diversos/consultar-matriculas.model';
import { HttpErrorResponse } from '@angular/common/http';
import { FilterPipe } from 'ngx-filter-pipe';
import { CadastrarEvidencias } from 'src/app/models/matriculas/cadastrar-evidencias.model';
import * as $ from 'jquery';
import { environment } from 'src/environments/environment.development';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import { CadastrarFuncionario } from 'src/app/models/models_diversos/cadastrar-funcionario.model';
import { CadastarPessoaFisica } from 'src/app/models/models_diversos/cadastrar-pessoafisica';



@Component({
  selector: 'app-consultar-dados-aluno-particular',
  templateUrl: './consultar-dados-aluno-particular.component.html',
  styleUrls: ['./consultar-dados-aluno-particular.component.css']
})
export class ConsultarDadosAlunoParticularComponent{
  @ViewChild('content') popupview!: ElementRef;


  aluno: any[] = [];
  userId: string | null = null;
  pagina: number = 1; //contador da paginação da consulta
  filtro: any = { nome_contato: '' }; //filtro de pesquisa na consulta
  itensPorPagina = 10;
  paginaAtual: number = 1;
  idpessoafisica: any; // Declare idFuncionario here
  pessoa: CadastarPessoaFisica | null = null;
  mensagem: string = '';
  empresaSelecionada: any = null;
  funcionarioSelecionado: any = null;
  funcionarios: any [] = []
  incluirassinatura: File | null = null;
  arquivoMsgErro: string = '';
   mensagemErro: string = '';
   id: string = ''; 

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
      this.obterAluno(this.userId);
    } else {
      console.error('ID do usuário não encontrado na localStorage.');
    }
  }


   


  obterAluno(userId: string): void {
    const endpoint = `http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.coms/api/pessoa-fisica/usuario/${userId}`;

    this.httpClient.get<any[]>(endpoint)
      .subscribe({
        next: (data) => {
          // Realize a lógica necessária com os dados obtidos
          this.aluno = data;
          console.log('Matrículas:', this.aluno);
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

					
setPessoa(pessoa: CadastarPessoaFisica): void {
  this.pessoa = pessoa;
  this.formIncluirAssinatura.patchValue(pessoa);                              
          }

formIncluirAssinatura = new FormGroup({
  idpessoafisica: new FormControl<string | null>(''),
  incluirassinatura: new FormControl<null>(null),
  arquivo: new FormControl<null>(null)
});


  get form(): any {
  return this.formIncluirAssinatura.controls;
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


IncluirAssinaturaSubmit(): void {
  // Verifica se o ID não é nulo ou indefinido
  if (this.id != null) {
      console.log('ID antes da requisição:', this.id);

      // Cria um objeto FormData e adiciona o ID
      const formData: FormData = new FormData();
      formData.append('id', this.id.toString());

      // Obtém o arquivo de assinatura do formulário
      const incluirAssinatura = this.formIncluirAssinatura.get('incluirassinatura')?.value;

      // Verifica se a assinatura está presente
      if (incluirAssinatura) {
          // Adiciona a assinatura ao FormData
          formData.append('assinatura', incluirAssinatura);

          // Envia a requisição para a API usando o método PUT
          this.httpClient.put('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/pessoa-fisica/incluir-assinatura', formData)
              .subscribe(
                  (data: any) => {
                      // Se a requisição for bem-sucedida, exibe uma mensagem de sucesso e redefina o formulário
                      this.mensagem = `Assinatura inserida com sucesso!`;
                      this.formIncluirAssinatura.reset();
                  },
                  (error) => {
                      // Se houver um erro, exibe o erro no console
                      console.error('Erro na requisição:', error);
                      // Lógica de tratamento de erro, se necessário
                  }
              );
      } else {
          console.error("Assinatura não presente. Certifique-se de selecionar um arquivo válido.");
          // Lógica de tratamento de erro, se necessário
      }
  } else {
      console.error("ID da pessoa física não está presente. Certifique-se de que a pessoa física tem um ID válido.");
      // Lógica de tratamento de erro, se necessário
  }


}

}