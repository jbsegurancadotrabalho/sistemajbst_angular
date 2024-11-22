  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';
  import { PostAsoModel } from '../models/aso/PostAsoModel';
  import { GetAsoModel } from '../models/aso/GetAsoModel';
  import { PutAsoModel } from '../models/aso/PutAsoModel';



  @Injectable({
    providedIn: 'root'
  })
  export class AsoService {
    private baseUrl: string;

    constructor(private http: HttpClient) {
      this.baseUrl = 'http://localhost:8089'; 
  }



    criarAso(data: PostAsoModel): Observable<any> {
      const url = `${this.baseUrl}/aso`;
      return this.http.post<any>(url, data)
        .pipe(
          catchError(this.handleError)
        );
    }
    


    consultarAso(): Observable<GetAsoModel[]> {
      const url = `${this.baseUrl}/aso`;
      return this.http.get<GetAsoModel[]>(url)
        .pipe(
          catchError(this.handleError) // Tratar erros
        );
    }

    consultarAsoPorId(id: string): Observable<GetAsoModel> {
      const url = `${this.baseUrl}/aso/${id}`;
      return this.http.get<GetAsoModel>(url)
        .pipe(
          catchError(this.handleError) // Tratar erros
        );
    }

    editarAso(id: string, data: PutAsoModel): Observable<any> {
      const url = `${this.baseUrl}/aso/${id}`;
      return this.http.put<any>(url, data)
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

      consultarAsoPorMesFuncionario(mes: number, ano: number): Observable<GetAsoModel[]> {
        const url = `${this.baseUrl}/aso/aso-por-mes-ano?mes=${mes}&ano=${ano}`;
        return this.http.get<GetAsoModel[]>(url)
          .pipe(
            catchError(this.handleError) // Tratar erros
          );
      }
    
  }
