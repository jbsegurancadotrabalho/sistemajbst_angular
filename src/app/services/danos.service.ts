import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostDanosModel } from '../models/sms/PostDanosModel';
import { GetDanosModel } from '../models/sms/GetDanosModel';
import { PutDanosModel } from '../models/sms/PutDanosModel';
import { PostDanosRiscosModel } from '../models/sms/PostDanosRiscosModel';

@Injectable({
  providedIn: 'root'
})
export class DanosService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarDanos(data: PostDanosModel): Observable<any> {
    const url = `${this.baseUrl}/danos/criar`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

    // Método para criar riscos
    criarDanosRiscos(data: PostDanosRiscosModel): Observable<any> {
      const url = `${this.baseUrl}/danos/criar-danos-riscos`;
      return this.http.post<any>(url, data)
        .pipe(
          catchError(this.handleError) // Tratar erros
        );
    }



  consultarDanos(): Observable<GetDanosModel[]> {
    const url = `${this.baseUrl}/danos/todos'`;
    return this.http.get<GetDanosModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarDanosPorId(id: string): Observable<GetDanosModel> {
    const url = `${this.baseUrl}/danos/${id}`;
    return this.http.get<GetDanosModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarDanos(id: string, data: PutDanosModel): Observable<any> {
    const url = `${this.baseUrl}/danos/editar`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }


  excluirDanos(id: string): Observable<any> {
    const url = `${this.baseUrl}/danos/${id}`;
    return this.http.delete<any>(url)
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
