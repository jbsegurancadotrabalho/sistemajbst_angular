import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaDocService } from 'src/app/services/empresadoc.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-criar-empresa-doc',
  templateUrl: './criar-empresa-doc.component.html',
  styleUrls: ['./criar-empresa-doc.component.css']
})
export class CriarEmpresaDocComponent implements OnInit {
  empresaForm!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;

  constructor(private formBuilder: FormBuilder, private empresaDocService: EmpresaDocService,
    private httpClient: HttpClient,     private activatedRoute: ActivatedRoute // Adicionando ActivatedRoute ao construtor



  ) {}

  ngOnInit(): void {
    this.empresaForm = this.formBuilder.group({
      idEmpresa: ['', Validators.required],
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

    var idEmpresa = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/empresas/' + idEmpresa)
      .subscribe({
        next: (data: any) => {
          //preencher o formulário com os dados do produto obtido
          this. empresaForm.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })
  }

  criarEmpresa() {
    if (this.empresaForm.valid) {
      this.empresaDocService.criarEmpresaDoc(this.empresaForm.value)
        .subscribe(
          response => {
            console.log('Empresa criada com sucesso!', response);
            // Defina a mensagem de sucesso
            this.cadastroSucesso = 'Empresa criada com sucesso!';
            // Limpar o formulário após o sucesso
            this.empresaForm.reset();
          },
          error => {
            console.error('Erro ao criar empresa:', error);
            // Defina a mensagem de erro
            this.cadastroErro = 'Erro ao criar empresa. Por favor, tente novamente.';
          }
        );
    }
  }
}
