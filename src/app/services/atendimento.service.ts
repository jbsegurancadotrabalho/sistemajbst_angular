import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostAgendaModel } from '../models/agenda/PostAgendaModel';
import { GetAgendaModel } from '../models/agenda/GetAgendaModel';
import { PutAgendaModel } from '../models/agenda/PutAgendaModel';
import { PostAtendimentoModel } from '../models/atendimento/PostAtendimentoModel';
import { GetAtendimentoModel } from '../models/atendimento/GetAtendimentoModel';
import { PutAtendimentoModel } from '../models/atendimento/PutAtendimentoModel';


@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8089'; 
  }



  criarAtendimento(data: PostAtendimentoModel): Observable<any> {
    const url = `${this.baseUrl}/atendimentos`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  


  consultarAtendimento(): Observable<GetAtendimentoModel[]> {
    const url = `http://localhost:8089/atendimentos`;
    return this.http.get<GetAtendimentoModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarAtendimentoPorId(id: string): Observable<GetAtendimentoModel> {
    const url = `${this.baseUrl}/atendimentos/${id}`;
    return this.http.get<GetAtendimentoModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }



  editarAtendimento(id: string, data: PutAtendimentoModel): Observable<any> {
    const url = `${this.baseUrl}/atendimentos/${id}`;
    return this.http.put(url, data)
    .pipe(
      catchError(this.handleError)
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
