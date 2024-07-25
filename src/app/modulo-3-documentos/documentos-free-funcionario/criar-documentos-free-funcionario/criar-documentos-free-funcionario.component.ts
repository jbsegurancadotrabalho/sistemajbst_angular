import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncionarioService } from 'src/app/services/funcionario.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { DocFreeFuncionarioService } from 'src/app/services/docfreefuncionario.service'; 
import { GetFuncionarioModel } from 'src/app/models/Funcionario/GetFuncionarioModel';
import { PostDocFreeFuncionarioModel } from 'src/app/models/documentosfree/PostDocFreeFuncionarioModel';


@Component({
  selector: 'app-criar-documentos-free-funcionario',
  templateUrl: './criar-documentos-free-funcionario.component.html',
  styleUrls: ['./criar-documentos-free-funcionario.component.css']
})
export class CriarDocumentosFreeFuncionarioComponent implements OnInit {
  id: string | null = null;
  docfreeForm!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  documentosfree: GetFuncionarioModel | null = null;

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
       idFuncionario: ['', Validators.required],
    });

    if (this.id) {
      this.buscarEmpresaPorId();
    }
  }

  buscarEmpresaPorId(): void {
    this.FuncionarioService.consultarFuncionarioEmpresaPorId(this.id!).subscribe(
      (data: GetFuncionarioModel) => {
        this.documentosfree = data;
        this.docfreeForm .patchValue({
          idFuncionario: this.documentosfree.idFuncionario,
          nome: this.documentosfree.nome,
          cpf: this.documentosfree.cpf,


      
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
      const novoRelatorio: PostDocFreeFuncionarioModel = {
        ...this.docfreeForm.value,
        datainicio: dataInicio,
        vigencia: vigencia
      };

      console.log('Dados enviados:', novoRelatorio);

      this.DocFreeFuncionarioService.criarDocumentosFree(novoRelatorio).subscribe(
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


