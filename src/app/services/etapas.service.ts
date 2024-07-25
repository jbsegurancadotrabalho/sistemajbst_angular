import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostEtapasModel } from '../models/funcao-especifica/PostEtapasModel';
import { PutEtapasModel } from '../models/funcao-especifica/PutEtapasModel';
import { GetEtapasModel } from '../models/funcao-especifica/GetEtapasModel';
import { PostEtapasDocumentosFreeModel } from '../models/funcao-especifica/PostEtapasDocumentosFreeModel';



@Injectable({
  providedIn: 'root'
})
export class EtapasService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarEtapas(data: PostEtapasModel): Observable<any> {
    const url = `${this.baseUrl}/etapas/criar-etapas-cenario`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

    // Método para criar riscos
    criarEtapasDocumentosFree(data: PostEtapasDocumentosFreeModel): Observable<any> {
      const url = `${this.baseUrl}/etapas/criar-etapas-documentos-free`;
      return this.http.post<any>(url, data)
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

  consultarEtapas(): Observable<GetEtapasModel[]> {
    const url = `${this.baseUrl}/etapas`;
    return this.http.get<GetEtapasModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarEtapasPorId(id: string): Observable<GetEtapasModel> {
    const url = `${this.baseUrl}/etapas/${id}`;
    return this.http.get<GetEtapasModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarEtapas(id: string, data: PutEtapasModel): Observable<any> {
    const url = `${this.baseUrl}/etapas/editar-etapas-cenario
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirEtapas(id: string): Observable<any> {
    const url = `${this.baseUrl}/etapas/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }
}
