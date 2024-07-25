import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostDocumentosFreeModel } from '../models/documentosfree/PostDocumentosFreeModel';
import { PutDocumentosFreeModel } from '../models/documentosfree/PutDocumentosFreeModel';
import { GetDocumentosFreeModel } from '../models/documentosfree/GetDocumentosFreeModel';

@Injectable({
  providedIn: 'root'
})
export class DocumentosFreeService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarDocumentosFree(data: PostDocumentosFreeModel): Observable<any> {
    const url = `${this.baseUrl}/api/documentos-free`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

    // Método para editar um risco
    editarDocumentosFree( data: PutDocumentosFreeModel): Observable<any> {
        const url = `${this.baseUrl}/api/documentos-free`;
        return this.http.put<any>(url, data)
          .pipe(
            catchError(this.handleError) // Tratar erros
          );
      }

      consultarDocumentosFree(): Observable<GetDocumentosFreeModel[]> {
        const url = `${this.baseUrl}/api/documentos-free`;
        return this.http.get<GetDocumentosFreeModel[]>(url)
          .pipe(
            catchError(this.handleError) // Tratar erros
          );
      }

      consultarDocumentosPorId(id: string): Observable<GetDocumentosFreeModel> {
        const url = `${this.baseUrl}/api/documentos-free/${id}`;
        return this.http.get<GetDocumentosFreeModel>(url)
          .pipe(
            catchError(this.handleError) // Tratar erros
          );
      }
    

      excluirDocumentosFree
      (id: string): Observable<any> {
        const url = `${this.baseUrl}/api/documentos-free/${id}`;
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