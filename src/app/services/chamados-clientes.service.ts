import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.relatorios';
import { catchError } from 'rxjs/operators';
import { GetChamadosModel } from '../models/chamados/GetChamadosModel';
import { PostChamadosModel } from '../models/chamados/PostChamadosModel';
import { PutChamadosModel } from '../models/chamados/PutChamadosModel';


@Injectable({
  providedIn: 'root'
})
export class ChamadosClienteService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiRelatorios;
  }

  
  consultarChamadoCliente(): Observable<GetChamadosModel[]> {
    const url = `http://chamados-jb-env.eba-8zceqpve.us-east-2.elasticbeanstalk.com/api/chamados-clientes`;
    return this.http.get<GetChamadosModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  getChamadoById(id: string): Observable<GetChamadosModel> {
    const url = `http://chamados-jb-env.eba-8zceqpve.us-east-2.elasticbeanstalk.com/api/chamados-clientes/${id}`;
    return this.http.get<GetChamadosModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }


  criarChamadoCliente(data:  PostChamadosModel): Observable<any> {
    const url = `http://chamados-jb-env.eba-8zceqpve.us-east-2.elasticbeanstalk.com/api/chamados-clientes`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  editarChamadoCliente(id: string, data:  PutChamadosModel): Observable<any> {
    const url = `http://chamados-jb-env.eba-8zceqpve.us-east-2.elasticbeanstalk.com/api/chamados-clientes/${id}`;
    return this.http.put<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('Ocorreu um erro:', error);
    // Retorna um Observable contendo o erro
    return new Observable<never>((observer) => {
      observer.error(error);
    });
  }

 
}
