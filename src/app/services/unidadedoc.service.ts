import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PutUnidadeModel } from '../models/unidadedoc/PutUnidadeModel';
import { PostUnidadeModel } from '../models/unidadedoc/PostUnidadeModel'; 
import { GetUnidadeModel } from '../models/unidadedoc/GetUnidadeModel';
import { GetEnderecoModel } from '../models/unidadedoc/GetEnderecoModel';
import { environment } from 'src/environments/environment.relatorios';
import { catchError } from 'rxjs/operators';
import { GetEmpresaDocModel } from '../models/empresadoc/GetEmpresaDocModel';
import { PostUnidadeIncluirFuncaoDocModel } from '../models/funcaodoc/PostUnidadeIncluirFuncaoDocModel';

@Injectable({
    providedIn: 'root'
  })

  export class UnidadeDocService {
    private baseUrl: string;
  
    constructor(private http: HttpClient) {
      this.baseUrl = environment.apiRelatorios;
    }
  
 // Método para buscar todas as unidades
getTodasUnidades(): Observable<GetUnidadeModel[]> {
  const endpoint = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/unidades';
  return this.http.get<GetUnidadeModel[]>(endpoint);
}

incluirFuncaoDoc(dto: PostUnidadeIncluirFuncaoDocModel): Observable<any> {
  const url = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/unidades/incluir-funcaodoc`;
  return this.http.post(url, dto);
}

    getTodosEndereco(): Observable<GetEnderecoModel[]> {
      return this.http.get<GetEnderecoModel[]>('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/enderecos');
    }
    
    
  
    // Método para buscar dados de uma empresa pelo ID
    getUnidadeDocById(id: string): Observable<GetUnidadeModel> {
      const url = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/unidades/${id}`;
      return this.http.get<GetUnidadeModel>(url);
    }

      // Método para buscar dados de uma empresa pelo ID
      getUnidadeDocByIdDocumentos(id: string): Observable<GetUnidadeModel> {
        const url = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/api/unidades-documentos/consultar-unidade-com-associacao/${id}`;
        return this.http.get<GetUnidadeModel>(url);
      }
  

    
    getEmpresaById(id: string): Observable<GetEmpresaDocModel> {
      const url = `${this.baseUrl}/empresa-doc/${id}`; // Forma a URL corretamente
      return this.http.get<GetEmpresaDocModel>(url).pipe(
        catchError(error => {
          return this.handleError(error); // Chama o método de tratamento de erro
        })
      );
    }
    

    
  
  criarUnidadeDoc(data: any): Observable<any> {
  return this.http.post('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/unidades', data);
}

    
editarUnidadeDoc(data: any): Observable<any> {
  return this.http.put('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/unidades', data);
}
    
    private handleError(error: any): Observable<never> {
      console.error('Ocorreu um erro:', error);
      // Retorna um Observable contendo o erro
      return new Observable<never>((observer) => {
        observer.error(error);
      });
    }
  

    
  deleteUnidadeDoc(id: string): Observable<any> {
    return this.http.delete('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/unidades/' + id);
  }

  excluirFuncao(idUnidade: string, idFuncao: string): Observable<GetUnidadeModel> {
    const url = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/unidades/unidades/${idUnidade}/funcoes/${idFuncao}`;
    return this.http.delete<GetUnidadeModel>(url).pipe(
      catchError(error => {
        return this.handleError(error);
      })
    );
  }

  excluirFuncaoDaUnidade(idUnidade: string, idFuncao: string): Observable<any> {
    const url = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/unidades/${idUnidade}/funcoes/${idFuncao}`;
    return this.http.delete<any>(url).pipe(
      catchError(error => this.handleError(error))
    );
  }
   
  }
