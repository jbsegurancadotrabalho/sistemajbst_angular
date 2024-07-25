import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostPotencialSeveridadeModel } from '../models/sms/PostPotencialSeveridadeModel'; 
import { PutPotencialSeveridadeModel } from '../models/sms/PutPotencialSeveridadeModel'; 
import { GetPotencialSeveridadeModel } from '../models/sms/GetPotencialSeveridadeModel';
import { PostPotencialDeSeveridadeRiscosModel } from '../models/sms/PostPotencialDeSeveridadeRiscosModel';



@Injectable({
  providedIn: 'root'
})
export class PotencialSeveridadeService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarPotencialDeSeveridade(data:  PostPotencialSeveridadeModel): Observable<any> {
    const url = `${this.baseUrl}/potencial-severidade-danos`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  
  // Método para criar riscos
  criarPotencialDeSeveridadeRiscos(data:  PostPotencialDeSeveridadeRiscosModel): Observable<any> {
    const url = `${this.baseUrl}/potencial-severidade-danos-riscos`;
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
    return throwError('Erro ao criar Nivel De Severidade. Por favor, tente novamente.');
  }

  consultarPotencialDeSeveridade(): Observable<GetPotencialSeveridadeModel[]> {
    const url = `${this.baseUrl}/buscar-todos-potencial-severidade-danos`;
    return this.http.get<GetPotencialSeveridadeModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarNivelDeSeveridadePorId(id: string): Observable<GetPotencialSeveridadeModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<GetPotencialSeveridadeModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarPotencialDeSeveridade(id: string, data:  PutPotencialSeveridadeModel): Observable<any> {
    const url = `${this.baseUrl}/potencial-severidade-danos`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirPotencialDeSeveridade(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }
}
