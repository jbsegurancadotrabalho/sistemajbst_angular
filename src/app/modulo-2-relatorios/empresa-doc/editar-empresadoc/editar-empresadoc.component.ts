import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresaDocService } from 'src/app/services/empresadoc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-empresadoc',
  templateUrl: './editar-empresadoc.component.html',
  styleUrls: ['./editar-empresadoc.component.css']
})
export class EditarEmpresadocComponent implements OnInit {
  empresaForm!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private empresaDocService: EmpresaDocService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.empresaForm = this.formBuilder.group({
      idEmpresa_doc: [''], // Corrija o nome do campo para corresponder ao que é esperado
      razaosocial: ['', Validators.required],
      nomefantasia: ['', Validators.required],
      cnpj: ['', Validators.required],
      status: ['', Validators.required],
      inscricaoestadual: ['', Validators.required],
      inscricaomunicipal: ['', Validators.required],
      responsavel_sistema: ['', Validators.required],
      email_usuario: ['', Validators.required],
      telefone_responsavel: ['', Validators.required]
    });

    const idEmpresa = this.activatedRoute.snapshot.paramMap.get('id') as string;
    // Corrigindo a URL para buscar os dados da empresa pelo ID
    this.httpClient.get(`http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/empresa-doc/${idEmpresa}`)
      .subscribe({
        next: (data: any) => {
          // Preenchendo o formulário com os dados obtidos
          this.empresaForm.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      });
  }

  editarEmpresa() {
    if (this.empresaForm.valid) {
      this.empresaDocService.editarEmpresaDoc(this.empresaForm.value)
        .subscribe(
          response => {
            console.log('Empresa editada com sucesso!', response);
            // Definindo a mensagem de sucesso
            this.cadastroSucesso = 'Empresa editada com sucesso!';
            // Limpando o formulário após o sucesso
            this.empresaForm.reset();
          },
          error => {
            console.error('Erro ao editar empresa:', error);
            // Definindo a mensagem de erro
            this.cadastroErro = 'Erro ao editar empresa. Por favor, tente novamente.';
          }
        );
    }
  }
}
