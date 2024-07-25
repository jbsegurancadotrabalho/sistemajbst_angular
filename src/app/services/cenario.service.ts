import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostCenarioModel } from '../models/funcao-especifica/PostCenarioModel';
import { PutCenarioModel } from '../models/funcao-especifica/PutCenarioModel';
import { GetCenarioModel } from '../models/funcao-especifica/GetCenarioModel';
@Injectable({
  providedIn: 'root'
})
export class CenarioService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  criarCenario(data: PostCenarioModel): Observable<any> {
    const url = `${this.baseUrl}/cenarios`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  consultarCenario(): Observable<GetCenarioModel[]> {
    const url = `${this.baseUrl}/cenarios`;
    return this.http.get<GetCenarioModel[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  consultarCenarioUnidades(): Observable<GetCenarioModel[]> {
    const url = `${this.baseUrl}/cenarios/unidades`;
    return this.http.get<GetCenarioModel[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  consultarCenarioPorId(id: string): Observable<GetCenarioModel> {
    const url = `${this.baseUrl}/cenarios/${id}`;
    return this.http.get<GetCenarioModel>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  editarCenario(id: string, data: PutCenarioModel): Observable<any> {
    const url = `${this.baseUrl}/cenarios`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  excluirCenario(id: string): Observable<any> {
    const url = `${this.baseUrl}/cenarios/${id}`;
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