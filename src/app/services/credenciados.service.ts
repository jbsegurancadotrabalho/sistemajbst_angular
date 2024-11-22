import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostEpiIncluirFuncaoEspecificaModel } from '../models/sms/PostEpiIncluirFuncaoEspecificaModel';
import { PostCredenciadosModel } from '../models/credenciados/PostCredenciadosModel';
import { GetCredenciadosModel } from '../models/credenciados/GetCredenciadosModel';
import { PutCredenciadosModel } from '../models/credenciados/PutCredenciadosModel';

@Injectable({
  providedIn: 'root'
})
export class CredenciadoService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }



  criarCredenciado1(data: PostCredenciadosModel): Observable<any> {
    const url = `${this.baseUrl}/credenciados`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  

  criarCredenciado(data:  PostCredenciadosModel): Observable<any> {
    const url = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/credenciados`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
    
  }


  consultarCredenciado(): Observable<GetCredenciadosModel[]> {
    const url = `${this.baseUrl}/credenciados`;
    return this.http.get<GetCredenciadosModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarCredenciado2(): Observable<GetCredenciadosModel[]> {
    const url = `${this.baseUrl}/credenciados/credenciados2`;
    return this.http.get<GetCredenciadosModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarCredenciadoPorId(id: string): Observable<GetCredenciadosModel> {
    const url = `${this.baseUrl}/credenciados/${id}`;
    return this.http.get<GetCredenciadosModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }


  consultarCredenciadoPorId1(id: string): Observable<GetCredenciadosModel> {
    const url = `${this.baseUrl}/credenciados/${id}`;
    return this.http.get<GetCredenciadosModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarCredenciado( data: PutCredenciadosModel): Observable<any> {
    const url = `${this.baseUrl}/credenciados
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirCredenciado(id: string): Observable<any> {
    const url = `${this.baseUrl}/credenciados/${id}`;
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
