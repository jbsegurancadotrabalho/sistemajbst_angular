  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable,  throwError  } from 'rxjs';
  import { environment } from 'src/environments/environment.relatorios';
  import { catchError } from 'rxjs/operators';


  @Injectable({
      providedIn: 'root'
    })

    export class FuncaoDocService {
      private baseUrl: string;
    
      constructor(private http: HttpClient) {
        this.baseUrl = environment.apiRelatorios;
      }

      buscarFuncaoPorId(id: string): Observable<any> {
        return this.http.get(`http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/funcoesdoc/${id}`);
      }
    
      // Método para buscar todas as funções
      buscarTodasFuncoes(): Observable<any> {
        return this.http.get(`http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/funcoesdoc`);
      }
    
    criarFuncaoDoc(data: any): Observable<any> {
    return this.http.post('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/funcoesdoc', data);
  }
    
  editarFuncaoDoc(data: any): Observable<any> {
    return this.http.put('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/funcoesdoc', data);
  }
  
  deleteFuncaoDoc(id: string): Observable<any> {
    return this.http.delete(`http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/funcoesdoc/${id}`);
  }

  excluirPerigoFuncao(funcaoId: string, perigoIds: string): Observable<any> {
    return this.http.delete(`http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/funcoesdoc/${funcaoId}/perigos/${perigoIds}`);

  }

    
  buscarFuncaoPorNome(nome_da_funcao: string): Observable<any> {
    return this.http.get('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/funcoesdoc/buscar', { params: { funcaoNome: nome_da_funcao } })
      .pipe(
        catchError(error => {
          console.error('Erro ao buscar função:', error);
          return throwError(error);
        })
      );
  }



    }
    