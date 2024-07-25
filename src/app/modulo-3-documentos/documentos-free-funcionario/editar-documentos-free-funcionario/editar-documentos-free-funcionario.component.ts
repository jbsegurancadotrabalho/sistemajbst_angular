import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncionarioService } from 'src/app/services/funcionario.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { DocFreeFuncionarioService } from 'src/app/services/docfreefuncionario.service'; 
import { PostDocFreeFuncionarioModel } from 'src/app/models/documentosfree/PostDocFreeFuncionarioModel';
import { GetDocFreeFuncionarioModel } from 'src/app/models/documentosfree/GetDocFreeFuncionarioModel';
import { PutDocFreeFuncionarioModel } from 'src/app/models/documentosfree/PutDocFreeFuncionarioModel';


@Component({
  selector: 'app-editar-documentos-free-funcionario',
  templateUrl: './editar-documentos-free-funcionario.component.html',
  styleUrls: ['./editar-documentos-free-funcionario.component.css']
})
export class EditarDocumentosFreeFuncionarioComponent implements OnInit {
  id: string | null = null;
  docfreeForm!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  documentosfree: GetDocFreeFuncionarioModel | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private FuncionarioService: FuncionarioService,
    private DocFreeFuncionarioService:DocFreeFuncionarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.docfreeForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      datainicio: ['', Validators.required],
      vigencia: ['', Validators.required],
      responsavel: ['', Validators.required],
      endereco: ['', Validators.required],
      idDocFreeFuncionario: ['', Validators.required],
    });

    if (this.id) {
      this.buscarDocFreeFuncionario();
    }
  }

  buscarDocFreeFuncionario(): void {
    this.DocFreeFuncionarioService.consultarDocumentosPorId(this.id!).subscribe(
      (data: GetDocFreeFuncionarioModel) => {
        this.documentosfree = data;
        this.docfreeForm .patchValue({
          idDocFreeFuncionario: this.documentosfree.idDocFreeFuncionario,
          nome: this.documentosfree.nome,
          cpf: this.documentosfree.cpf,
          datainicio: this.documentosfree.datainicio,
          responsavel: this.documentosfree.responsavel,
          vigencia: this.documentosfree.vigencia,
          endereco: this.documentosfree.endereco,

        });
      },
      (error: any) => {
        console.error('Erro ao buscar empresa:', error);
        this.cadastroErro = 'Erro ao buscar Funcionario. Por favor, tente novamente.';
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
    if (this.docfreeForm.valid) {
      const dataInicio = this.formatDate(this.docfreeForm.value.datainicio);
      const vigencia = this.formatDate(this.docfreeForm.value.vigencia);
      const novoRelatorio: PutDocFreeFuncionarioModel = {
        ...this.docfreeForm.value,
        datainicio: dataInicio,
        vigencia: vigencia
      };

      console.log('Dados enviados:', novoRelatorio);

      this.DocFreeFuncionarioService.editarDocumentosFree(novoRelatorio).subscribe(
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
      this.markFormGroupTouched(this.docfreeForm);
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



