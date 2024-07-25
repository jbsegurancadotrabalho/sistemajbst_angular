import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-criar-chamado',
  templateUrl: './criar-chamado.component.html',
  styleUrls: ['./criar-chamado.component.css']
})
export class CriarChamadoComponent {

  mensagem: string = '';

   //construtor
   constructor(
    private httpClient: HttpClient,
  ) {}


  formChamado = new FormGroup({
    nome_contato: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required]),
    setor: new FormControl('', [Validators.required]),
    pessoa: new FormControl('', [Validators.required]),
    empresa: new FormControl('', [Validators.required]),
    cnpj: new FormControl('', [Validators.required]),
    canal: new FormControl('', [Validators.required]),
    nome_atendente: new FormControl('', [Validators.required]),
    executante: new FormControl('', [Validators.required]),
    descreva_chamado: new FormControl('', [Validators.required]),
    status_chamado: new FormControl('', [Validators.required]),
    status_executante: new FormControl('', [Validators.required]),
      });

      get form(): any {
        return this.formChamado.controls;
      }


      onSubmit(): void {
        this.httpClient
        .post('http://chamados-jb-env.eba-8zceqpve.us-east-2.elasticbeanstalk.com/api/chamados',
        
        this.formChamado.value
       

       )

        .subscribe({
          next: (data: any) => {
            this.mensagem = `Chamado cadastrado com sucesso!`;

          },
          error: (e) => {

            console.log(e.error);

          }
        })

      
}

}
