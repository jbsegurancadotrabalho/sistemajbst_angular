import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostRelatoriosModel } from '../models/relatorios/PostRelatoriosModel';
import { PutRelatoriosModel } from '../models/relatorios/PutRelatoriosModel';
import { GetRelatoriosModel } from '../models/relatorios/GetRelatoriosModel';

@Injectable({
  providedIn: 'root'
})
export class RelatoriosService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }


  criarRelatorios(data: PostRelatoriosModel): Observable<any> {
    const url = `${this.baseUrl}/relatorios`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }


    // Método para editar um risco
    editarRelatorios( data: PutRelatoriosModel): Observable<any> {
        const url = `${this.baseUrl}/relatorios`;
        return this.http.put<any>(url, data)
          .pipe(
            catchError(this.handleError) // Tratar erros
          );
      }
    

  consultarRelatorios(): Observable<GetRelatoriosModel[]> {
    const url = `${this.baseUrl}/relatorios`;
    return this.http.get<GetRelatoriosModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarRelatoriosPorId(id: string): Observable<GetRelatoriosModel> {
    const url = `${this.baseUrl}/relatorios/${id}`;
    return this.http.get<GetRelatoriosModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }


  excluirRelatorios(id: string): Observable<any> {
    const url = `${this.baseUrl}/relatorios/${id}`;
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
