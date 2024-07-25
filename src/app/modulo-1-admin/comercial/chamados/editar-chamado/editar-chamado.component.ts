import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-editar-chamado',
  templateUrl: './editar-chamado.component.html',
  styleUrls: ['./editar-chamado.component.css']
})
export class EditarChamadoComponent implements OnInit {


  mensagem: string = '';

 
    constructor(
      private httpClient: HttpClient,
      private activatedRoute: ActivatedRoute
    ) {
    }

  ngOnInit(): void {
    //capturando o id enviado na URL
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('http://chamados-jb-env.eba-8zceqpve.us-east-2.elasticbeanstalk.com/api/chamados/' + id)
      .subscribe({
        next: (data: any) => {
          //preencher o formulário com os dados do produto obtido
          this.formEdicao.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })
  }

formEdicao = new FormGroup({
  id: new FormControl('', [Validators.required]),
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
        return this.formEdicao.controls;
      }

      onSubmit(): void {
        //enviando uma requisição PUT para a api
        this.httpClient.put('http://chamados-jb-env.eba-8zceqpve.us-east-2.elasticbeanstalk.com/api/chamados',  this.formEdicao.value)
          .subscribe({
            next: (data: any) => {
              this.mensagem = `Chamado Atualizado com sucesso!`;

            },
            error: (e) => {
            }
          });
      }

}
