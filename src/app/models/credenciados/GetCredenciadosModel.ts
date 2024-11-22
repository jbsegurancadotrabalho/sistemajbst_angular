import { GetAvaliacoesOcupacionaisCredenciadosModel } from "../avaliacoes-ocupacionais/avaliacoes-ocupacionais-credenciados/GetAvaliacoesOcupacionaisCredenciadosModel";
import { GetCursosCredenciadosModel } from "../cursos_credenciados/GetCursosCredenciadosModel";
import { GetEnderecoModel } from "../endereco/GetEnderecoModel";
import { GetExamesCredenciadosModel } from "../exames/exames-credenciados/GetExamesCredenciadosModel";
import { GetProfissionalSaudeModel } from "../profissional-saude/GetProfissionalSaudeModel";

export class GetCredenciadosModel{
    idCredenciado: string = '';
    razaosocial: string = '';
    nomeCredenciado: string = '';
    cnpj: string = '';
    status: string = '';
    inscricaomunicipal: string = '';
    responsavel_sistema: string = '';
    email_usuario: string = '';
    senha_sistema: string = '';
    telefone_responsavel: string = '';
    examescredenciados: GetExamesCredenciadosModel[] = []; 
    profissionalsaude: GetProfissionalSaudeModel[] = []; 
    agenda: GetProfissionalSaudeModel[] = []; 
    cursoscredenciados: GetCursosCredenciadosModel[] = []; 
    avaliacoescredenciados: GetAvaliacoesOcupacionaisCredenciadosModel[] = [];
    endereco: GetEnderecoModel = new GetEnderecoModel();

}