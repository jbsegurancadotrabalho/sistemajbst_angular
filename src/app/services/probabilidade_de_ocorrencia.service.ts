import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostProbabilidadeDeOcorrenciaModel } from '../models/sms/PostProbabilidadeDeOcorrenciaModel';
import { GetProbabilidadeDeOcorrenciaModel } from '../models/sms/GetProbabilidadeDeOcorrenciaModel';
import { PutProbabilidadeDeOcorrenciaModel } from '../models/sms/PutProbabilidadeDeOcorrenciaModel';
import { PostProbabilidadeDeOcorrenciaRiscosModel } from '../models/sms/PostProbabilidadeDeOcorrenciaRiscosModel';

@Injectable({
  providedIn: 'root'
})
export class ProbabilidadeDeOcorrenciaService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarProbabilidadeDeOcorrencia(data: PostProbabilidadeDeOcorrenciaModel ): Observable<any> {
    const url = `${this.baseUrl}/api/probabilidade-ocorrencia`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  criarProbabilidadeDeOcorrenciaRiscos(data: PostProbabilidadeDeOcorrenciaRiscosModel ): Observable<any> {
    const url = `${this.baseUrl}/api/probabilidade-ocorrencia/criar-probabilidade-de-ocorrencia-riscos`;
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

  consultarProbabilidadeDeOcorrencia(): Observable<GetProbabilidadeDeOcorrenciaModel[]> {
    const url = `${this.baseUrl}/api/probabilidade-ocorrencia`;
    return this.http.get< GetProbabilidadeDeOcorrenciaModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarProbabilidadeDeOcorrenciaPorId(id: string): Observable< GetProbabilidadeDeOcorrenciaModel> {
    const url = `${this.baseUrl}/api/probabilidade-ocorrencia/${id}`;
    return this.http.get< GetProbabilidadeDeOcorrenciaModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarProbabilidadeDeOcorrencia(id: string, data:  PutProbabilidadeDeOcorrenciaModel): Observable<any> {
    const url = `${this.baseUrl}/api/probabilidade-ocorrencia/editar-probabilidade-de-ocorrencia-riscos
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirProbabilidadeDeOcorrencia(id: string): Observable<any> {
    const url = `${this.baseUrl}/api/probabilidade-ocorrencia/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }



}
