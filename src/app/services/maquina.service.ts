import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostMaquinasModel } from '../models/sms/PostMaquinasModel';
import { PutMaquinasModel } from '../models/sms/PutMaquinasModel';
import { GetMaquinasModel } from '../models/sms/GetMaquinasModel';


@Injectable({
  providedIn: 'root'
})


export class MaquinaService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarMaquina(data: PostMaquinasModel): Observable<any> {
    const url = `${this.baseUrl}/maquinas`;
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
    return throwError('Erro ao criar maquinas. Por favor, tente novamente.');
  }

  consultarMaquinas(): Observable<GetMaquinasModel[]> {
    const url = `${this.baseUrl}/maquinas`;
    return this.http.get<GetMaquinasModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarMaquinasPorId(id: string): Observable<GetMaquinasModel> {
    const url = `${this.baseUrl}/maquinas/${id}`;
    return this.http.get<GetMaquinasModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarMaquinas(id: string, data: PutMaquinasModel): Observable<any> {
    const url = `${this.baseUrl}/maquinas`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirMaquinas(id: string): Observable<any> {
    const url = `${this.baseUrl}/maquinas/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }
}
