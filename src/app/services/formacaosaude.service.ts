import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostFormacaoSaudeModel } from '../models/profissional-saude/formacao/PostFormacaoSaudeModel';
import { GetFormacaoSaudeModel } from '../models/profissional-saude/formacao/GetFormacaoSaudeModel';
import { PutFormacaoSaudeModel } from '../models/profissional-saude/formacao/PutFormacaoSaudeModel';



@Injectable({
  providedIn: 'root'
})
export class FormacaoSaudeService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }



  criarFormacaoSaude(data: PostFormacaoSaudeModel): Observable<any> {
    const url = `${this.baseUrl}/formacoes-saude`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  


  consultarFormacaoSaude(): Observable<GetFormacaoSaudeModel[]> {
    const url = `${this.baseUrl}/formacoes-saude`;
    return this.http.get<GetFormacaoSaudeModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarFormacaoSaudePorId(id: string): Observable<GetFormacaoSaudeModel> {
    const url = `${this.baseUrl}/formacoes-saude/${id}`;
    return this.http.get<GetFormacaoSaudeModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarFormacaoSaude( data: PutFormacaoSaudeModel): Observable<any> {
    const url = `${this.baseUrl}/formacoes-saude
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirFormacaoSaude(id: string, nome: string ): Observable<any> {
    const url = `${this.baseUrl}/formacoes-saude/${id}`;
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
