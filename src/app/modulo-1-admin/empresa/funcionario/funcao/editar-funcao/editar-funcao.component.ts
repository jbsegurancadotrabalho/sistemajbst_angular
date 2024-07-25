import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-editar-funcao',
  templateUrl: './editar-funcao.component.html',
  styleUrls: ['./editar-funcao.component.css']
})
export class EditarFuncaoComponent {

  mensagem: string = '';

 
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    //capturando o id enviado na URL
    var idFuncao = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/funcao/' + idFuncao)
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
  idFuncao: new FormControl('', []),
  funcao: new FormControl('', [Validators.required]),
  cbo: new FormControl('', [Validators.required]),
  descricao: new FormControl('', [Validators.required]),
  gro: new FormControl('', [Validators.required]),
  gp: new FormControl('', [Validators.required]),

    });

      get form(): any {
        return this.formEdicao.controls;
      }

      onSubmit(): void {
        //enviando uma requisição PUT para a api
        this.httpClient.put('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/funcao', this.formEdicao.value)
          .subscribe({
            next: (data: any) => {
              this.mensagem = `Função Atualizada com sucesso!`;

            },
            error: (e) => {
            }
          });
      }

}

