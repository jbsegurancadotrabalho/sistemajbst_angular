import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostEpiIncluirFuncaoEspecificaModel } from '../models/sms/PostEpiIncluirFuncaoEspecificaModel';
import { PostCredenciadosModel } from '../models/credenciados/PostCredenciadosModel';
import { GetCredenciadosModel } from '../models/credenciados/GetCredenciadosModel';
import { PutCredenciadosModel } from '../models/credenciados/PutCredenciadosModel';
import { PostExamesModel } from '../models/exames/PostExamesModel';
import { GetExamesModel } from '../models/exames/GetExamesModel';
import { PutExamesModel } from '../models/exames/PutExamesModel';
import { GetExamesPorLocalidadeModel } from '../models/exames/GetExamesPorLocalidadeModel.ts/GetExamesPorLocalidadeModel';

@Injectable({
  providedIn: 'root'
})
export class ExamesService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }



  criarExames(data: PostExamesModel): Observable<any> {
    const url = `${this.baseUrl}/exames`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  


  consultarExames(): Observable<GetExamesModel[]> {
    const url = `${this.baseUrl}/exames`;
    return this.http.get<GetExamesModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarExamesPorLocalidade(nomeExame: string, localidade: string, uf: string, bairro: string): Observable<GetExamesPorLocalidadeModel[]> {
    const url = `${this.baseUrl}/exames/1?nomeExame=${encodeURIComponent(nomeExame)}&localidade=${encodeURIComponent(localidade)}&uf=${encodeURIComponent(uf)}&bairro=${encodeURIComponent(bairro)}`;
    return this.http.get<GetExamesPorLocalidadeModel[]>(url).pipe(
        // Add any necessary transformations here if the response needs to be altered
        catchError(this.handleError) // Handle errors
    );
}

  

  consultarExamesPorId(id: string): Observable<GetExamesModel> {
    const url = `${this.baseUrl}/exames/${id}`;
    return this.http.get<GetExamesModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  // Método para editar um risco
  editarExames( data: PutExamesModel): Observable<any> {
    const url = `${this.baseUrl}/exames
    `;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  excluirExames(id: string, nome: string ): Observable<any> {
    const url = `${this.baseUrl}/exames/${id}`;
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
