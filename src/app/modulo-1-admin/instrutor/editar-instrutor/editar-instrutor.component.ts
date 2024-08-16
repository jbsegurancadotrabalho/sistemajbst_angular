import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-instrutor',
  templateUrl: './editar-instrutor.component.html',
  styleUrls: ['./editar-instrutor.component.css']
})


export class EditarInstrutorComponent implements OnInit {
  mensagem: string = '';

 
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    //capturando o id enviado na URL
    var idinstrutor = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/instrutor/' + idinstrutor)
      .subscribe({
        next: (data: any) => {
          //preencher o formulário com os dados do produto obtido
          this.formInstrutor.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })
  }

formInstrutor = new FormGroup({
    idinstrutor: new FormControl('', [Validators.required]),
    instrutor: new FormControl('', [Validators.required]),
    rg: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    telefone_1: new FormControl('', [Validators.required]),
    telefone_2: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    
      });

      get form(): any {
        return this.formInstrutor.controls;
      }


      onSubmit(): void {
        this.httpClient
        .put('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/instrutor',
        this.formInstrutor.value
       

       )

        .subscribe({
          next: (data: any) => {
            this.mensagem = `Instrutor Editado com sucesso!`;

          },
          error: (e) => {

            console.log(e.error);

          }
        })
      
}

}
