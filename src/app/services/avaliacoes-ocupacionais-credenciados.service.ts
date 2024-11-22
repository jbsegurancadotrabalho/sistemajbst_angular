import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostAvaliacoesOcupacionaisCredenciadosModel } from '../models/avaliacoes-ocupacionais/avaliacoes-ocupacionais-credenciados/PostAvaliacoesOcupacionaisCredenciadosModel';
import { GetAvaliacoesOcupacionaisCredenciadosModel } from '../models/avaliacoes-ocupacionais/avaliacoes-ocupacionais-credenciados/GetAvaliacoesOcupacionaisCredenciadosModel';
import { PutAvaliacoesOcupacionaisCredenciadosModel } from '../models/avaliacoes-ocupacionais/avaliacoes-ocupacionais-credenciados/PutAvaliacoesOcupacionaisCredenciadosModel';

@Injectable({
  providedIn: 'root'
})
export class AvaliacoesOcupacionaisCredenciadosService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }



  

  criarAvaliacoesOcupacionaisCredenciados(data:  PostAvaliacoesOcupacionaisCredenciadosModel): Observable<any> {
    const url = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/avaliacoes-credenciados`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
    
  }


  consultarAvaliaçõesCredenciados(): Observable<GetAvaliacoesOcupacionaisCredenciadosModel[]> {
    const url = `${this.baseUrl}/avaliacoes-credenciados`;
    return this.http.get<GetAvaliacoesOcupacionaisCredenciadosModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarAvaliacoesCredenciadosPorId(id: string): Observable<GetAvaliacoesOcupacionaisCredenciadosModel> {
    const url = `${this.baseUrl}/avaliacoes-credenciados/${id}`;
    return this.http.get<GetAvaliacoesOcupacionaisCredenciadosModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarAvaliacoesCredenciados( data: PutAvaliacoesOcupacionaisCredenciadosModel): Observable<any> {
    const url = `${this.baseUrl}/avaliacoes-credenciados
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirAvaliacoesCredenciados(id: string): Observable<any> {
    const url = `${this.baseUrl}/avaliacoes-credenciados/${id}`;
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
