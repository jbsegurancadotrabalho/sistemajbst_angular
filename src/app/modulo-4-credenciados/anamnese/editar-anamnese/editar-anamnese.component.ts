import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { AnamneseService } from 'src/app/services/anamnese.service';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { PutAtendimentoModel } from 'src/app/models/atendimento/PutAtendimentoModel';
import { GetAnamneseModel } from 'src/app/models/anamnese/GetAnamneseModel';
import { PostAnamneseModel } from 'src/app/models/anamnese/PostAnamneseModel';
import { PutAnamneseModel } from 'src/app/models/anamnese/PutAnamneseModel';

@Component({
  selector: 'app-editar-anamnese',
  templateUrl: './editar-anamnese.component.html',
  styleUrls: ['./editar-anamnese.component.css']
})
export class EditarAnamneseComponent  implements OnInit {
  formularioAnamnese: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private config: NgSelectConfig,
    private atendimentoService: AtendimentoService,
    private AnamneseService: AnamneseService,

  ) {
    this.formularioAnamnese = this.formBuilder.group({
      idAnamnese: ['', Validators.required],
      dia_hora: ['', Validators.required],
      empresa: ['', Validators.required],
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      data_admissao: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      orgaoemissor: ['', Validators.required],
      setor: ['', Validators.required],
      funcao: ['', Validators.required],
      tipo_aso: ['', Validators.required],
      tubercolose: ['', Validators.required],
      pressaoalta: ['', Validators.required],
      alcoolismo: ['', Validators.required],
      cancer: ['', Validators.required],
      diabetes: ['', Validators.required],
      infarto: ['', Validators.required],
      doencao_nervosa: ['', Validators.required],
      doenca_da_tireoide: ['', Validators.required],
      alergias: ['', Validators.required],
      bebidas_alcoolicas: ['', Validators.required],
      atividade_fisica: ['', Validators.required],
      tabagismo: ['', Validators.required],
      transporte: ['', Validators.required],
      tempo_deslocamento: ['', Validators.required],
      leitura: ['', Validators.required],
      cinema_teatro: ['', Validators.required],
      videogame: ['', Validators.required],
      isntrumentos: ['', Validators.required],
      canto: ['', Validators.required],
      tv: ['', Validators.required],
      basquete_volei: ['', Validators.required],
      modelagem: ['', Validators.required],
      musica_com_head_fone: ['', Validators.required],
      musica_sem_head_fone: ['', Validators.required],
      futebol: ['', Validators.required],
      lutas: ['', Validators.required],
      musculacao: ['', Validators.required],
      jardinagem: ['', Validators.required],
      tenis: ['', Validators.required],
      jogos_computador: ['', Validators.required],
      navegar_internet: ['', Validators.required],
      outros: ['', Validators.required],
      historia_ocup1: ['', Validators.required],
      historia_ocup2: ['', Validators.required],
      historia_ocup3: ['', Validators.required],
      historia_ocup4: ['', Validators.required],
      historia_ocup5: ['', Validators.required],
      historia_ocup6: ['', Validators.required],
      oculos: ['', Validators.required],
      corrigir_miopia: ['', Validators.required],
      corrigir_antigmatismo: ['', Validators.required],
      corrigir_hipermetropia: ['', Validators.required],
      corrigir_vista_cansada: ['', Validators.required],
      corrigir_nao_sei: ['', Validators.required],
      cistite: ['', Validators.required],
      diabete: ['', Validators.required],
      tonteiras: ['', Validators.required],
      renite_sinusite: ['', Validators.required],
      varises: ['', Validators.required],
      dor_de_cabeca: ['', Validators.required],
      prisao_ventre: ['', Validators.required],
      hemorraidas: ['', Validators.required],
      pressao_alta: ['', Validators.required],
      hernia: ['', Validators.required],
      dor_no_peito: ['', Validators.required],
      dor_nas_pernas: ['', Validators.required],
      resfriados: ['', Validators.required],
      problemas_tireoides: ['', Validators.required],
      epilepsia_convulcoes: ['', Validators.required],
      asma_bronquite: ['', Validators.required],
      tubercolose1: ['', Validators.required],
      ulcera: ['', Validators.required],
      tosse_cronica: ['', Validators.required],
      pedra_nos_rins: ['', Validators.required],
      remedios: ['', Validators.required],
      hepatite_a: ['', Validators.required],
      hepatite_b: ['', Validators.required],
      hepatite_c: ['', Validators.required],
      hepatite_nao_sei: ['', Validators.required],
      operacao: ['', Validators.required],
      tipo_operacao: ['', Validators.required],
      ano_operacao: ['', Validators.required],
      quebra_osso: ['', Validators.required],
      quebra_osso_onde: ['', Validators.required],
      dor_dedo_direito: ['', Validators.required],
      dor_dedo_esquerdo: ['', Validators.required],
      dor_maos_direito: ['', Validators.required],
      dor_maos_esquerdo: ['', Validators.required],
      dor_punho_direito: ['', Validators.required],
      dor_punho_esquerdo: ['', Validators.required],
      dor_cotovelo_direito: ['', Validators.required],
      dor_cotovelo_esquerdo: ['', Validators.required],
      dor_braco_direito: ['', Validators.required],
      dor_braco_esquerdo: ['', Validators.required],
      dor_ombro_direito: ['', Validators.required],
      dor_ombro_esquerdo: ['', Validators.required],
      dor_joelho_direito: ['', Validators.required],
      dor_joelho_esquerdo: ['', Validators.required],
      dor_pescoco: ['', Validators.required],
      dor_costas_superior: ['', Validators.required],
      dor_costas_medias: ['', Validators.required],
      dor_costas_inferior: ['', Validators.required],
      doenca_sexualmente_transmissivel: ['', Validators.required],
      prostata: ['', Validators.required],
      anticosepsional: ['', Validators.required],
      aborto: ['', Validators.required],
      preventivo_no_ano: ['', Validators.required],
      data_mestruacao: ['', Validators.required],
      tensao_mestruacao: ['', Validators.required],
      status_mestruacao: ['', Validators.required],
      colicas: ['', Validators.required],
      gravidez: ['', Validators.required],
      pressao_arterial: ['', Validators.required],
      frequencia_cardiaca: ['', Validators.required],
      batimentos_por_minuto: ['', Validators.required],
      icm: ['', Validators.required],
      altura: ['', Validators.required],
      peso: ['', Validators.required],
      ganglios: ['', Validators.required],
      dentes: ['', Validators.required],
      tireoide: ['', Validators.required],
      orofaringe: ['', Validators.required],
      acuidade_visual: ['', Validators.required],
      ritimo_cardiaco: ['', Validators.required],
      ritimo_cardiaco_obs: ['', Validators.required],
      sopros: ['', Validators.required],
      pulmoes: ['', Validators.required],
      abdomen: ['', Validators.required],
      maos_punhos: ['', Validators.required],
      perda_forca_de_preensao: ['', Validators.required],
      tinel: ['', Validators.required],
      phalen: ['', Validators.required],
      filkenstein: ['', Validators.required],
      cotovelo_direito: ['', Validators.required],
      cotovelo_esquerdo: ['', Validators.required],
      ombro_direito: ['', Validators.required],
      ombro_esquerdo: ['', Validators.required],
      coluna: ['', Validators.required],
      coluna_outros: ['', Validators.required],
      aparelho_muscular: ['', Validators.required],
      membros_inferiores: ['', Validators.required],
      membros_inferiores_obs: ['', Validators.required],
      joelho_direito: ['', Validators.required],
      joelho_esquerdo: ['', Validators.required],
      exames_complementares: ['', Validators.required],
      risco_quimico: ['', Validators.required],
      risco_fisico: ['', Validators.required],
      risco_biologico: ['', Validators.required],
      risco_ergonomico: ['', Validators.required],
      risco_especifico: ['', Validators.required],
      exame_complementar: ['', Validators.required],
      parecer_especialista: ['', Validators.required],
      encaminhamento_perito: ['', Validators.required],
      cat: ['', Validators.required],
      observacoes: ['', Validators.required],
      status_anamnese: ['', Validators.required]
      
    });
    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.consultarAnamnesePorId();
    }
  }

consultarAnamnesePorId(): void {
if (this.id) {
this.AnamneseService.consultarAnamnesePorId(this.id).subscribe(
(data: GetAnamneseModel) => {
 this.formularioAnamnese.patchValue({
idAnamnese:data.idAnamnese,
dia_hora: data.dia_hora,
empresa: data.empresa,
nome: data.nome,
telefone: data.telefone,
data_admissao: data.data_admissao,
data_nascimento: data.data_nascimento,
cpf: data.cpf,
rg: data.rg,
orgaoemissor: data.orgaoemissor,
setor: data.setor,
funcao: data.funcao,
tipo_aso: data.tipo_aso,
tubercolose: data.tubercolose,
pressaoalta: data.pressaoalta,
alcoolismo: data.alcoolismo,
cancer: data.cancer,
diabetes: data.diabetes,
infarto: data.infarto,
doencao_nervosa: data.doencao_nervosa,
doenca_da_tireoide: data.doenca_da_tireoide,
alergias: data.alergias,
bebidas_alcoolicas: data.bebidas_alcoolicas,
atividade_fisica: data.atividade_fisica,
tabagismo: data.tabagismo,
transporte: data.transporte,
tempo_deslocamento: data.tempo_deslocamento,
leitura: data.leitura,
cinema_teatro: data.cinema_teatro,
videogame: data.videogame,
instrumentos: data.instrumentos,
canto: data.canto,
tv: data.tv,
basquete_volei: data.basquete_volei,
modelagem: data.modelagem,
musica_com_head_fone: data.musica_com_head_fone,
musica_sem_head_fone: data.musica_sem_head_fone,
futebol: data.futebol,
lutas: data.lutas,
musculacao: data.musculacao,
jardinagem: data.jardinagem,
tenis: data.tenis,
jogos_computador: data.jogos_computador,
navegar_internet: data.navegar_internet,
outros: data.outros,
historia_ocup1: data.historia_ocup1,
historia_ocup2: data.historia_ocup2,
historia_ocup3: data.historia_ocup3,
historia_ocup4: data.historia_ocup4,
historia_ocup5: data.historia_ocup5,
historia_ocup6: data.historia_ocup6,
oculos: data.oculos,
corrigir_miopia: data.corrigir_miopia,
corrigir_antigmatismo: data.corrigir_antigmatismo,
corrigir_hipermetropia: data.corrigir_hipermetropia,
corrigir_vista_cansada: data.corrigir_vista_cansada,
corrigir_nao_sei: data.corrigir_nao_sei,
cistite: data.cistite,
diabete: data.diabete,
tonteiras: data.tonteiras,
renite_sinusite: data.renite_sinusite,
varises: data.varises,
dor_de_cabeca: data.dor_de_cabeca,
prisao_ventre: data.prisao_ventre,
hemorraidas: data.hemorraidas,
pressao_alta: data.pressao_alta,
hernia: data.hernia,
dor_no_peito: data.dor_no_peito,
dor_nas_pernas: data.dor_nas_pernas,
resfriados: data.resfriados,
problemas_tireoides: data.problemas_tireoides,
epilepsia_convulcoes: data.epilepsia_convulcoes,
asma_bronquite: data.asma_bronquite,
tubercolose1: data.tubercolose1,
ulcera: data.ulcera,
tosse_cronica: data.tosse_cronica,
pedra_nos_rins: data.pedra_nos_rins,
remedios: data.remedios,
hepatite_a: data.hepatite_a,
hepatite_b: data.hepatite_b,
hepatite_c: data.hepatite_c,
hepatite_nao_sei: data.hepatite_nao_sei,
operacao: data.operacao,
tipo_operacao: data.tipo_operacao,
ano_operacao: data.ano_operacao,
quebra_osso: data.quebra_osso,
quebra_osso_onde: data.quebra_osso_onde,
dor_dedo_direito: data.dor_dedo_direito,
dor_dedo_esquerdo: data.dor_dedo_esquerdo,
dor_maos_direito: data.dor_maos_direito,
dor_maos_esquerdo: data.dor_maos_esquerdo,
dor_punho_direito: data.dor_punho_direito,
dor_punho_esquerdo: data.dor_punho_esquerdo,
dor_cotovelo_direito: data.dor_cotovelo_direito,
dor_cotovelo_esquerdo: data.dor_cotovelo_esquerdo,
dor_braco_direito: data.dor_braco_direito,
dor_braco_esquerdo: data.dor_braco_esquerdo,
dor_ombro_direito: data.dor_ombro_direito,
dor_ombro_esquerdo: data.dor_ombro_esquerdo,
dor_joelho_direito: data.dor_joelho_direito,
dor_joelho_esquerdo: data.dor_joelho_esquerdo,
dor_pescoco: data.dor_pescoco,
dor_costas_superior: data.dor_costas_superior,
dor_costas_medias: data.dor_costas_medias,
dor_costas_inferior: data.dor_costas_inferior,
doenca_sexualmente_transmissivel: data.doenca_sexualmente_transmissivel,
prostata: data.prostata,
anticosepsional: data.anticosepsional,
aborto: data.aborto,
preventivo_no_ano: data.preventivo_no_ano,
data_mestruacao: data.data_mestruacao,
tensao_mestruacao: data.tensao_mestruacao,
status_mestruacao: data.status_mestruacao,
colicas: data.colicas,
gravidez: data.gravidez,
pressao_arterial: data.pressao_arterial,
frequencia_cardiaca: data.frequencia_cardiaca,
batimentos_por_minuto: data.batimentos_por_minuto,
icm: data.icm,
altura: data.altura,
peso: data.peso,
ganglios: data.ganglios,
dentes: data.dentes,
tireoide: data.tireoide,
orofaringe: data.orofaringe,
acuidade_visual: data.acuidade_visual,
ritimo_cardiaco: data.ritimo_cardiaco,
ritimo_cardiaco_obs: data.ritimo_cardiaco_obs,
sopros: data.sopros,
pulmoes: data.pulmoes,
abdomen: data.abdomen,
maos_punhos: data.maos_punhos,
perda_forca_de_preensao: data.perda_forca_de_preensao,
tinel: data.tinel,
phalen: data.phalen,
filkenstein: data.filkenstein,
cotovelo_direito: data.cotovelo_direito,
cotovelo_esquerdo: data.cotovelo_esquerdo,
ombro_direito: data.ombro_direito,
ombro_esquerdo: data.ombro_esquerdo,
coluna: data.coluna,
coluna_outros: data.coluna_outros,
aparelho_muscular: data.aparelho_muscular,
membros_inferiores: data.membros_inferiores,
membros_inferiores_obs: data.membros_inferiores_obs,
joelho_direito: data.joelho_direito,
joelho_esquerdo: data.joelho_esquerdo,
exames_complementares: data.exames_complementares,
risco_quimico: data.risco_quimico,
risco_fisico: data.risco_fisico,
risco_biologico: data.risco_biologico,
risco_ergonomico: data.risco_ergonomico,
risco_especifico: data.risco_especifico,
exame_complementar: data.exame_complementar,
parecer_especialista: data.parecer_especialista,
encaminhamento_perito: data.encaminhamento_perito,
cat: data.cat,
observacoes: data.observacoes,
status_anamnese: data.status_anamnese

          });
        },
        (error: any) => {
          console.error('Erro ao buscar Atendimento:', error);
        }
      );
    }
  }

  editarAnamnese() {
    // Log inicial para verificar se a função está sendo chamada
    console.log('Função criarAnamnese() foi chamada.');
  
    // Formatar a data e atualizar o formulário
    const dataFormatada = this.formatDate(this.formularioAnamnese.value.dia_hora);
    this.formularioAnamnese.patchValue({
      dia_hora: dataFormatada
    });
  
    // Exibir o valor formatado no console
    console.log('Data formatada após formatação:', dataFormatada);
  
    // Logar os valores atuais do formulário antes da conversão
    console.log('Valores do formulário antes da conversão para PostAnamneseModel:', this.formularioAnamnese.value);
  
    // Verificar se o formulário é válido
    if (this.formularioAnamnese.valid && this.id) {
      // Converte os valores do formulário para o modelo PostAnamneseModel
      const anamnese: PutAnamneseModel = this.formularioAnamnese.getRawValue() as PutAnamneseModel;
  
      // Log do modelo PostAnamneseModel para verificar se inclui todos os campos
      console.log('Dados do PostAnamneseModel a serem enviados:', anamnese);
  
      // Enviar os dados para o serviço
      this.AnamneseService.editarAnamnese(this.id, anamnese).subscribe(
        response => {
          // Log para confirmar que a anamnese foi criada com sucesso
          console.log('Anamnese editada com sucesso:', response);
          this.cadastroSucesso = 'Anamnese editada com sucesso!';
        },
        error => {
          // Log para capturar e exibir erros
          console.error('Erro ao editar Anamnese:', error);
          this.cadastroErro = 'Erro ao criar Editar. Por favor, tente novamente.';
        }
      );
    } else {
      // Log para indicar que o formulário é inválido
      console.error('O formulário é inválido. Por favor, verifique os campos obrigatórios.');
      this.markFormGroupTouched(this.formularioAnamnese);
    }
  }
  

  // Função para marcar todos os campos do formulário como tocados
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  } 

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toISOString(); // Formatar para ISO 8601
    } else {
      console.error('Data inválida:', dateString);
      return ''; // Ou outra ação apropriada
    }
  }
}
