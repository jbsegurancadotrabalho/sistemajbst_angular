import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostAvaliaçõesOcupacionaisFuncoesModel } from '../models/sms/PostAvaliaçõesOcupacionaisFuncoesModel';
import { PutAvaliaçõesOcupacionaisFuncoesModel } from '../models/sms/PutAvaliaçõesOcupacionaisFuncoesModel';
import { GetAvaliaçõesOcupacionaisFuncoesModel } from '../models/sms/GetAvaliaçõesOcupacionaisFuncoesModel';
import { PostAvaliacaoOcupacionalFuncaoEspecificaModel } from '../models/sms/PostAvaliacaoOcupacionalFuncaoEspecificaModel';


@Injectable({
  providedIn: 'root'
})
export class AvaliacaoFuncao {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  criarAvaliações(data: PostAvaliaçõesOcupacionaisFuncoesModel): Observable<any> {
    const url = `${this.baseUrl}/avaliacoes-ocupacionais-funcoes`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  criarAvaliacoesOcupacionaisFuncaoEspecifica(data: PostAvaliacaoOcupacionalFuncaoEspecificaModel): Observable<any> {
    const url = `${this.baseUrl}/avaliacoes-ocupacionais-funcoes/incluir-funcao-especifica`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  consultarAvaliações(): Observable<GetAvaliaçõesOcupacionaisFuncoesModel[]> {
    const url = `${this.baseUrl}/avaliacoes-ocupacionais-funcoes`;
    return this.http.get<GetAvaliaçõesOcupacionaisFuncoesModel[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  consultarAvaliaçõesPorId(id: string): Observable<GetAvaliaçõesOcupacionaisFuncoesModel> {
    const url = `${this.baseUrl}/avaliacoes-ocupacionais-funcoes/${id}`;
    return this.http.get<GetAvaliaçõesOcupacionaisFuncoesModel>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  editarAvaliações(id: string, data: PutAvaliaçõesOcupacionaisFuncoesModel): Observable<any> {
    const url = `${this.baseUrl}/avaliacoes-ocupacionais-funcoes`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  excluirAvaliações(id: string): Observable<any> {
    const url = `${this.baseUrl}/avaliacoes-ocupacionais-funcoes/${id}`;
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