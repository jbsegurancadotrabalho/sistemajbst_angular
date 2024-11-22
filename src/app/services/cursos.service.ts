import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostEpiIncluirFuncaoEspecificaModel } from '../models/sms/PostEpiIncluirFuncaoEspecificaModel';
import { PostCredenciadosModel } from '../models/credenciados/PostCredenciadosModel';
import { GetCredenciadosModel } from '../models/credenciados/GetCredenciadosModel';
import { PutCredenciadosModel } from '../models/credenciados/PutCredenciadosModel';
import { GetCursosModel } from '../models/cursos/GetCursosModel';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }


  consultarCursos(): Observable<GetCursosModel[]> {
    const url = `${this.baseUrl}/cursos`;
    return this.http.get<GetCursosModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

 
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
