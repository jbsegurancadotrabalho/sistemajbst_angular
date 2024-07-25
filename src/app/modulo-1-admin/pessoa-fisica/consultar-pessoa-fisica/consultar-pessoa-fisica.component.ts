import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import { CadastrarTurmas } from 'src/app/models/models_diversos/cadastrar-turmas.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CadastarPessoaFisica } from 'src/app/models/models_diversos/cadastrar-pessoafisica';


@Component({
  selector: 'app-consultar-pessoa-fisica',
  templateUrl: './consultar-pessoa-fisica.component.html',
  styleUrls: ['./consultar-pessoa-fisica.component.css']
})
export class ConsultarPessoaFisicaComponent  implements OnInit, AfterViewInit{

  @ViewChild('content') popupview!: ElementRef;

  mensagem: string = '';
  pessoafisica: any[] = [];
  Invoiceheader: any;
  invoiceno: any;
  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  arquivoMsgErro: string = '';
  incluirassinatura: File | null = null;
  id: string = ''; 
  pessoa: CadastarPessoaFisica | null = null;



  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,

  ) {
  }


  
  ngAfterViewInit(): void {
    $(document).ready(() => {
      const table = $('#myTable').DataTable({
        
        language: {
          url: 'https://cdn.datatables.net/plug-ins/1.11.6/i18n/Portuguese-Brasil.json'
        }
      });
      
    });
  }
  

  ngOnInit(): void {

    this.httpClient.get('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/pessoa-fisica')
    .subscribe({ //capturando o retorno da API
      next: (data) => { //recebe o retorno de sucesso da API
        this.dtTrigger.next(null);
        this.pessoafisica = data as any[];
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
    
  }


  onDelete(id: number, pessoafisica: string): void {
    if(window.confirm('Deseja realmente excluir a Pessoa Fisica selecionada?\n' + pessoafisica)) {
      //enviando uma reqquisição para o serviço de exclusão da API
      this.httpClient.delete('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/pessoa-fisica/' + id)
        .subscribe({
          next: (data: any) => {
            this.ngOnInit();
          },
          error: (e) => {
          }
        })
    }
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

