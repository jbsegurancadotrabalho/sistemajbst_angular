  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { ActivatedRoute } from '@angular/router';
  import { NgSelectConfig } from '@ng-select/ng-select';
  import { AnamneseService } from 'src/app/services/anamnese.service';
  import { AtendimentoService } from 'src/app/services/atendimento.service';
  import { PutAtendimentoModel } from 'src/app/models/atendimento/PutAtendimentoModel';
  import { GetAtendimentoModel } from 'src/app/models/atendimento/GetAtendimentoModel';
  import { PostAnamneseModel } from 'src/app/models/anamnese/PostAnamneseModel';

  @Component({
    selector: 'app-criar-anamnese',
    templateUrl: './criar-anamnese.component.html',
    styleUrls: ['./criar-anamnese.component.css']
  })
  export class CriarAnamneseComponent  implements OnInit {
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
        idAtendimento: ['', Validators.required],
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
        this.consultarAtendimentoPorId();
      }
    }

    consultarAtendimentoPorId(): void {
      if (this.id) {
        this.atendimentoService.consultarAtendimentoPorId(this.id).subscribe(
          (data: GetAtendimentoModel) => {
            this.formularioAnamnese.patchValue({
              idAtendimento: data.idAtendimento,
            });
          },
          (error: any) => {
            console.error('Erro ao buscar Atendimento:', error);
          }
        );
      }
    }

    criarAnamnese() {
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
      if (this.formularioAnamnese.valid) {
        // Converte os valores do formulário para o modelo PostAnamneseModel
        const anamnese: PostAnamneseModel = this.formularioAnamnese.getRawValue() as PostAnamneseModel;
    
        // Log do modelo PostAnamneseModel para verificar se inclui todos os campos
        console.log('Dados do PostAnamneseModel a serem enviados:', anamnese);
    
        // Enviar os dados para o serviço
        this.AnamneseService.criarAnamnese(anamnese).subscribe(
          response => {
            // Log para confirmar que a anamnese foi criada com sucesso
            console.log('Anamnese criada com sucesso:', response);
            this.cadastroSucesso = 'Anamnese criada com sucesso!';
          },
          error => {
            // Log para capturar e exibir erros
            console.error('Erro ao criar Anamnese:', error);
            this.cadastroErro = 'Erro ao criar Anamnese. Por favor, tente novamente.';
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