import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.relatorios';
import { catchError } from 'rxjs/operators';
import { GetEmpresaModel } from '../models/empresadoc/GetEmpresaModel';
import { PostEmpresaClienteModel } from '../models/empresa/PostEmpresaClienteModel';
import { PutEmpresaClienteModel } from '../models/empresa/PutEmpresaClienteModel';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiRelatorios;
  }

  
  consultarEmpresa(): Observable<GetEmpresaModel[]> {
    const url = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/empresas/`;
    return this.http.get<GetEmpresaModel[]>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  getEmpresaById(id: string): Observable<GetEmpresaModel> {
    const url = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/empresas/${id}`;
    return this.http.get<GetEmpresaModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarUnidadesDasEmpresas(id: string): Observable<GetEmpresaModel> {
    const url = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/empresas/consultar-todas-unidades/${id}`;
    return this.http.get<GetEmpresaModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  getEmpresaPorId(id: string): Observable<GetEmpresaModel> {
    const url = `http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/empresa/consultar-funcionario-da-empresa/${id}`;
    return this.http.get<GetEmpresaModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  consultarEmpresaPorId(id: string): Observable<GetEmpresaModel> {
    const url = `http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/empresa/${id}`;
    return this.http.get<GetEmpresaModel>(url)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }


  criarEmpresa(data:  PostEmpresaClienteModel): Observable<any> {
    const url = `http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/empresa/criar-empresa-cliente`;
    return this.http.post<any>(url, data)
      .pipe(
        catchError(this.handleError) // Tratar erros
      );
  }

  editarEmpresa(data:  PutEmpresaClienteModel): Observable<any> {
    const url = `http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/empresa/editar-empresa-cliente`;
    
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
