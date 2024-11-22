import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostAnamneseModel } from '../models/anamnese/PostAnamneseModel';
import { GetAnamneseModel } from '../models/anamnese/GetAnamneseModel';
import { PutAnamneseModel } from '../models/anamnese/PutAnamneseModel';


@Injectable({
  providedIn: 'root'
})
export class AnamneseService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8089'; 
}



  criarAnamnese(data: PostAnamneseModel): Observable<any> {
    const url = `${this.baseUrl}/anamneses`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  


  consultarAnamnese(): Observable<GetAnamneseModel[]> {
    const url = `${this.baseUrl}/anamneses`;
    return this.http.get<GetAnamneseModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarAnamnesePorId(id: string): Observable<GetAnamneseModel> {
    const url = `${this.baseUrl}/anamneses/${id}`;
    return this.http.get<GetAnamneseModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  editarAnamnese(id: string, data: PutAnamneseModel): Observable<any> {
    const url = `${this.baseUrl}/anamneses/${id}`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }
  

  consultarAnamnesePorMesFuncionario(mes: number, ano: number): Observable<GetAnamneseModel[]> {
    const url = `${this.baseUrl}/anamneses/anamnese-por-mes-ano?mes=${mes}&ano=${ano}`;
    return this.http.get<GetAnamneseModel[]>(url)
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
