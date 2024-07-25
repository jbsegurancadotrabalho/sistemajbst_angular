import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PutEmpresaDocModel } from '../models/empresadoc/PutEmpresaDocModel';
import { PostEmpresaDocModel } from '../models/empresadoc/PostEmpresaDocModel';
import { GetEmpresaDocModel } from '../models/empresadoc/GetEmpresaDocModel';
import { environment } from 'src/environments/environment.relatorios';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpresaDocService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiRelatorios;
  }

  // Método para buscar todas as empresas
  getTodasEmpresas(): Observable<GetEmpresaDocModel[]> {
    return this.http.get<GetEmpresaDocModel[]>(this.baseUrl);
  }

  // Método para buscar dados de uma empresa pelo ID
  getEmpresaDocById(id: string): Observable<GetEmpresaDocModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<GetEmpresaDocModel>(url);
  }

  getEmpresaById(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url).pipe(
      catchError(error => {
        return this.handleError(error); // Chama o método de tratamento de erro
      })
    );
  }
  
  deleteEmpresaDoc(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url).pipe(
      catchError(error => {
        return this.handleError(error); // Chama o método de tratamento de erro
      })
    );
  }
  

  criarEmpresaDoc(empresaDoc: PostEmpresaDocModel): Observable<GetEmpresaDocModel> {
    return this.http.post<GetEmpresaDocModel>(this.baseUrl, empresaDoc);
  }
  // Método para editar uma empresa existente
 
  editarEmpresaDoc(empresaDoc: PutEmpresaDocModel): Observable<GetEmpresaDocModel> {
    return this.http.put<GetEmpresaDocModel>(this.baseUrl, empresaDoc);
  }
  
  private handleError(error: any): Observable<never> {
    console.error('Ocorreu um erro:', error);
    // Retorna um Observable contendo o erro
    return new Observable<never>((observer) => {
      observer.error(error);
    });
  }

 
}
