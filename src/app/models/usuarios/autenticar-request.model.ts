// autenticar-request.model.ts
export interface AutenticarRequestModel {
    email: string;
    senha: string;
    id?: string; // Torna o 'id' opcional
    perfil?: string; // Torna o 'perfil' opcional
  }
  