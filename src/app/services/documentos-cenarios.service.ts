import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostDocumentosModel } from '../models/relatorios/PostDocumentosModel';
import { PutDocumentosModel } from '../models/relatorios/PutDocumentosModel';
import { GetDocumentosModel } from '../models/relatorios/GetDocumentosModel';
import { PostDocumentosFuncionariosModel } from '../models/relatorios/PostDocumentosFuncionariosModel';
import { PostDocumentosCenarioModel } from '../models/relatorios/PostDocumentosCenarioModel';
import { PutDocumentosCenariosModel } from '../models/relatorios/PutDocumentosCenariosModel';
import { GetDocumentosCenariosModel } from '../models/relatorios/GetDocumentosCenariosModel';

@Injectable({
  providedIn: 'root'
})
export class DocumentosCenariosService {
  
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

 

  criarDocumentosCenarios(data: PostDocumentosCenarioModel): Observable<any> {
    const url = `${this.baseUrl}/associacoesCenarios`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }
    // Método para editar um risco
    editarDocumentosCenarios( data: PutDocumentosCenariosModel): Observable<any> {
        const url = `${this.baseUrl}/associacoesCenarios`;
        return this.http.put<any>(url, data)
          .pipe(
            catchError(this.handleError) // Tratar erros
          );
      }

  consultarDocumentos(): Observable<GetDocumentosCenariosModel[]> {
    const url = `${this.baseUrl}/associacoesCenarios`;
    return this.http.get<GetDocumentosModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarDocumentosPorId(id: string): Observable<GetDocumentosModel> {
    const url = `${this.baseUrl}/associacoesCenarios/${id}`;
    return this.http.get<GetDocumentosModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  
  gerarDocumentosPorId(id: string): Observable<GetDocumentosModel> {
    const url = `${this.baseUrl}/api/unidades-documentos/consultar-associacao-com-unidade/${id}`;
    return this.http.get<GetDocumentosModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }


  excluirDocumentos(id: string): Observable<any> {
    const url = `${this.baseUrl}/associacoes/associacoes/${id}`;
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
