import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FuncaoDocService } from 'src/app/services/funcaodoc.service';

@Component({
  selector: 'app-criar-funcaodoc',
  templateUrl: './criar-funcaodoc.component.html',
  styleUrls: ['./criar-funcaodoc.component.css']
})
export class CriarFuncaodocComponent {

  funcaodocForm: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private funcaoDocService: FuncaoDocService, // Importe o serviço UnidadeDocService
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.funcaodocForm = this.formBuilder.group({
      nome_da_funcao: ['', Validators.required],
      setor_gho: ['', Validators.required],
      cenario_funcaodoc: [''],
      idFuncao: ['']

    });
    
    
 


  }

  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    if (id) {
      this.httpClient.get('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/funcoes/' + id)
        .subscribe({
          next: (data: any) => {
            console.log('Dados da função:', data); // Verifique os dados retornados pela API
            this.funcaodocForm.patchValue({
              nome_da_funcao: data.nome_da_funcao,
              setor_gho: data.setor_gho,
              cenario_funcaodoc: data.cenario_funcaodoc,
              idFuncao: data.idFuncao // Verifique se o campo retornado pela API tem o nome correto
            });
          },
          error: (e) => {
            console.log(e);
          }
        });
    }
  }
  
  



  criarFuncao() {
    if (this.funcaodocForm.valid) {
      console.log('Dados do formulário:', this.funcaodocForm.value);
      
      this.funcaoDocService.criarFuncaoDoc(this.funcaodocForm.value) // Verifique se aqui está chamando o método correto do serviço UnidadeDocService
        .subscribe(
          response => {
            console.log('Unidade criada com sucesso!', response);
            this.cadastroSucesso = 'Função criada com sucesso!';
            this.funcaodocForm.reset();
          },
          error => {
            console.error('Erro ao criar unidade:', error);
            this.cadastroErro = 'Erro ao criar Função. Por favor, tente novamente.';
          }
        );
    } else {
      console.error('Formulário inválido. Por favor, preencha os campos corretamente.');
    }
  }



}
