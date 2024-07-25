import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-pedidos-de-compras',
  templateUrl: './editar-pedidos-de-compras.component.html',
  styleUrls: ['./editar-pedidos-de-compras.component.css']
})
export class EditarPedidosDeComprasComponent implements OnInit{
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
    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/pedidos-de-compras/' + id)
      .subscribe({
        next: (data: any) => {
          //preencher o formulário com os dados do produto obtido
          this.formEditarPedidos.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })
  }



 formEditarPedidos = new FormGroup({
  idPedidos : new FormControl('', [Validators.required]),
  comprador : new FormControl('', [Validators.required]),
  telefone : new FormControl('', [Validators.required]),
  numerodopedido: new FormControl('', [Validators.required]),
  venda: new FormControl('', [Validators.required]),
  notafiscal: new FormControl('', [Validators.required]),
  valor: new FormControl('', [Validators.required]),
  creditos: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  responsavelfinanceiro: new FormControl('', [Validators.required]),
  telefonefinanceiro: new FormControl('', [Validators.required]),
  whatsapp: new FormControl('', [Validators.required]),
  emailfinanceiro: new FormControl('', [Validators.required]),
  data_de_pagamento: new FormControl('', [Validators.required]),
  parcelas: new FormControl('', [Validators.required]),
  forma_de_pagamento: new FormControl('', [Validators.required]),
  observacoes: new FormControl('', [Validators.required]),

       });
  

     get form(): any {
       return this.formEditarPedidos.controls;
     }


     onSubmit(): void {

      this.formatDates();

      this.httpClient
      .put('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/pedidos-de-compras',
      this.formEditarPedidos.value
     

     )

      .subscribe({
        next: (data: any) => {
          this.mensagem = `Pedidos de Compras atualizado com sucesso!`;

        },
        error: (e) => {

          console.log(e.error);

        }
      })
     
}


formatDates(): void {
  const dataDePagamento = this.formEditarPedidos.value.data_de_pagamento;

  if (dataDePagamento !== null && dataDePagamento !== undefined) {
    // Aqui você tem certeza de que dataDePagamento é uma string
    this.formEditarPedidos.patchValue({
      data_de_pagamento: this.formatDate(dataDePagamento)
    });
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
