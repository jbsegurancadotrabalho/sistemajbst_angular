import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostPerigoModel } from '../models/sms/PostPerigoModel';
import { GetPerigoModel } from '../models/sms/GetPerigoModel';
import { PutPerigoModel } from '../models/sms/PutPerigoModel';
import { PostPerigoIncluirFuncaoModel } from '../models/sms/PostPerigoIncluirFuncaoModel';
@Injectable({
  providedIn: 'root'
})
export class PerigoService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarPerigo(data: PostPerigoModel): Observable<any> {
    const url = `${this.baseUrl}/perigos`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  criarPerigoFuncaoEspecifica(data: PostPerigoIncluirFuncaoModel): Observable<any> {
    const url = `${this.baseUrl}/perigos/incluir-funcao-especifica`;
    return this.http.post<any>(url, data)
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

  consultarPerigo(): Observable<GetPerigoModel[]> {
    const url = `${this.baseUrl}/perigos/consultar-perigo-funcao`;
    return this.http.get<GetPerigoModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarPerigoPorId(id: string): Observable<GetPerigoModel> {
    const url = `${this.baseUrl}/perigos/${id}`;
    return this.http.get<GetPerigoModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarPerigo(id: string, data: PutPerigoModel): Observable<any> {
    const url = `${this.baseUrl}/perigos`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirPerigo(id: string): Observable<any> {
    const url = `${this.baseUrl}/perigos/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }
}
