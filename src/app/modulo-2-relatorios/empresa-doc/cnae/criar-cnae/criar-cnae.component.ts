import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresaDocService } from 'src/app/services/empresadoc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CnaeService } from 'src/app/services/cnae.service';

@Component({
  selector: 'app-criar-cnae',
  templateUrl: './criar-cnae.component.html',
  styleUrls: ['./criar-cnae.component.css']
})
export class CriarCnaeComponent implements OnInit {
  cnaeForm!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private empresaDocService: EmpresaDocService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private cnaeService: CnaeService
  ) {}

  ngOnInit(): void {
    this.cnaeForm = this.formBuilder.group({
      idEmpresa_doc: [''], // Corrija o nome do campo para corresponder ao que é esperado
      codigo: ['', Validators.required],
      denominacao: ['', Validators.required], // Adicionando o campo descricao
      grau_de_risco: ['', Validators.required],
    });

    const idEmpresa = this.activatedRoute.snapshot.paramMap.get('id') as string;
    // Corrigindo a URL para buscar os dados da empresa pelo ID
    this.httpClient.get(`http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/empresa-doc/${idEmpresa}`)
      .subscribe({
        next: (data: any) => {
          // Preenchendo o formulário com os dados obtidos
          this.cnaeForm.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      });
  }

  CriarCnae() {
    if (this.cnaeForm.valid) {
      this.cnaeService.criarCnae(this.cnaeForm.value)
        .subscribe(
          response => {
            console.log('Cnae criado com sucesso!', response);
            // Definindo a mensagem de sucesso
            this.cadastroSucesso = 'Cnae criado com sucesso!';
            // Limpando o formulário após o sucesso
            this.cnaeForm.reset();
          },
          error => {
            console.error('Erro ao criar CNAE:', error);
            // Definindo a mensagem de erro
            this.cadastroErro = 'Erro ao criar CNAE. Por favor, tente novamente.';
          }
        );
    }
  }
}
