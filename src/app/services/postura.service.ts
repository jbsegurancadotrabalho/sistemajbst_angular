import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostPosturaModel } from '../models/funcao-especifica/PostPosturaModel';
import { PutPosturaModel } from '../models/funcao-especifica/PutPosturaModel';
import { GetPosturaModel } from '../models/funcao-especifica/GetPosturaModel';


@Injectable({
  providedIn: 'root'
})
export class PosturaService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarPostura(data: PostPosturaModel): Observable<any> {
    const url = `${this.baseUrl}/posturas`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }


  // Método para editar um risco
  editarPostura(data: PutPosturaModel): Observable<any> {
    const url = `${this.baseUrl}/posturas/editar
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarPostura(): Observable<GetPosturaModel[]> {
    const url = `${this.baseUrl}/posturas`;
    return this.http.get<GetPosturaModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarPosturaPorId(id: string): Observable<GetPosturaModel> {
    const url = `${this.baseUrl}/posturas/${id}`;
    return this.http.get<GetPosturaModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }


  excluirPostura(id: string): Observable<any> {
    const url = `${this.baseUrl}/posturas/${id}`;
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
