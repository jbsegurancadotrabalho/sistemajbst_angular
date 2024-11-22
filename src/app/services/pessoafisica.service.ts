import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GetPessoaFisicaModel } from '../models/pessoa-fisica/GetPessoaFisicaModel';


@Injectable({
  providedIn: 'root'
})
export class PessoaFisicaService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  


  consultarPessoaFisica(): Observable<GetPessoaFisicaModel[]> {
    const url = `${this.baseUrl}/pessoafisica/todas`;
    return this.http.get<GetPessoaFisicaModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

 

    // Função para tratar erros
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // Erro do lado do cliente
        console.error('Ocorreu um erro:', error.error.message);
      } else {
        // Erro retornado pelo servidor
        console.error(
          `Código do erro: ${error.status}, ` +
          `Mensagem: ${error.error}`);
      }
      // Retornar uma mensagem de erro legível para o usuário
      return throwError('Erro ao criar risco. Por favor, tente novamente.');
    }
  
}
