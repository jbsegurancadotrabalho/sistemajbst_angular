import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostExamesCredenciadosModel } from '../models/exames/exames-credenciados/PostExamesCredenciadosModel';
import { GetExamesCredenciadosModel } from '../models/exames/exames-credenciados/GetExamesCredenciadosModel';
import { PutExamesCredenciadosModel } from '../models/exames/exames-credenciados/PutExamesCredenciadosModel';


@Injectable({
  providedIn: 'root'
})
export class ExamesCredenciadosService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }



  criarExamesCredenciados(data: PostExamesCredenciadosModel): Observable<any> {
    const url = `${this.baseUrl}/exames-credenciados`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  


  consultarExamesCredenciados(): Observable<GetExamesCredenciadosModel[]> {
    const url = `${this.baseUrl}/exames-credenciados`;
    return this.http.get<GetExamesCredenciadosModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarExamesCredenciadosPorId(id: string): Observable<GetExamesCredenciadosModel> {
    const url = `${this.baseUrl}/exames-credenciados/${id}`;
    return this.http.get<GetExamesCredenciadosModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarExamesCredenciados( data: PutExamesCredenciadosModel): Observable<any> {
    const url = `${this.baseUrl}/exames-credenciados
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirExamesCredenciados(id: string, nome: string ): Observable<any> {
    const url = `${this.baseUrl}/exames-credenciados/${id}`;
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
