import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar-faturamento-pf',
  templateUrl: './editar-faturamento-pf.component.html',
  styleUrls: ['./editar-faturamento-pf.component.css']
})
export class EditarFaturamentoPfComponent {

  mensagem: string = '';

  formFaturamentopf: FormGroup;


  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
  this.formFaturamentopf = this.formBuilder.group({
  idfaturamentopf : new FormControl('', [Validators.required]),
  venda: new FormControl('', [Validators.required]),
  notafiscal: new FormControl('', [Validators.required]),
  valor: new FormControl('', [Validators.required]),
  comprador: new FormControl('', [Validators.required]),
  telefone: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  responsavelfinanceiro: new FormControl('', [Validators.required]),
  telefonefinanceiro: new FormControl('', [Validators.required]),
  whatsapp: new FormControl('', [Validators.required]),
  emailfinanceiro: new FormControl('', [Validators.required, Validators.email]),
  observacoes: new FormControl('', [Validators.required]),
  forma_de_pagamento: new FormControl('', [Validators.required]),
  data_de_pagamento: new FormControl('', [Validators.required]),
  parcelas: new FormControl('', [Validators.required]),
    });
  }


 
  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.httpClient.get('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/faturamentopf/' + id)
      .subscribe({
        next: (data: any) => {
          //preencher o formulário com os dados do produto obtido
            this.formFaturamentopf.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })
  }
  

     get form(): any {
       return this.formFaturamentopf.controls;
     }

     onSubmit(): void {
      if (this.formFaturamentopf.valid) {
     
        const data_de_Pagamento = this.formatDate(this.formFaturamentopf.value.data_de_pagamento);

          this.formFaturamentopf.patchValue({
          data_de_pagamento: data_de_Pagamento,
        });
    
        // Enviar o formulário para o endpoint
        this.httpClient
          .put('http://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/faturamentopf',this.formFaturamentopf.value)
          .subscribe({
            next: (data: any) => {
              this.mensagem = `Faturamento Editado com sucesso!`;
              // Limpar o formulário ou realizar ações adicionais, se necessário
             this.formFaturamentopf.reset();
            },
            error: (e) => {
              console.log(e.error);
              // Realizar ações de tratamento de erro, se necessário
            }
          });
      } else {
        // Realize alguma ação ou exiba uma mensagem de erro se o formulário for inválido
      }
    }


formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (!isNaN(date.getTime())) {
    return date.toISOString(); // Formatar para ISO 8601
  } else {
    console.error('Data inválida:', dateString);
    return ''; // Ou outra ação apropriada
  }
}

printPage() {
  window.print();
}





}

