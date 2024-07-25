import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostNivelSeveridadeModel } from '../models/sms/PostNivelSeveridadeModel';
import { PutNivelSeveridadeModel } from '../models/sms/PutNivelSeveridadeModel';
import { GetNivelSeveridadeModel } from '../models/sms/GetNivelSeveridadeModel';
import { PostNivelDeSeveridadeRiscosModel } from '../models/sms/PostNivelDeSeveridadeRiscosModel';



@Injectable({
  providedIn: 'root'
})
export class NivelSeveridadeService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarNivelDeSeveridade(data: PostNivelSeveridadeModel): Observable<any> {
    const url = `${this.baseUrl}/nivel-severidade`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

    // Método para criar riscos
    criarNivelDeSeveridadeRiscos(data: PostNivelDeSeveridadeRiscosModel): Observable<any> {
      const url = `${this.baseUrl}/nivel-severidade/criar-nivel-de-severidade`;
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

  consultarNivelDeSeveridade(): Observable<GetNivelSeveridadeModel[]> {
    const url = `${this.baseUrl}/nivel-severidade`;
    return this.http.get<GetNivelSeveridadeModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarNivelDeSeveridadePorId(id: string): Observable<GetNivelSeveridadeModel> {
    const url = `${this.baseUrl}/nivel-severidade/${id}`;
    return this.http.get<GetNivelSeveridadeModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarNivelDeSeveridade(id: string, data: PutNivelSeveridadeModel): Observable<any> {
    const url = `${this.baseUrl}/nivel-severidade`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirNivelDeSeveridade(id: string): Observable<any> {
    const url = `${this.baseUrl}/nivel-severidade/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }
}
