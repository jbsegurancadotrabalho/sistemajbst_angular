import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostMedidasDeControleModel } from '../models/sms/PostMedidasDeControleModel';
import { GetMedidasDeControleModel } from '../models/sms/GetMedidasDeControleModel'; 
import { PutMedidasDeControleModel } from '../models/sms/PutMedidasDeControleModel';
import { PostMedidasDeControleRiscosModel } from '../models/sms/PostMedidasDeControleRiscosModel';

@Injectable({
  providedIn: 'root'
})
export class MedidasDeControleService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  criarMedidasDeControle(data:  PostMedidasDeControleModel): Observable<any> {
    const url = `${this.baseUrl}/medidasdecontrole/criar-medidas-de-controlle`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  
  criarMedidasDeControleRiscos(data:  PostMedidasDeControleRiscosModel): Observable<any> {
    const url = `${this.baseUrl}/medidasdecontrole/criar-medidas-de-controlle-riscos`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  consultarMedidasDeControle(): Observable< GetMedidasDeControleModel[]> {
    const url = `${this.baseUrl}/medidasdecontrolle`;
    return this.http.get<GetMedidasDeControleModel[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  consultarMedidasDeControlePorId(id: string): Observable<GetMedidasDeControleModel> {
    const url = `${this.baseUrl}/medidasdecontrole/${id}`;
    return this.http.get<GetMedidasDeControleModel>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  editarMedidasDeControle(id: string, data: PutMedidasDeControleModel): Observable<any> {
    const url = `${this.baseUrl}/medidasdecontrole/editar-medidas-de-controlle`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  excluirMedidasDeControle(id: string): Observable<any> {
    const url = `${this.baseUrl}/medidasdecontrole/${id}`;
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