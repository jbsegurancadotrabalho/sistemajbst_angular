import { Component, OnInit } from '@angular/core';
import { DocumentosFreeService } from 'src/app/services/documentosfree.service'; 
import { GetDocumentosFreeModel } from 'src/app/models/documentosfree/GetDocumentosFreeModel'; 
import { Observable } from 'rxjs';
import { FuncaoDocService } from 'src/app/services/funcaodoc.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PutDocumentosFreeModel } from 'src/app/models/documentosfree/PutDocumentosFreeModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-documentos-free-cenario',
  templateUrl: './editar-documentos-free-cenario.component.html',
  styleUrls: ['./editar-documentos-free-cenario.component.css']
})
export class EditarDocumentosFreeCenarioComponent implements OnInit {
  id: string | null = null;
  documentosfree: PutDocumentosFreeModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  documentosForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private DocumentosFreeService: DocumentosFreeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.documentosForm = this.formBuilder.group({
      idDocumentosFree: ['', Validators.required],
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
      this.buscarDocumentosPorId();
    }
  }

  buscarDocumentosPorId(): void {
    this.DocumentosFreeService.consultarDocumentosPorId(this.id!).subscribe(
      (data: PutDocumentosFreeModel) => {
        this.documentosfree = data;
        this.documentosForm.patchValue({
          idDocumentosFree: this.documentosfree.idDocumentosFree,
          razaosocial: this.documentosfree.razaosocial,
          cnpj: this.documentosfree.cnpj,
          setor: this.documentosfree.setor,
          cenario: this.documentosfree.cenario,
          endereco: this.documentosfree.endereco,
          servico: this.documentosfree.servico,
          funcoesenvolvidas: this.documentosfree.funcoesenvolvidas,
          equipamentos: this.documentosfree.equipamentos,
          responsavel: this.documentosfree.responsavel,
          emitentes: this.documentosfree.emitentes,
          cipa: this.documentosfree.cipa,
          brigada: this.documentosfree.brigada,
          resgate: this.documentosfree.resgate,
          seguranca: this.documentosfree.seguranca,
          ambulancia: this.documentosfree.ambulancia,
          local_espaco_confinado: this.documentosfree.local_espaco_confinado,
          autorizados_vigia: this.documentosfree.autorizados_vigia,
          autorizados_supervisor: this.documentosfree.autorizados_supervisor,
          autorizados_resgate: this.documentosfree.autorizados_resgate,
          datainicio: this.formatDate(this.documentosfree.datainicio),
          vigencia: this.formatDate(this.documentosfree.vigencia),
        });
      },
      (error: any) => {
        console.error('Erro ao buscar EPI:', error);
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

  enviarEdicao(): void {
    if (this.documentosForm.valid) {
      const dataInicio = this.formatDate(this.documentosForm.value.datainicio);
      const vigencia = this.formatDate(this.documentosForm.value.vigencia);
      const novoRelatorio: PutDocumentosFreeModel = {
        ...this.documentosForm.value,
        datainicio: dataInicio,
        vigencia: vigencia
      };

      console.log('Dados enviados:', novoRelatorio);

      this.DocumentosFreeService.editarDocumentosFree(novoRelatorio).subscribe(
        response => {
          console.log('Documento editado com sucesso:', response);
          this.cadastroSucesso = 'Documento editado com sucesso!';
        },
        error => {
          console.error('Erro ao editar Documento:', error);
          this.cadastroErro = 'Erro ao editar Documento. Por favor, tente novamente.';
        }
      );
    } else {
      this.markFormGroupTouched(this.documentosForm);
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

