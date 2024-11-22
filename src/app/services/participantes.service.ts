import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostParticipanteModel } from '../models/eventos/participantes/PostParticipanteModel';
import { GetParticipanteModel } from '../models/eventos/participantes/GetParticipanteModel';
import { PutParticipanteModel } from '../models/eventos/participantes/PutParticipanteModel';



@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8089'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarParticipante(data: PostParticipanteModel): Observable<any> {
    const url = `${this.baseUrl}/participantes`;
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

  consultarParticipantes(): Observable<GetParticipanteModel[]> {
    const url = `${this.baseUrl}/participantes`;
    return this.http.get<GetParticipanteModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }


  consultarParticipantesPorId(id: string): Observable<GetParticipanteModel> {
    const url = `${this.baseUrl}/participantes/${id}`;
    return this.http.get<GetParticipanteModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarParticipante( data: PutParticipanteModel): Observable<any> {
    const url = `${this.baseUrl}/participantes`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirParticipante(id: string): Observable<any> {
    const url = `${this.baseUrl}/participantes/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }
}
