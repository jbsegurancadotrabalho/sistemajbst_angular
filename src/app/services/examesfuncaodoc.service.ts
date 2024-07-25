import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostExamesFuncdocModel } from '../models/sms/PostExamesFuncdocModel';
import { GetExamesFuncaoModel } from '../models/sms/GetExamesFuncaoModel';
import { PutExamesFuncaoModel } from '../models/sms/PutExameFuncaoModel'; 
import { PostExamesFuncaoEspecificaModel } from '../models/sms/PostExamesFuncaoEspecificaModel';

@Injectable({
  providedIn: 'root'
})
export class ExameService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarExames(data: PostExamesFuncdocModel): Observable<any> {
    const url = `${this.baseUrl}/exames-funcaodoc`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

    // Método para criar riscos
    criarExamesFuncaoEspecifica(data: PostExamesFuncaoEspecificaModel): Observable<any> {
      const url = `${this.baseUrl}/exames-funcaodoc/incluir-funcao-especifica`;
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

  consultarExames(): Observable<GetExamesFuncaoModel[]> {
    const url = `${this.baseUrl}/exames-funcaodoc`;
    return this.http.get<GetExamesFuncaoModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarExamesPorId(id: string): Observable<GetExamesFuncaoModel> {
    const url = `${this.baseUrl}/exames-funcaodoc/${id}`;
    return this.http.get<GetExamesFuncaoModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarExames(id: string, data: PutExamesFuncaoModel): Observable<any> {
    const url = `${this.baseUrl}/exames-funcaodoc`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirExames(id: string): Observable<any> {
    const url = `${this.baseUrl}/exames-funcaodoc/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }
}
