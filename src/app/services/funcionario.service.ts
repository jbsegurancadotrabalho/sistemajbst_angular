import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PutFuncionarioModel } from '../models/Funcionario/PutFuncionarioModel';
import { GetFuncionarioModel } from '../models/Funcionario/GetFuncionarioModel';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
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


  // Método para editar um risco
  editar(id: string, data: PutFuncionarioModel): Observable<any> {
    const url = `${this.baseUrl}/api/funcionario`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  
  consultarFuncionariosPorEmpresaECpf(idEmpresa: string, cpf: string): Observable<GetFuncionarioModel[]> {
    const url = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/funcionarios/buscar`;
    const params = new HttpParams()
      .set('idEmpresa', idEmpresa)
      .set('cpf', cpf);

    return this.http.get<GetFuncionarioModel[]>(url, { params })
      .pipe(
        catchError(error => {
          console.error('Erro ao buscar funcionários:', error);
          return throwError(() => error);
        })
      );
  }

  consultarFuncionarioPorId(id: string): Observable<GetFuncionarioModel> {
    const url = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/funcionarios/relatorios/${id}`;
    return this.http.get<GetFuncionarioModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarFuncionarioEmpresaPorId(id: string): Observable<GetFuncionarioModel> {
    const url = `http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/funcionario/buscar-funcionarios-empresa-por-id/${id}`;
    return this.http.get<GetFuncionarioModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarFuncionarios(): Observable<GetFuncionarioModel> {
    const url = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/funcionarios`;
    return this.http.get<GetFuncionarioModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarFuncionariosLocalHost(): Observable<GetFuncionarioModel[]> {
    const url = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/funcionarios`;
    return this.http.get<GetFuncionarioModel []>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }
  

  excluirEpi(id: string): Observable<any> {
    const url = `${this.baseUrl}/epi/excluir/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }
}
