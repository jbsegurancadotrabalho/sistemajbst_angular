import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment.development';
import * as $ from 'jquery';
import 'select2'; // Adicione esta importação
import { NgSelectConfig } from '@ng-select/ng-select';





@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})
export class CadastrarEmpresaComponent implements OnInit {
  @ViewChild('planoSelect') planoSelect!: ElementRef;

  usuarios: any [] = []
  mensagem: string = '';
  mensagemErro: string = '';

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private config: NgSelectConfig

  ) {

    this.config.notFoundText = 'Não encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }




 ngOnInit(): void {
  this.httpClient.get('http://usuario-jb-env.eba-2udmmd4g.us-east-1.elasticbeanstalk.com/api/usuarios/consultar-usuarios').subscribe({
      
  next: (data: any) => {
        this.usuarios = Object.values(data) as any[];
      },
      error: (e) => {
        console.log(e);
      }
    });   

}


ngAfterViewInit(): void {
  if (this.planoSelect) {
    const selectElement = $(this.planoSelect.nativeElement) as any;

    selectElement.select2({
      theme: 'bootstrap-5',
    }).on('change', () => {
      const selectedValue = String(selectElement.val());
      this.formEmpresa.get('id')?.setValue(selectedValue);
      this.formEmpresa.get('id')?.updateValueAndValidity();
    });

    const lastOptionValue = this.usuarios.length > 0 ? this.usuarios[this.usuarios.length - 1].id : '';

    selectElement.next().find('.select2-selection').addClass('form-control');
    selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');

    selectElement.val(lastOptionValue).trigger('change');
  }
}

 formEmpresa = new FormGroup({
   razaosocial: new FormControl('', [Validators.required]),
   nomefantasia: new FormControl('', [Validators.required]),
   cnpj: new FormControl('', [Validators.required]),
   status: new FormControl('', [Validators.required]),
   responsavel_sistema: new FormControl('', [Validators.required]),
   email_usuario: new FormControl('', [Validators.required]),
   senha_sistema: new FormControl('', [Validators.required]),
   telefone_responsavel: new FormControl('', [Validators.required]),
   id: new FormControl('', [Validators.required]),
     });

     get form(): any {
       return this.formEmpresa.controls;
     }


     onSubmit(): void {
      this.httpClient
        .post('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/empresa', this.formEmpresa.value)
        .subscribe({
          next: (data: any) => {
            this.mensagem = `Empresa cadastrada com sucesso!`;
          },
          error: (e) => {
            console.log(e.error);
            // Verifique se a resposta da API contém uma mensagem de erro
            if (e.error && e.error.message) {
              this.mensagemErro = e.error.message;
            } else {
              this.mensagemErro = 'Erro desconhecido ao cadastrar a empresa.';
            }
          }
        });
    }
    

printPage() {
  window.print();
}

generatePDF() {
  const pdfGenerationUrl = 'http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/gerar-pdf';

  // Realize uma chamada HTTP para o serviço de back-end para gerar o PDF
  this.httpClient.post(pdfGenerationUrl, {}, { responseType: 'blob' }).subscribe(
    (response: Blob) => {
      // A resposta é um blob (binário) que representa o PDF

      // Crie um objeto URL temporário para o blob
      const blobUrl = URL.createObjectURL(response);

      // Crie um elemento <a> para o download do PDF
      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      downloadLink.download = 'output.pdf'; // Nome do arquivo PDF
      document.body.appendChild(downloadLink);
  // Simule o clique no link para iniciar o download
  downloadLink.click();

  // Libere o objeto URL
  URL.revokeObjectURL(blobUrl);
},
(error) => {
  console.log(error);
}
);
}


customMatchFn(term: string, item: any) {
  // Implemente a lógica de correspondência personalizada aqui
  return item.email.toLowerCase().includes(term.toLowerCase());
}

}


