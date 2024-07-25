import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnidadeDocService } from 'src/app/services/unidadedoc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-editar-unidadedoc',
  templateUrl: './editar-unidadedoc.component.html',
  styleUrls: ['./editar-unidadedoc.component.css']
})
export class EditarUnidadedocComponent implements OnInit {
  unidadeForm!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private unidadeDocService: UnidadeDocService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.unidadeForm = this.formBuilder.group({
      idunidadeDoc: [''], // Corrija o nome do campo para corresponder ao que é esperado
      nomefantasia: ['', Validators.required],
      cnpj: ['', Validators.required],
      nomeEspecificoUnidade: ['', Validators.required],
      horario_empresa: ['', Validators.required]
 
    });

    const idEmpresa = this.activatedRoute.snapshot.paramMap.get('id') as string;
    // Corrigindo a URL para buscar os dados da empresa pelo ID
    this.httpClient.get(`http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/unidades/${idEmpresa}`)
      .subscribe({
        next: (data: any) => {
          // Preenchendo o formulário com os dados obtidos
          this.unidadeForm.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      });
  }

  editarUnidade() {
    if (this.unidadeForm.valid) {
      this.unidadeDocService.editarUnidadeDoc(this.unidadeForm.value)
        .subscribe(
          response => {
            console.log('Empresa editada com sucesso!', response);
            // Definindo a mensagem de sucesso
            this.cadastroSucesso = 'Empresa editada com sucesso!';
            // Limpando o formulário após o sucesso
            this.unidadeForm.reset();
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
