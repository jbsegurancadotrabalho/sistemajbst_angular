import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.relatorios';
import { catchError } from 'rxjs/operators';
import { GetSetorModel } from '../models/funcao-especifica/GetSetorModel'; 
import { PostSetorModel } from '../models/funcao-especifica/PostSetorModel';
import { PutSetorModel } from '../models/funcao-especifica/PutSetorModel'; 

@Injectable({
    providedIn: 'root'
  })

  export class SetorService {
    private baseUrl: string;
  
    constructor(private http: HttpClient) {
      this.baseUrl = environment.apiRelatorios;
    }
  
consultarTodosOsSetores(): Observable<GetSetorModel[]> {
  const endpoint = 'http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/api/gho-setor';
  return this.http.get<GetSetorModel[]>(endpoint);
}
      
consultarSetorPorId(id: string): Observable<GetSetorModel> {
       const endpoint = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/api/gho-setor/${id}`;
      return this.http.get<GetSetorModel>(endpoint);
    }
 
  criarSetor(data: any): Observable<any> {
  return this.http.post('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/api/gho-setor', data);
}
    
editarSetor(data: any): Observable<any> {
  return this.http.put('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/api/gho-setor', data);
}
    
  
deleteSetor(id: string): Observable<any> {
  const endpoint = `http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/api/gho-setor/${id}`;
  return this.http.delete<any>(endpoint)
    .pipe(catchError(this.handleError));
}

  

  private handleError(error: any): Observable<never> {
    console.error('Ocorreu um erro:', error);
    // Retorna um Observable contendo o erro
    return new Observable<never>((observer) => {
      observer.error(error);
    });
  }
   
  }
  