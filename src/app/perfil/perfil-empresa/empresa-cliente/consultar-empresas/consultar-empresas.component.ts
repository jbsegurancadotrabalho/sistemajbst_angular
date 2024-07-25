import { Component, OnInit } from '@angular/core';
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
import { AutenticarResponseModel } from 'src/app/models/usuarios/autenticar-response.model';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';




@Component({
  selector: 'app-consultar-empresas',
  templateUrl: './consultar-empresas.component.html',
  styleUrls: ['./consultar-empresas.component.css']
})
export class ConsultarEmpresasComponent {


  empresas: any[] = [];
  userId: string | null = null;
  pagina: number = 1; //contador da paginação da consulta
  filtro: any = { nome_contato: '' }; //filtro de pesquisa na consulta
  itensPorPagina = 10;
  paginaAtual: number = 1;
  idFuncionario: any; // Declare idFuncionario here
  funcionario: CadastrarFuncionario| null = null;
  mensagem: string = '';
  empresaSelecionada: any = null;
  funcionarioSelecionado: any = null;
  funcionarios: any [] = []
  incluirassinatura: File | null = null;
  arquivoMsgErro: string = '';
   mensagemErro: string = '';
   usuario: AutenticarResponseModel | null = null;



  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authenticationHelper: AuthenticationHelper,

  ) { 
  }
 
  
  ngOnInit(): void {

    this.usuario = this.authenticationHelper.getData();


    const encryptedUserId = localStorage.getItem('encryptedUserId');
    if (encryptedUserId !== null) {
      // Descriptografa o ID do usuário (substitua esta lógica pela sua função de descriptografia)
      this.userId = this.decryptData(encryptedUserId, environment.cryptoKey);
    }

    if (this.userId !== null) {
      // Se tivermos o ID do usuário, fazemos a solicitação HTTP
      this.obterEmpresas(this.userId);
    } else {
      console.error('ID do usuário não encontrado na localStorage.');
    }
  }


   
  setFuncionario(funcionario: CadastrarFuncionario): void {
    this.funcionario= funcionario;
    this.formIncluirAssinatura.patchValue(funcionario); 
               }

  obterEmpresas(userId: string): void {
    const endpoint = `http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/empresa/usuario/${userId}`;

    this.httpClient.get<any[]>(endpoint)
      .subscribe({
        next: (data) => {
          // Realize a lógica necessária com os dados obtidos
          this.empresas = data;
          console.log('Matrículas:', this.empresas);
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
getTotalFuncionarios(): number {
  let totalFuncionarios = 0;
  for (const empresa of this.empresas) {
    totalFuncionarios += empresa.funcionarios.length;
  }
  return totalFuncionarios;
}

redirectToCadastrarFuncao(): void {
  this.router.navigateByUrl('/cadastrar-funcao-minha-empresa');
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
      .put('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/funcionario/incluir-assinatura', formData)
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
