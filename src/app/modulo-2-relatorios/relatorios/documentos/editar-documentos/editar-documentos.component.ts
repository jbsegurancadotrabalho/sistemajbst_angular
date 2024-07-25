import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDocumentosModel } from 'src/app/models/relatorios/GetDocumentosModel';
import { GetRelatoriosModel } from 'src/app/models/relatorios/GetRelatoriosModel';
import { PutDocumentosModel } from 'src/app/models/relatorios/PutDocumentosModel';
import { PutRelatoriosModel } from 'src/app/models/relatorios/PutRelatoriosModel';
import { DocumentosService } from 'src/app/services/documentos.service';



@Component({
  selector: 'app-editar-documentos',
  templateUrl: './editar-documentos.component.html',
  styleUrls: ['./editar-documentos.component.css']
})
export class EditarDocumentosComponent implements OnInit {

  formularioDocumentos!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;
  documentos: GetDocumentosModel | null = null;



  constructor(
    private formBuilder: FormBuilder,
    private DocumentosService: DocumentosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioDocumentos = this.formBuilder.group({
      idAssociacoes: ['', Validators.required],
      valor: ['', Validators.required],
      venda: ['', Validators.required],
      status: ['', Validators.required],
      tipo_de_pagamento: ['', Validators.required],
      observacoes: ['', Validators.required]
    });

    if (this.id) {
      this.buscarRelatorioPorId();
    
  }
  }


  buscarRelatorioPorId(): void {
    this.DocumentosService.consultarDocumentosPorId(this.id!).subscribe(
      (data: GetDocumentosModel ) => {
        this.documentos = data;
        this.formularioDocumentos.patchValue({
          idAssociacoes: this.documentos.idAssociacoes,
          venda:  this.documentos.venda,
          valor:  this.documentos.valor,
          tipo_de_pagamento: this.documentos.tipo_de_pagamento,
          observacoes: this.documentos.observacoes,
          status: this.documentos.status,
        });
      },
      (error: any) => {
        console.error('Erro ao buscar perigo:', error);
      }
    );
  }


  criarRelatorios() {
    if (this.formularioDocumentos.valid) {
      const novoRisco: PutDocumentosModel = this.formularioDocumentos.value as PutDocumentosModel;
  
      // Log form fields to console
      console.log(this.formularioDocumentos.value);
  
      this.DocumentosService.editarDocumentos(novoRisco).subscribe(
        response => {
          console.log('Documento editado com sucesso:', response);
          this.cadastroSucesso = 'Documento editado com sucesso!';
        },
        error => {
          console.error('Erro ao criar Documentos:', error);
          this.cadastroErro = 'Erro ao criar Documento. Por favor, tente novamente.';
        }
      );
    } else {
      this.markFormGroupTouched(this.formularioDocumentos);
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

