import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { PostEsqueciMinhaSenhaModel } from 'src/app/models/usuarios/PostEsqueciMinhaSenhaModel';

@Component({
  selector: 'app-esqueci-minha-senha-cliente-empresa',
  templateUrl: './esqueci-minha-senha-cliente-empresa.component.html',
  styleUrls: ['./esqueci-minha-senha-cliente-empresa.component.css']
})
export class EsqueciMinhaSenhaClienteEmpresaComponent implements OnInit {

  mensagemSucesso: string = '';
  mensagemErro: string = '';
  formularioSenha!: FormGroup;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit() {
    // Inicialize o formulário com um controle de email e adicione validação de email obrigatório
    this.formularioSenha = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  esqueciMinhaSenha() {
    // Verifique se o formulário é válido
    if (this.formularioSenha.valid) {
      const novoRisco: PostEsqueciMinhaSenhaModel = this.formularioSenha.value as PostEsqueciMinhaSenhaModel;
      this.usuariosService.EsqueciMinhaSenha(novoRisco).subscribe(
        response => {
          console.log('Nova Senha enviada com sucesso:', response);
          this.mensagemSucesso = 'Nova Senha enviada com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao Recuperar Senha:', error);
          this.mensagemErro = 'Erro ao Recuperar Senha. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this.formularioSenha);
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
