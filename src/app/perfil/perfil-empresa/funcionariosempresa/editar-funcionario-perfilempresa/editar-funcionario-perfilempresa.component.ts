import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ConsultarEmpresas} from 'src/app/models/models_diversos/consultar-empresas.model';
import {CadastrarFuncionario} from 'src/app/models/models_diversos/cadastrar-funcionario.model';
import { FilterPipe } from 'ngx-filter-pipe';
import * as $ from 'jquery';
import 'select2'; // Adicione esta importação
import { NgSelectConfig } from '@ng-select/ng-select';


@Component({
  selector: 'app-editar-funcionario-perfilempresa',
  templateUrl: './editar-funcionario-perfilempresa.component.html',
  styleUrls: ['./editar-funcionario-perfilempresa.component.css']
})
export class EditarFuncionarioPerfilempresaComponent {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  funcionario: CadastrarFuncionario | null = null;
  mensagem: string = '';
  funcoes: any [] = []
  errorMessage: string = '';

  empresas: any [] = []
  funcionarios: any [] = []




  

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
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.httpClient.get('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/funcionario/' + id
    )
    .subscribe({ //capturando o retorno da API
      next: (data) => { //recebe o retorno de sucesso da API
        //armazenar os dados na variável
        this.formEditarFuncionario.patchValue(data);

      },
      error: (e) => { //recebe o retorno de erro da API
        console.log(e);
      }
    });

    this.httpClient.get('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/funcao' 
    )
    .subscribe({ //capturando o retorno da API
      next: (data) => { //recebe o retorno de sucesso da API
        //armazenar os dados na variável
        this.funcoes = data as any[];

      },
      error: (e) => { //recebe o retorno de erro da API
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
        this.formEditarFuncionario.get('idFuncionario')?.setValue(selectedValue);
        this.formEditarFuncionario.get('idFuncionario')?.updateValueAndValidity();
      });
  
      const lastOptionValue = this.funcoes.length > 0 ? this.funcoes[this.funcoes.length - 1].id : '';
  
      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      selectElement.val(lastOptionValue).trigger('change');
    }
  }
  


  formEditarFuncionario = new FormGroup({
    idFuncionario: new FormControl('',),
    idEmpresa: new FormControl('',),
    idFuncao: new FormControl('',),
    nome: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    rg: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
      });

      get form(): any {
        return this.formEditarFuncionario.controls;
      }

      setFuncionario(funcionario: CadastrarFuncionario): void {
        this.funcionario= funcionario;
    
    
      }
    
      CadastroSubmit(): void {
        this.httpClient
          .put('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/funcionario', this.formEditarFuncionario.value)
          .subscribe({
            next: (data: any) => {
              this.mensagem = `Funcionário cadastrado com sucesso!`;
            },
            error: (e) => {
              this.errorMessage = e.error.message || 'Erro desconhecido';  // Ajuste aqui para acessar a propriedade correta
              console.log(e.error);
            }
          });
      }
      

}
