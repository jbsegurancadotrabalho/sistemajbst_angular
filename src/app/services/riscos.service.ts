import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostRiscosModel } from '../models/sms/PostRiscosModel';
import { GetRiscosModel } from '../models/sms/GetRiscosModel';
import { PutRiscosModel } from '../models/sms/PutRiscosModel';
import { PostRiscosIncluirFuncaoEspecifica } from '../models/sms/PostRiscosIncluirFuncaoEspecifica.Model';

@Injectable({
  providedIn: 'root'
})
export class RiscosService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarRiscos(data: PostRiscosModel): Observable<any> {
    const url = `${this.baseUrl}/riscos/criar`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  criarRiscosFuncaoEspecifica(data: PostRiscosIncluirFuncaoEspecifica): Observable<any> {
    const url = `${this.baseUrl}/riscos/incluir-funcao-especifica`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }




  consultarRiscos(): Observable<GetRiscosModel[]> {
    const url = `${this.baseUrl}/riscos/consultar-todos-os-riscos`;
    return this.http.get<GetRiscosModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarRiscoPorId(id: string): Observable<GetRiscosModel> {
    const url = `${this.baseUrl}/riscos/${id}`;
    return this.http.get<GetRiscosModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarRisco(id: string, data: PutRiscosModel): Observable<any> {
    const url = `${this.baseUrl}/riscos`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirRisco(id: string): Observable<any> {
    const url = `${this.baseUrl}/riscos/excluir/${id}`;
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
