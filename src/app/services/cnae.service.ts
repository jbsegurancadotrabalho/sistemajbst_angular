import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostCnaeModel } from '../models/empresadoc/PostCnaeService';
import { GetCnaeModel } from '../models/empresadoc/GetCnaeModel';
import { PutCnaeModel } from '../models/empresadoc/PutCnaeModel';

@Injectable({
  providedIn: 'root'
})
export class CnaeService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  criarCnae(data: PostCnaeModel): Observable<any> {
    const url = `${this.baseUrl}/cnaes`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  consultarCnae(): Observable<GetCnaeModel[]> {
    const url = `${this.baseUrl}/cnaes`;
    return this.http.get<GetCnaeModel[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  consultarCnaePorId(id: string): Observable<GetCnaeModel> {
    const url = `${this.baseUrl}/cnaes/${id}`;
    return this.http.get<GetCnaeModel>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  editarCnae(id: string, data: PutCnaeModel): Observable<any> {
    const url = `${this.baseUrl}/cnaes`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  excluirCnae(id: string): Observable<any> {
    const url = `${this.baseUrl}/cnaes/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      console.error(
        `Código do erro: ${error.status}, ` +
        `Mensagem: ${error.error}`);
    }
    return throwError('Erro ao realizar a operação. Por favor, tente novamente.');
  }
}