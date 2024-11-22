import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostEventosModel } from '../models/eventos/PostEventosModel';
import { GetEventosModel } from '../models/eventos/GetEventosModel';
import { PutEventosModel } from '../models/eventos/PutEventosModel';



@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8089'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarEvento(data: PostEventosModel): Observable<any> {
    const url = `${this.baseUrl}/eventos`;
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

  consultarEventos(): Observable<GetEventosModel[]> {
    const url = `${this.baseUrl}/eventos`;
    return this.http.get<GetEventosModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarEventosMesAtual(): Observable<GetEventosModel[]> {
    const url = `${this.baseUrl}/eventos/mes-atual`;
    return this.http.get<GetEventosModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarEventosPorId(id: string): Observable<GetEventosModel> {
    const url = `${this.baseUrl}/eventos/${id}`;
    return this.http.get<GetEventosModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarEventos(id: string, data: PutEventosModel): Observable<any> {
    const url = `${this.baseUrl}/eventos/${id}`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirEventos(id: string): Observable<any> {
    const url = `${this.baseUrl}/eventos/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }
}
