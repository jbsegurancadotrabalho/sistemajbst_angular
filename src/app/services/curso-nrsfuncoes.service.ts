import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostCursoModel } from '../models/sms/PostCursoNrsFuncoesModel';
import { GetCursoModel } from '../models/sms/GetCursoNrsFuncoesModel';
import { PutCursoModel } from '../models/sms/PutCursoNrsFuncoesModel';
import { PostCriarCursoFuncaoEspecificaModel } from '../models/sms/PostCriarCursoFuncaoEspecificaModel';

@Injectable({
  providedIn: 'root'
})
export class CursoNrService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  criarCursos(data: PostCursoModel): Observable<any> {
    const url = `${this.baseUrl}/curso-de-nrs`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  criarCursosFuncoesEspecificas(data: PostCriarCursoFuncaoEspecificaModel ): Observable<any> {
    const url = `${this.baseUrl}/curso-de-nrs/incluir-funcao-especifica`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  consultarCursos(): Observable<GetCursoModel[]> {
    const url = `${this.baseUrl}/curso-de-nrs`;
    return this.http.get<GetCursoModel[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  consultarCursosPorId(id: string): Observable<GetCursoModel> {
    const url = `${this.baseUrl}/curso-de-nrs/${id}`;
    return this.http.get<GetCursoModel>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  editarCursos(id: string, data: PutCursoModel): Observable<any> {
    const url = `${this.baseUrl}/curso-de-nrs`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  excluirCursos(id: string): Observable<any> {
    const url = `${this.baseUrl}/curso-de-nrs/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      console.error(
        `Código do erro: ${error.status}, ` +
        `Mensagem: ${error.error}`);
    }
    return throwError('Erro ao realizar a operação. Por favor, tente novamente.');
  }
}