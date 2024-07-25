import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostFuncaoEspecificaUnidadeModel } from '../models/funcao-especifica/PostFuncaoEspecificaUnidadeModel'; 
import { PutFuncaoEspecificaUnidadeModel } from '../models/funcao-especifica/PutFuncaoEspecificaUnidadeModel'; 
import { GetFuncaoEspecificaUnidadeModel } from '../models/funcao-especifica/GetFuncaoEspecificaUnidadeModel';



@Injectable({
  providedIn: 'root'
})
export class FuncaoEspecificaService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarFuncao(data:  PostFuncaoEspecificaUnidadeModel): Observable<any> {
    const url = `${this.baseUrl}/funcoes-especificas`;
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

  consultarFuncao(): Observable<GetFuncaoEspecificaUnidadeModel[]> {
    const url = `${this.baseUrl}/funcoes-especificas`;
    return this.http.get<GetFuncaoEspecificaUnidadeModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarFuncaoPorId(id: string): Observable<GetFuncaoEspecificaUnidadeModel> {
    const url = `${this.baseUrl}/funcoes-especificas/${id}`;
    return this.http.get<GetFuncaoEspecificaUnidadeModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarFuncao(id: string, data: PutFuncaoEspecificaUnidadeModel): Observable<any> {
    const url = `${this.baseUrl}/funcoes-especificas
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirFuncao(id: string): Observable<any> {
    const url = `${this.baseUrl}/funcoes-especificas/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }
}
