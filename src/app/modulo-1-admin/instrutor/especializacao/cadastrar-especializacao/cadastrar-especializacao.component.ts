import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray  } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-especializacao',
  templateUrl: './cadastrar-especializacao.component.html',
  styleUrls: ['./cadastrar-especializacao.component.css']
})
export class CadastrarEspecializacaoComponent {

  formCadastro = new FormGroup({
    /* dados principais do cliente: */
    cpf: new FormControl('', [Validators.required]),
    
    funcao: new FormControl('', [Validators.required]),
    conselho: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    registro: new FormControl('', [Validators.required]),

    especializacoes: new FormArray([])
  });
  
  
  //função para acessar os campos do formulário
  get form(): any {
    return this.formCadastro.controls;
  }
  
   //função para acessar o formArray do formulário
   get formEspecializacoes(): FormArray {
    return this.formCadastro.get('especializacoes') as FormArray;
  }
  
  
    //função para adicionar um dependente
    adicionarEspecializacao(): void {
    //criar um novo registro dentro do FormArray
    this.formEspecializacoes.push(
    new FormGroup({
      funcao: new FormControl('', [Validators.required]),
      conselho: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      registro: new FormControl('', [Validators.required]),
  
        })
      );
    }
    
    //função para remover um dependente
    //index => posição do elemento que será removido
    removerEspecializacao(index: number): void {
      this.formEspecializacoes.removeAt(index);
    }
  
  
    //função para remover o ultimo dependente
    removerUltimoEspecializacao(): void {
      this.formEspecializacoes.removeAt(this.formEspecializacoes.length - 1);
    }
  
  //função para capturar o SUBMIT do formulário
  onSubmit(): void {
    //imprimir os campos capturados
    console.log(this.formCadastro.value);
  }
  
  
 
  
  }
  
  
