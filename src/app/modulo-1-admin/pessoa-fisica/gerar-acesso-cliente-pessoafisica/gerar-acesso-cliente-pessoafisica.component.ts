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
  selector: 'app-gerar-acesso-cliente-pessoafisica',
  templateUrl: './gerar-acesso-cliente-pessoafisica.component.html',
  styleUrls: ['./gerar-acesso-cliente-pessoafisica.component.css']
})
export class GerarAcessoClientePessoafisicaComponent {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  pessoafisica: any = {};
  mensagem: string = '';
  mensagemErro: string = '';

  contatos: any [] = []

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // Capturando o id enviado na URL
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    // Consultando a empresa através do id
    this.httpClient.get('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/pessoa-fisica/' + id)
        .subscribe({
            next: (data: any) => {
                // Preencher o formulário com os dados da empresa obtidos
                this.pessoafisica = data;
            },
            error: (e) => {
                console.log(e);
            }
        })
}


 


     
  printPage() {
    window.print();
  }
}
