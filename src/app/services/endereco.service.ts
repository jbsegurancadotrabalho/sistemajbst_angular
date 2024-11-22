import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostEnderecoModel } from '../models/endereco/PostEnderecoModel';
import { PutEnderecoModel } from '../models/endereco/PutEnderecoModel';
import { GetEnderecoModel } from '../models/unidadedoc/GetEnderecoModel';
import { GetUfModel } from '../models/endereco/GetUfModel';


@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com'; // Altere para a URL da sua API
  }

  // Método para criar riscos
  criarEndereco(data: PostEnderecoModel): Observable<any> {
    const url = `http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/endereco`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }


  // Método para editar um risco
  editarEndereco( data: PutEnderecoModel): Observable<any> {
    const url = `http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/endereco`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }



  consultarEndereco(): Observable<GetEnderecoModel[]> {
    const url = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/enderecos`;
    return this.http.get<GetEnderecoModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarUfEndereco(): Observable<GetUfModel[]> {
    const url = `http://localhost:8089/enderecos/ufs`;
    return this.http.get<GetUfModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarLocalidadeEndereco(): Observable<GetEnderecoModel[]> {
    const url = `http://localhost:8089/enderecos/localidades`;
    return this.http.get<GetEnderecoModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarBairroEndereco(): Observable<GetEnderecoModel[]> {
    const url = `http://localhost:8089/enderecos/bairros`;
    return this.http.get<GetEnderecoModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }



  consultarEnderecoPorId(id: string): Observable<GetEnderecoModel> {
    const url = `${this.baseUrl}/enderecos/${id}`;
    return this.http.get<GetEnderecoModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }


  excluirEndereco(id: string): Observable<any> {
    const url = `${this.baseUrl}/enderecos/${id}`;
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
