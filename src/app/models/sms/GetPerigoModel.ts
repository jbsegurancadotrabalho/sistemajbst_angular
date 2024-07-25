import { GetDanosModel } from "./GetDanosModel";


export class GetPerigoModel{
idPerigo: string = '';
 nomePerigo: string = '';
  causasPerigo: string = '';
  consequencias_perigo: string = '';
  medidasPreventivas: string = ''; 
  classificacao: string = '';
  danos: GetDanosModel[] = []; // Adicionando a propriedade danos do tipo GetDanosModel[]

 }