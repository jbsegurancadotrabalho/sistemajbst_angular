import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { PostAsoModel } from 'src/app/models/aso/PostAsoModel';
import { GetAtendimentoModel } from 'src/app/models/atendimento/GetAtendimentoModel';
import { AsoService } from 'src/app/services/aso.service'; 
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViaCepService } from 'src/app/services/viacep.service';

@Component({
  selector: 'app-criar-aso',
  templateUrl: './criar-aso.component.html',
  styleUrls: ['./criar-aso.component.css']
})
export class CriarAsoComponent {

  formularioAso: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private config: NgSelectConfig,
    private atendimentoService: AtendimentoService,
    private AsoService : AsoService,
    private viaCepService: ViaCepService


  ) {
    this.formularioAso = this.formBuilder.group({
      idAtendimento: ['', Validators.required],
      dia_hora: ['', Validators.required],
      razaosocial: ['', Validators.required],
      nomefantasia: ['', Validators.required],
      cnpj: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      complemento: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      localidade: ['', Validators.required],
      uf: ['', Validators.required],
      nome: ['', Validators.required],
      data_nascimento_funcionario: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      funcao: ['', Validators.required],
      setor: ['', Validators.required],
      nome_profissionalsaude: ['', Validators.required],
      cpf1: ['', Validators.required],
      formacao_saude: ['', Validators.required],
      conselho: ['', Validators.required],
      registro: ['', Validators.required],
      estado: ['', Validators.required],
      medico_trabalho: ['', Validators.required],
crm_medico_trabalho: ['', Validators.required],
cpf_medico_trabalho: ['', Validators.required],
      tipo_aso: ['', Validators.required],
      exame_clinico: ['', Validators.required],
      data_exame_clinico: ['', Validators.required],
      acuidadevisual: ['', Validators.required],
      data_acuidadevisual: ['', Validators.required],
      avaliacao_psicossocial: ['', Validators.required],
      data_avaliacao_psicossocial: ['', Validators.required],
      eletrocardiograma: ['', Validators.required],
      data_eletrocardiograma: ['', Validators.required],
      eletroencefalograma: ['', Validators.required],
      data_eletroencefalograma: ['', Validators.required],
      espirometria: ['', Validators.required],
      data_espirometria: ['', Validators.required],
      glicemia: ['', Validators.required],
      data_glicemia: ['', Validators.required],
      audiometria: ['', Validators.required],
      data_audiometria: ['', Validators.required],
      fator_rh: ['', Validators.required],
      data_fator_rh: ['', Validators.required],
      grupo_sanguineo: ['', Validators.required],
      data_grupo_sanguineo: ['', Validators.required],
      hemograma_completo: ['', Validators.required],
      data_hemograma_completo: ['', Validators.required],
      testeromberg: ['', Validators.required],
      data_testeromberg: ['', Validators.required],
      raio_x_lombo_sacra: ['', Validators.required],
      data_raio_x_lombo_sacra: ['', Validators.required],
      raio_x_joelho_direito: ['', Validators.required],
      data_raio_x_joelho_direito: ['', Validators.required],
      raio_x_joelho_esquerdo: ['', Validators.required],
      data_raio_x_joelho_esquerdo: ['', Validators.required],
      raio_x_joelho_coxofemorais_direito: ['', Validators.required],
      data_raio_x_joelho_coxofemorais_direito: ['', Validators.required],
      raio_x_joelho_coxofemorais_esquerdo: ['', Validators.required],
      data_raio_x_joelho_coxofemorais_esquerdo: ['', Validators.required],
      raio_x_ombro: ['', Validators.required],
      data_raio_x_ombro: ['', Validators.required],
      acido_s_fenil_mercapturico: ['', Validators.required],
      data_acido_s_fenilmercapturico: ['', Validators.required],
      acido_s_acido_hipurico: ['', Validators.required],
      data_acido_hipurico: ['', Validators.required],
      acido_trans_muconico: ['', Validators.required],
      data_acido_trans_muconico: ['', Validators.required],
      parecer_medico: ['', Validators.required],
      parecer_medico_altura: ['', Validators.required],
      parecer_medico_confinado: ['', Validators.required],
      parecer_medico_atividade_subaquatica: ['', Validators.required],
      observacoes: ['', Validators.required],           
      
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

 

  async buscarCep(): Promise<void> {
    const cep = this.formularioAso.get('cep')?.value;
    if (cep) {
      try {
        const dados = await this.viaCepService.buscarCep(cep).toPromise();
        if (!dados.erro) {
          this.formularioAso.patchValue({
            logradouro: dados.logradouro,
            bairro: dados.bairro,
            localidade: dados.localidade,
            uf: dados.uf
          });
        } else {
          this.cadastroErro = 'CEP não encontrado.';
        }
      } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
        this.cadastroErro = 'Erro ao buscar o CEP. Verifique o CEP digitado.';
      }
    }
  }
  

  consultarAtendimentoPorId(): void {
    if (this.id) {
      this.atendimentoService.consultarAtendimentoPorId(this.id).subscribe(
        (data: GetAtendimentoModel) => {
          this.formularioAso.patchValue({
            idAtendimento: data.idAtendimento,
          });
        },
        (error: any) => {
          console.error('Erro ao buscar Atendimento:', error);
        }
      );
    }
  }

  criarAso() {
    // Formatar todas as datas que precisam ser formatadas
    const dataFormatada = (dateString: string) => this.formatDate(dateString);
  
    // Atualizar os campos de data no formulário com as datas formatadas
    this.formularioAso.patchValue({
      dia_hora: dataFormatada(this.formularioAso.value.dia_hora),
      data_nascimento_funcionario: dataFormatada(this.formularioAso.value.data_nascimento_funcionario),
      data_exame_clinico: dataFormatada(this.formularioAso.value.data_exame_clinico),
      data_acuidadevisual: dataFormatada(this.formularioAso.value.data_acuidadevisual),
      data_avaliacao_psicossocial: dataFormatada(this.formularioAso.value.data_avaliacao_psicossocial),
      data_eletrocardiograma: dataFormatada(this.formularioAso.value.data_eletrocardiograma),
      data_eletroencefalograma: dataFormatada(this.formularioAso.value.data_eletroencefalograma),
      data_espirometria: dataFormatada(this.formularioAso.value.data_espirometria),
      data_glicemia: dataFormatada(this.formularioAso.value.data_glicemia),
      data_audiometria: dataFormatada(this.formularioAso.value.data_audiometria),
      data_fator_rh: dataFormatada(this.formularioAso.value.data_fator_rh),
      data_grupo_sanguineo: dataFormatada(this.formularioAso.value.data_grupo_sanguineo),
      data_hemograma_completo: dataFormatada(this.formularioAso.value.data_hemograma_completo),
      data_testeromberg: dataFormatada(this.formularioAso.value.data_testeromberg),
      data_raio_x_lombo_sacra: dataFormatada(this.formularioAso.value.data_raio_x_lombo_sacra),
      data_raio_x_joelho_direito: dataFormatada(this.formularioAso.value.data_raio_x_joelho_direito),
      data_raio_x_joelho_esquerdo: dataFormatada(this.formularioAso.value.data_raio_x_joelho_esquerdo),
      data_raio_x_joelho_coxofemorais_direito: dataFormatada(this.formularioAso.value.data_raio_x_joelho_coxofemorais_direito),
      data_raio_x_joelho_coxofemorais_esquerdo: dataFormatada(this.formularioAso.value.data_raio_x_joelho_coxofemorais_esquerdo),
      data_raio_x_ombro: dataFormatada(this.formularioAso.value.data_raio_x_ombro),
      data_acido_s_fenilmercapturico: dataFormatada(this.formularioAso.value.data_acido_s_fenilmercapturico),
      data_acido_hipurico: dataFormatada(this.formularioAso.value.data_acido_hipurico),
      data_acido_trans_muconico: dataFormatada(this.formularioAso.value.data_acido_trans_muconico),
    });
  
    console.log('Valores do formulário antes da conversão para PostAsoModel:', this.formularioAso.value);
  
    // Verificar se o formulário é válido
    if (this.formularioAso.valid) {
      // Converte os valores do formulário para o modelo PostAsoModel
      const aso: PostAsoModel = this.formularioAso.getRawValue() as PostAsoModel;
  
      // Log do modelo PostAsoModel para verificar se inclui todos os campos
      console.log('Dados do PostAsoModel a serem enviados:', aso);
  
      // Enviar os dados para o serviço
      this.AsoService.criarAso(aso).subscribe(
        response => {
          // Log para confirmar que o Aso foi criado com sucesso
          console.log('Aso criado com sucesso:', response);
          this.cadastroSucesso = 'Aso criado com sucesso!';
        },
        error => {
          // Log para capturar e exibir erros
          console.error('Erro ao criar Aso:', error);
          this.cadastroErro = 'Erro ao criar Aso. Por favor, tente novamente.';
        }
      );
    } else {
      // Log para indicar que o formulário é inválido
      console.error('O formulário é inválido. Por favor, verifique os campos obrigatórios.');
      this.markFormGroupTouched(this.formularioAso);
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