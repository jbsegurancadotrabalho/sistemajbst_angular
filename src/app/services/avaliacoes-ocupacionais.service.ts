import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostEpiIncluirFuncaoEspecificaModel } from '../models/sms/PostEpiIncluirFuncaoEspecificaModel';
import { PostCredenciadosModel } from '../models/credenciados/PostCredenciadosModel';
import { GetCredenciadosModel } from '../models/credenciados/GetCredenciadosModel';
import { PutCredenciadosModel } from '../models/credenciados/PutCredenciadosModel';
import { PostAvaliacoesModel } from '../models/avaliacoes-ocupacionais/PostAvaliacoesModel';
import { GetAvaliacoesModel } from '../models/avaliacoes-ocupacionais/GetAvaliacoesModel';
import { PutAvaliacoesModel } from '../models/avaliacoes-ocupacionais/PutAvaliacoesModel';

@Injectable({
  providedIn: 'root'
})
export class AvaliacoesOcupacionaisService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }



  

  criarAvaliacoesOcupacionais(data:  PostAvaliacoesModel): Observable<any> {
    const url = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/avaliacoes`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
    
  }


  consultarAvaliações(): Observable<GetAvaliacoesModel[]> {
    const url = `${this.baseUrl}/avaliacoes`;
    return this.http.get<GetAvaliacoesModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarAvaliacoesPorId(id: string): Observable<GetAvaliacoesModel> {
    const url = `${this.baseUrl}/avaliacoes/${id}`;
    return this.http.get<GetAvaliacoesModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarAvaliacoes( data: PutAvaliacoesModel): Observable<any> {
    const url = `${this.baseUrl}/avaliacoes
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirAvaliacoes(id: string): Observable<any> {
    const url = `${this.baseUrl}/avaliacoes/${id}`;
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
