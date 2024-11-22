import { GetEspecializacaoSaudeModel } from "./especializacao-saude/GetEspecializacaoSaudeModel";

export class GetFormacaoSaudeModel{
    formacao_saude: string = '';
    conselho: string = '';
    registro: string = '';
    estado: string = '';
    idFormacaoSaude: string = '';
    especializacaosaude: GetEspecializacaoSaudeModel[] = []; 

    }