import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostAgendaModel } from '../models/agenda/PostAgendaModel';
import { GetAgendaModel } from '../models/agenda/GetAgendaModel';
import { PutAgendaModel } from '../models/agenda/PutAgendaModel';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }



  criarAgenda(data: PostAgendaModel): Observable<any> {
    const url = `${this.baseUrl}/api/agendas`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  


  consultarAgenda(): Observable<GetAgendaModel[]> {
    const url = `${this.baseUrl}/api/agendas/todas`;
    return this.http.get<GetAgendaModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarAgendaPorId(id: string): Observable<GetAgendaModel> {
    const url = `${this.baseUrl}/api/agendas/${id}`;
    return this.http.get<GetAgendaModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarAgenda( data: PutAgendaModel): Observable<any> {
    const url = `${this.baseUrl}/api/agendas/editar
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirAgenda(id: string, nome: string ): Observable<any> {
    const url = `${this.baseUrl}/api/agendas/${id}`;
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
