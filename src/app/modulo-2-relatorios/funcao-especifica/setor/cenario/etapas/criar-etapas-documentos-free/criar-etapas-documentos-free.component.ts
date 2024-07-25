import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentosFreeService } from 'src/app/services/documentosfree.service'; 
import { PostEtapasModel } from 'src/app/models/funcao-especifica/PostEtapasModel';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDocumentosFreeModel } from 'src/app/models/documentosfree/GetDocumentosFreeModel';
import { EtapasService } from 'src/app/services/etapas.service';
import { PostEtapasDocumentosFreeModel } from 'src/app/models/funcao-especifica/PostEtapasDocumentosFreeModel';


@Component({
  selector: 'app-criar-etapas-documentos-free',
  templateUrl: './criar-etapas-documentos-free.component.html',
  styleUrls: ['./criar-etapas-documentos-free.component.css']
})
export class CriarEtapasDocumentosFreeComponent {


  formularioEtapas!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  documentosfree: GetDocumentosFreeModel | null = null;
  id: string | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private DocumentosFreeService : DocumentosFreeService,
    private EtapasService : EtapasService ,
    private route: ActivatedRoute, 
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioEtapas = this.formBuilder.group({
      numero_etapa: ['', Validators.required],
      nome_etapa: ['', Validators.required],
      descricao_etapa: ['', Validators.required],
      acoes: ['', Validators.required],
      idDocumentosFree: ['', Validators.required]
    });
    if (this.id) {
      this.buscarUnidadePorId();
    }
  }

  buscarUnidadePorId(): void {
    this.DocumentosFreeService.consultarDocumentosPorId(this.id!).subscribe(
      (data:  GetDocumentosFreeModel ) => {
        this.documentosfree = data;
        this.formularioEtapas.patchValue({
          idDocumentosFree: this.documentosfree.idDocumentosFree,
   
        });
      },
      (error: any) => {
        console.error('Erro ao buscar unidade:', error);
      }
    );
  }

  criarEtapasDocumentosFree() {
    // Verifique se o formulário é válido
    if (this.formularioEtapas.valid) {
      const novoRisco: PostEtapasDocumentosFreeModel = this.formularioEtapas.value as PostEtapasDocumentosFreeModel;
      this.EtapasService.criarEtapasDocumentosFree(novoRisco).subscribe(
        response => {
          console.log('Etapa criada com sucesso:', response);
          this.cadastroSucesso = 'Etapa criada com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar Etapa:', error);
          this.cadastroErro = 'Erro ao criar Etapa. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this.formularioEtapas);
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
}
