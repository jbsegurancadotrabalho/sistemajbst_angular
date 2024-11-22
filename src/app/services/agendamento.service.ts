import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostAgendamentoModel } from '../models/agendamento/PostAgendamentoModel';
import { GetAgendamentoModel } from '../models/agendamento/GetAgendamentoModel';
import { PutAgendamentoModel } from '../models/agendamento/PutAgendamentoModel';
import { PostAgendamentoPessoaFisicaModel } from '../models/agendamento/PostAgendamentoPessoaFisicaModel';



@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
  //  this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
   this.baseUrl = 'http://localhost:8089'; // Altere para a URL da sua API


}



  criarAgendamento(data: PostAgendamentoModel): Observable<any> {
    const url = `${this.baseUrl}/agendamentos`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  criarAgendamentoPessoaFisica(data: PostAgendamentoPessoaFisicaModel): Observable<any> {
    const url = `${this.baseUrl}/agendamentos/pessoafisica`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  consultarAgendamentoPorMesFuncionario(mes: number, ano: number): Observable<GetAgendamentoModel[]> {
    const url = `${this.baseUrl}/agendamentos/funcionarios?mes=${mes}&ano=${ano}`;
    return this.http.get<GetAgendamentoModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarAgendamentoPorMesPessoaFisica(mes: number, ano: number): Observable<GetAgendamentoModel[]> {
    const url = `${this.baseUrl}/agendamentos/pessoafisica?mes=${mes}&ano=${ano}`;
    return this.http.get<GetAgendamentoModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarAgendamentoPorId(id: string): Observable<GetAgendamentoModel> {
    const url = `${this.baseUrl}/agendamentos/${id}`;
    return this.http.get<GetAgendamentoModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarAgendamento( data: PutAgendamentoModel): Observable<any> {
    const url = `${this.baseUrl}/agendamentos
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirAgendamento(id: string, nome: string ): Observable<any> {
    const url = `${this.baseUrl}/agendamentos/${id}`;
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
