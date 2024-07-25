import { HttpClient } from '@angular/common/http';
import { CriarContaRequestModel } from '../models/usuarios/criarconta-request.model';
import { Observable } from 'rxjs';
import { CriarContaResponseModel } from '../models/usuarios/criarconta-response.model';
import { Injectable } from '@angular/core';
import { AutenticarRequestModel } from '../models/usuarios/autenticar-request.model';
import { AutenticarResponseModel } from '../models/usuarios/autenticar-response.model';
import { environment } from 'src/environments/environment';
import { GetUsuarioModel } from '../models/usuarios/GetUsuarioModel';
import { catchError } from 'rxjs/operators';
import { PostEsqueciMinhaSenhaModel } from '../models/usuarios/PostEsqueciMinhaSenhaModel';
import { GetEsqueciMinhaSenhaModel } from '../models/usuarios/GetEsqueciMinhaSenhaModel';


@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  //construtor
  constructor(
    //injeção de dependência
    private httpClient: HttpClient
  ) {}

  autenticar(
    model: AutenticarRequestModel
  ): Observable<AutenticarResponseModel> {
    //Requisição POST para o serviço
    return this.httpClient.post<AutenticarResponseModel>(
      `http://usuario-jb-env.eba-2udmmd4g.us-east-1.elasticbeanstalk.com/api/usuarios/autenticar`,
      model
    );
  }


  EsqueciMinhaSenha(
    model: PostEsqueciMinhaSenhaModel
  ): Observable<GetEsqueciMinhaSenhaModel> {
    //Requisição POST para o serviço
    return this.httpClient.post<GetEsqueciMinhaSenhaModel>(
      `http://usuario-jb-env.eba-2udmmd4g.us-east-1.elasticbeanstalk.com/api/usuarios/recuperar-senha`,
      model
    );
  }

  consultarUsuarioPorId(id: string): Observable<GetUsuarioModel> {
    const url = `http://usuario-jb-env.eba-2udmmd4g.us-east-1.elasticbeanstalk.com/api/usuarios/${id}`;
    return this.httpClient.get<GetUsuarioModel>(url)
      .pipe(
        catchError(this.handleError)
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
