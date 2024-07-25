import { PerfilModel } from './perfil-model';
export class AutenticarResponseModel {
    id: string = '';
    nome: string = '';
    email: string = '';
    accessToken: string = '';
    dataHoraAcesso: number = 0; // Alterado para number para representar um timestamp
    dataHoraExpiracao: number = 0; // Alterado para number para representar um timestamp
    perfil: PerfilModel = new PerfilModel();
  }
