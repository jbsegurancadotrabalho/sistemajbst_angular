import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostProfissionalSaudeModel } from '../models/profissional-saude/PostProfissionalSaudeModel';
import { GetProfissionalSaudeModel } from '../models/profissional-saude/GetProfissionalSaudeModel';
import { PutProfissionalSaudeModel } from '../models/profissional-saude/PutProfissionalSaudeModel';


@Injectable({
  providedIn: 'root'
})
export class ProfissionalSaudeService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }



  criarProfissionalSaude(data: PostProfissionalSaudeModel): Observable<any> {
    const url = `${this.baseUrl}/profissionais-saude`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  


  consultarProfissionalSaude(): Observable<GetProfissionalSaudeModel[]> {
    const url = `${this.baseUrl}/profissionais-saude`;
    return this.http.get<GetProfissionalSaudeModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarProfissionalSaudePorId(id: string): Observable<GetProfissionalSaudeModel> {
    const url = `${this.baseUrl}/profissionais-saude/${id}`;
    return this.http.get<GetProfissionalSaudeModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarProfissionalSaude( data: PutProfissionalSaudeModel): Observable<any> {
    const url = `${this.baseUrl}/profissionais-saude
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirProfissionalSaude(id: string, nome: string ): Observable<any> {
    const url = `${this.baseUrl}/profissionais-saude/${id}`;
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
