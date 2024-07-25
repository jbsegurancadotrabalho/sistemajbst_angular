import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import { AutenticarRequestModel } from 'src/app/models/usuarios/autenticar-request.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AutenticarResponseModel } from 'src/app/models/usuarios/autenticar-response.model';
import { encryptData } from 'src/app/utils/crypto.util';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

 //variáveis do componente
 mensagemErro: string = '';


 mensagem: string = '';
 perfis: any [] = []

 //método construtor
 constructor(
   //injeção de dependência
   private usuariosService: UsuariosService,
   private authenticationHelper: AuthenticationHelper,
   private httpClient: HttpClient,
   private activatedRoute: ActivatedRoute
 ) {}

 ngOnInit(): void {
  this.httpClient.get<any[]>('http://usuario-jb-env.eba-2udmmd4g.us-east-1.elasticbeanstalk.com/api/usuarios/consultar-perfis')
    .subscribe({
      next: (data) => {
        // Filtrar os perfis desejados (exemplo: ADMIN e USER)
        this.perfis = data.filter(p => p.nome === 'Empresa' || p.nome === 'Master' || p.nome === 'Aluno Particular');
      },
      error: (e) => {
        console.log(e);
      }
    });
}


 //criando a estrutura do formulário
 formLogin = new FormGroup({
   /* campo 'email' */
   email: new FormControl('', [
     Validators.required /* campo obrigatório */,
     Validators.email /* formato de email */,
   ]),
   /* campo 'senha' */
   senha: new FormControl('', [
     Validators.required /* campo obrigatório */,
     Validators.pattern(
       /* senha forte */
       /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
     ),
   ]),
   id: new FormControl('', [Validators.required]),

 });

 //função para permitir o acesso aos
 //campos contidos no formulário
 get form(): any {
   //retornar os campos do formulário
   return this.formLogin.controls;
 }


 onSubmit(): void {
  // Verifica se o formulário é válido antes de prosseguir
  if (this.formLogin.invalid) {
    // Trate a situação de formulário inválido conforme necessário
    return;
  }

  // Obtém o valor do campo 'id' do formulário
  const id = this.formLogin.value.id || '';

  // Cria o objeto model para a autenticação
  const model: AutenticarRequestModel = {
    email: this.formLogin.value.email as string,
    senha: this.formLogin.value.senha as string,
    id: id,
  };

  // Chama o serviço de autenticação
  this.usuariosService
    .autenticar(model)
    .subscribe({
      next: (response) => {
        // Grava os dados do usuário autenticado
        this.authenticationHelper.signIn(response);

        // Criptografa e salva o ID do usuário na localStorage
        const userId = this.authenticationHelper.getUserId();
        if (userId !== null) {
          const encryptedUserId = encryptData(userId, environment.cryptoKey);
          localStorage.setItem('encryptedUserId', encryptedUserId);
        }

        // Redireciona com base no perfil
        switch (response.perfil.nome.toLowerCase()) {
          case 'empresa':
            window.location.href = "/consultar-turmas-empresa";
            break;
          case 'aluno particular':
            window.location.href = "/consultar-turmas-perfil-aluno";
            break;
          case 'master':
            window.location.href = "/consultar-chamado";
            break;
          default:
            console.error('Perfil desconhecido:', response.perfil.nome);
        }
      },
      error: (e) => {
        this.mensagemErro = e.error.message;
      },
    });
}



}

