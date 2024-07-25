import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostAnalisePosturaModel } from '../models/funcao-especifica/PostAnalisePosturaModel';
import { GetAnalisePosturaModel } from '../models/funcao-especifica/GetAnalisePosturaModel';
import { PutAnalisePosturaModel } from '../models/funcao-especifica/PutAnalisePosturaModel';

@Injectable({
  providedIn: 'root'
})
export class AnalisePosturaService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarAnalisePostura(data: PostAnalisePosturaModel): Observable<any> {
    const url = `${this.baseUrl}/analise-postura/criar`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }
 
  consultarAnalisePostura(): Observable<GetAnalisePosturaModel[]> {
    const url = `${this.baseUrl}/analise-postura/todas`;
    return this.http.get<GetAnalisePosturaModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarAnalisePosturaPorId(id: string): Observable<GetAnalisePosturaModel> {
    const url = `${this.baseUrl}/analise-postura/${id}`;
    return this.http.get<GetAnalisePosturaModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarAnalisePostura(data: PutAnalisePosturaModel): Observable<any> {
    const url = `${this.baseUrl}/analise-postura/editar
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirAnálisePostura(id: string): Observable<any> {
    const url = `${this.baseUrl}/analise-postura/excluir/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

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
