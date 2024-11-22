import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostEpiIncluirFuncaoEspecificaModel } from '../models/sms/PostEpiIncluirFuncaoEspecificaModel';
import { PostCredenciadosModel } from '../models/credenciados/PostCredenciadosModel';
import { GetCredenciadosModel } from '../models/credenciados/GetCredenciadosModel';
import { PutCredenciadosModel } from '../models/credenciados/PutCredenciadosModel';
import { PostCursosCredenciadosModel } from '../models/cursos_credenciados/PostCursosCredenciadosModel';
import { GetCursosCredenciadosModel } from '../models/cursos_credenciados/GetCursosCredenciadosModel';
import { PutCursosCredenciadosModel } from '../models/cursos_credenciados/PutCursosCredenciadosModel';

@Injectable({
  providedIn: 'root'
})
export class CursosCredenciadoService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }



  criarCursoCredenciado(data: PostCursosCredenciadosModel): Observable<any> {
    const url = `${this.baseUrl}/cursos-credenciados`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  



  consultarCursoCredenciado(): Observable<GetCursosCredenciadosModel[]> {
    const url = `${this.baseUrl}/cursos-credenciados`;
    return this.http.get<GetCursosCredenciadosModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarCursoCredenciadoPorId(id: string): Observable<GetCursosCredenciadosModel> {
    const url = `${this.baseUrl}/cursos-credenciados/${id}`;
    return this.http.get<GetCursosCredenciadosModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarCursoCredenciado( data: PutCursosCredenciadosModel): Observable<any> {
    const url = `${this.baseUrl}/cursos-credenciados
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirCursoCredenciado(id: string): Observable<any> {
    const url = `${this.baseUrl}/cursos-credenciados/${id}`;
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
