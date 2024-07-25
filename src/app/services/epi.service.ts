import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostEpiModel } from '../models/sms/PostEpiModel';
import { GetEpiModel } from '../models/sms/GetEpiModel'; 
import { PutEpiModel } from '../models/sms/PutEpiModel'; 
import { PostEpiIncluirFuncaoEspecificaModel } from '../models/sms/PostEpiIncluirFuncaoEspecificaModel';

@Injectable({
  providedIn: 'root'
})
export class EpiService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarEpi(data: PostEpiModel): Observable<any> {
    const url = `${this.baseUrl}/epi/criar`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  criarEpiIncluirFuncaoEspecifica(data: PostEpiIncluirFuncaoEspecificaModel): Observable<any> {
    const url = `${this.baseUrl}/epi/incluir-funcao-especifica`;
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

  consultarEpi(): Observable<GetEpiModel[]> {
    const url = `${this.baseUrl}/epi/consultar`;
    return this.http.get<GetEpiModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarEpiPorId(id: string): Observable<GetEpiModel> {
    const url = `${this.baseUrl}/epi/consultar/${id}`;
    return this.http.get<GetEpiModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarEpi(id: string, data: PutEpiModel): Observable<any> {
    const url = `${this.baseUrl}/epi/epi/editar
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirEpi(id: string): Observable<any> {
    const url = `${this.baseUrl}/epi/excluir/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }
}