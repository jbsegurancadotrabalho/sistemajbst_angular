import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';
import { DocumentosService } from 'src/app/services/documentos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetEmpresaModel } from 'src/app/models/empresadoc/GetEmpresaModel';
import { PostDocumentosFreeModel } from 'src/app/models/documentosfree/PostDocumentosFreeModel';
import { DocumentosFreeService } from 'src/app/services/documentosfree.service';

@Component({
  selector: 'app-criar-documentos-free-cenario',
  templateUrl: './criar-documentos-free-cenario.component.html',
  styleUrls: ['./criar-documentos-free-cenario.component.css']
})
export class CriarDocumentosFreeCenarioComponent implements OnInit {
  id: string | null = null;
  empresaForm!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  documentosfree: GetEmpresaModel | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private empresaService: EmpresaService,
    private documentosfreeService: DocumentosFreeService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.empresaForm = this.formBuilder.group({
      idEmpresa: ['', Validators.required],
      razaosocial: ['', Validators.required],
      cnpj: ['', Validators.required],
      setor: ['', Validators.required],
      cenario: ['', Validators.required],
      endereco: ['', Validators.required],
      servico: ['', Validators.required],
      funcoesenvolvidas: ['', Validators.required],
      equipamentos: ['', Validators.required],
      responsavel: ['', Validators.required],
      emitentes: ['', Validators.required],
      cipa: ['', Validators.required],
      brigada: ['', Validators.required],
      resgate: ['', Validators.required],
      seguranca: ['', Validators.required],
      ambulancia: ['', Validators.required],
      local_espaco_confinado: ['', Validators.required],
      autorizados_vigia: ['', Validators.required],
      autorizados_supervisor: ['', Validators.required],
      autorizados_resgate: ['', Validators.required],
      datainicio: ['', Validators.required],
      vigencia: ['', Validators.required],
    });

    if (this.id) {
      this.buscarEmpresaPorId();
    }
  }

  buscarEmpresaPorId(): void {
    this.empresaService.getEmpresaById(this.id!).subscribe(
      (data: GetEmpresaModel) => {
        this.documentosfree = data;
        this.empresaForm.patchValue({
          idEmpresa: this.documentosfree.idEmpresa,
          razaosocial: this.documentosfree.razaosocial,
          cnpj: this.documentosfree.cnpj,
      
        });
      },
      (error: any) => {
        console.error('Erro ao buscar empresa:', error);
        this.cadastroErro = 'Erro ao buscar empresa. Por favor, tente novamente.';
      }
    );
  }


  formatDate(dateString: string): string {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toISOString(); // Formatar para ISO 8601 com timezone
    } else {
      console.error('Data inválida:', dateString);
      return '';
    }
  }

  criarDocumentosFree() {
    if (this.empresaForm.valid) {
      const dataInicio = this.formatDate(this.empresaForm.value.datainicio);
      const vigencia = this.formatDate(this.empresaForm.value.vigencia);
      const novoRelatorio: PostDocumentosFreeModel = {
        ...this.empresaForm.value,
        datainicio: dataInicio,
        vigencia: vigencia
      };

      console.log('Dados enviados:', novoRelatorio);

      this.documentosfreeService.criarDocumentosFree(novoRelatorio).subscribe(
        response => {
          console.log('Documento criado com sucesso:', response);
          this.cadastroSucesso = 'Documento criado com sucesso!';
        },
        error => {
          console.error('Erro ao criar Documento:', error);
          this.cadastroErro = 'Erro ao criar Documento. Por favor, tente novamente.';
        }
      );
    } else {
      this.markFormGroupTouched(this.empresaForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}


