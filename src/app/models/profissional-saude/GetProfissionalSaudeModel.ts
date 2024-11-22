import { GetFormacaoSaudeModel } from "./formacao/GetFormacaoSaudeModel";

export class GetProfissionalSaudeModel{
    id_profissionalsaude: string = '';   
    nome_profissionalsaude: string = '';
    rg: string = '';
    cpf: string = '';
    telefone_1: string = '';
    telefone_2: string = '';
    email: string = '';
    senha_sistema: string = '';
    formacaosaude: GetFormacaoSaudeModel[] = []; 

    }