import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostEspecializacaoSaudeModel } from '../models/profissional-saude/formacao/especializacao-saude/PostEspecializacaoSaudeModel';
import { GetEspecializacaoSaudeModel } from '../models/profissional-saude/formacao/especializacao-saude/GetEspecializacaoSaudeModel';
import { PutEspecializacaoSaudeModel } from '../models/profissional-saude/formacao/especializacao-saude/PutEspecializacaoSaudeModel';



@Injectable({
  providedIn: 'root'
})
export class EspecializacaoSaudeService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }



  criarEspecializacaoSaude(data: PostEspecializacaoSaudeModel): Observable<any> {
    const url = `${this.baseUrl}/api/especializacoes`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  


  consultarEspecializacaoSaude(): Observable<GetEspecializacaoSaudeModel[]> {
    const url = `${this.baseUrl}/api/especializacoes`;
    return this.http.get<GetEspecializacaoSaudeModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarEspecializacaoSaudePorId(id: string): Observable<GetEspecializacaoSaudeModel> {
    const url = `${this.baseUrl}/api/especializacoes/${id}`;
    return this.http.get<GetEspecializacaoSaudeModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarEspecializacaoSaude( data: PutEspecializacaoSaudeModel): Observable<any> {
    const url = `${this.baseUrl}/api/especializacoes
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirEspecializacaoSaude(id: string, nome: string ): Observable<any> {
    const url = `${this.baseUrl}/api/especializacoes/${id}`;
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
