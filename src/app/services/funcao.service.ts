import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.relatorios';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncaoService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiRelatorios;
  }

  // Método para buscar função por nome
  buscarFuncaoPorNome(funcao: string): Observable<any> {
    return this.http.get(`http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/funcao/buscar`, { params: { funcao } })
      .pipe(
        catchError(error => {
          console.error('Erro ao buscar função:', error);
          return throwError(error);
        })
      );
  }
}
