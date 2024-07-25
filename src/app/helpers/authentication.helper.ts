import { Injectable } from '@angular/core';
import { AutenticarResponseModel } from '../models/usuarios/autenticar-response.model';
import { decryptData, encryptData } from '../utils/crypto.util';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationHelper {
  // Chave dos dados na local storage
  auth: string = 'auth';
  userIdKey: string = 'userId'; // Nova chave para o ID do usuário

  /*
    Método para salvar os dados do usuário autenticado
    na local storage do navegador
  */
    signIn(model: AutenticarResponseModel): void {
      // Converter o objeto em JSON e criptografar os dados
      const data = encryptData(JSON.stringify(model), environment.cryptoKey);
  
      // Salvar os dados na local storage
      localStorage.setItem(this.auth, data);
  
      // Salvar o ID do usuário criptografado na local storage
      const encryptedUserId = encryptData(model.id, environment.cryptoKey);
      localStorage.setItem(this.userIdKey, encryptedUserId);
    }
  /*
    Método para verificar se o usuário está autenticado
    (Os dados da local storage são válidos)
  */
  isSignedIn(): boolean {
    // Capturar os dados da local storage
    const model = this.getData();
    if (model != null) {
      // Verificar se o token ainda é válido (data de expiração)
      const dataAtual = new Date();
      const dataExpiracao = new Date(model.dataHoraExpiracao);
      if (dataAtual <= dataExpiracao) {
        return true; // Usuário está autenticado!
      } else {
        this.signOut(); // Logout!
      }
    }

    return false;
  }

  /*
    Método para retornar os dados da local storage
  */
  getData(): AutenticarResponseModel | null {
    // Ler os dados gravados
    const data = localStorage.getItem(this.auth);
    // Verificar se não é vazio
    if (data != null) {
      // Descriptografar os dados e converter para objeto
      const model = JSON.parse(decryptData(data, environment.cryptoKey));
      return model; // Retornando o objeto
    }

    return null;
  }

  /*
    Método para retornar o ID do usuário
  */
    getUserId(): string | null {
      const encryptedUserId = localStorage.getItem(this.userIdKey);
  
      // Verificar se não é vazio
      if (encryptedUserId != null) {
        // Descriptografar os dados
        const userId = decryptData(encryptedUserId, environment.cryptoKey);
        return userId;
      }
  
      return null;
    }
  

  /*
    Método para apagar os dados da local storage
  */
  signOut(): void {
    localStorage.removeItem(this.auth);
    localStorage.removeItem(this.userIdKey); // Remover o ID do usuário
  }
}
