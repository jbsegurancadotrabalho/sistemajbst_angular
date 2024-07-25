import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-criar-conta-cliente-empresa',
  templateUrl: './criar-conta-cliente-empresa.component.html',
  styleUrls: ['./criar-conta-cliente-empresa.component.css']
})
export class CriarContaClienteEmpresaComponent implements OnInit{

  mensagemSucesso: string = '';
  mensagemErro: string = '';

  perfis: any [] = []

   //construtor
   constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute


    
  ) {}

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://usuario-jb-env.eba-2udmmd4g.us-east-1.elasticbeanstalk.com/api/usuarios/consultar-perfis')
      .subscribe({
        next: (data) => {
          // Filtrar os perfis desejados (exemplo: ADMIN e USER)
          this.perfis = data.filter(p => p.nome === 'Empresa' );
        },
        error: (e) => {
          console.log(e);
        }
      });
  }
  

// Add 'id' to the form controls in your component
formRegister = new FormGroup({
  nome: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  senha: new FormControl('', [Validators.required]),
  id: new FormControl('', [Validators.required]),
});


get form(): any {
  return this.formRegister.controls;
}

onSubmit(): void {
  this.httpClient
    .post('http://usuario-jb-env.eba-2udmmd4g.us-east-1.elasticbeanstalk.com/api/usuarios/criar-conta', this.formRegister.value)
    .subscribe({
      next: (data: any) => {
        this.mensagemSucesso = `Conta criada com sucesso!`;
        this.formRegister.reset();
      },
      error: (e) => {
        if (e.error && e.error.detail) {
          this.mensagemErro = e.error.detail; // Captura a mensagem de erro do servidor
        } else {
          this.mensagemErro = 'Erro ao criar conta. Tente novamente mais tarde.';
        }
        console.error(e); // Log para visualizar o erro completo no console
      }
    });
}

}