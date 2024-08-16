import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-cadastrar-endereco',
  templateUrl: './cadastrar-endereco.component.html',
  styleUrls: ['./cadastrar-endereco.component.css']
})
export class CadastrarEnderecoComponent implements OnInit, AfterViewInit {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  mensagem: string = '';
  unidades: any[] = [];

  formEndereco = new FormGroup({
    idUnidadedetreinamento: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required]),
    logradouro: new FormControl('', [Validators.required]),
    complemento: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    bairro: new FormControl('', [Validators.required]),
    localidade: new FormControl('', [Validators.required]),
    uf: new FormControl('', [Validators.required]),
  });

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/unidadedetreinamento')
      .subscribe({
        next: (data: any) => {
          this.unidades = data;
        },
        error: (error: any) => {
          console.error(error);
        }
      });
  }

  ngAfterViewInit(): void {
    const selectElement = $(this.planoSelect.nativeElement);
  
    selectElement
      .select2({
        theme: 'bootstrap-5',
      })
      .on('change', () => {
        const selectedValue = selectElement.val();
        this.formEndereco.controls.idUnidadedetreinamento.setValue(selectedValue);
        this.formEndereco.controls.idUnidadedetreinamento.updateValueAndValidity();
      });
  
    // Defina o valor selecionado para o último item na inicialização
    const lastOptionValue = this.unidades.length > 0 ? this.unidades[this.unidades.length - 1].idUnidadedetreinamento : '';
    selectElement.val(lastOptionValue).trigger('change');
  }

  


  onSubmit(): void {
    const formValue = this.formEndereco.value as {
      idUnidadedetreinamento: string;
      cep: string;
      logradouro: string;
      complemento: string;
      numero: string;
      bairro: string;
      localidade: string;
      uf: string;
    };
  
    this.httpClient
      .post('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/endereco', formValue)
      .subscribe({
        next: (data: any) => {
          this.mensagem = `Endereco cadastrado com sucesso!`;
        },
        error: (e) => {
          
          console.log(e.error);
          if (e.error && e.error.message) {
            // Exiba a mensagem de erro da API
            this.mensagem = e.error.message;
          } else {
            // Se não houver uma mensagem de erro específica da API, exiba uma mensagem genérica
            this.mensagem = 'Erro desconhecido ao cadastrar Endereço.';
          }
        }
      });
  }
  



}
