import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostEnderecoModel } from 'src/app/models/endereco/PostEnderecoModel';
import { EnderecoService } from 'src/app/services/endereco.service';


@Component({
  selector: 'app-criar-todos-enderecos',
  templateUrl: './criar-todos-enderecos.component.html',
  styleUrls: ['./criar-todos-enderecos.component.css']
})
export class CriarTodosEnderecosComponent implements OnInit {

  formularioEndereco!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private EnderecoService: EnderecoService,
    private route: ActivatedRoute, 
  ) {}

  ngOnInit(): void {
    this.formularioEndereco = this.formBuilder.group({
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      complemento: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      localidade: ['', Validators.required],
      uf: ['', Validators.required],

    });
   
  }



  criarEndereco() {
    if (this.formularioEndereco.valid) {
      const novoEndereco: PostEnderecoModel = this.formularioEndereco.value as PostEnderecoModel;
      this.EnderecoService.criarEndereco(novoEndereco).subscribe(
        response => {
          console.log('Endereço criado com sucesso:', response);
          this.cadastroSucesso = 'Endereço criado com sucesso!';
        },
        error => {
          console.error('Erro ao criar Endereço:', error);
          this.cadastroErro = 'Erro ao criar Endereço. Por favor, tente novamente.';
        }
      );
    } else {
      this.markFormGroupTouched(this.formularioEndereco);
    }
  }

  // Função para marcar todos os campos do formulário como tocados
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}