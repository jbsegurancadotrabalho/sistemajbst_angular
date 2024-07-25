import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SetorService } from 'src/app/services/setor.service';
import { PostSetorModel} from 'src/app/models/funcao-especifica/PostSetorModel'; 
import { ActivatedRoute, Router } from '@angular/router';
import { GetUnidadeModel } from 'src/app/models/unidadedoc/GetUnidadeModel';
import { UnidadeDocService } from 'src/app/services/unidadedoc.service';


@Component({
  selector: 'app-criar-setor',
  templateUrl: './criar-setor.component.html',
  styleUrls: ['./criar-setor.component.css']
})
export class CriarSetorComponent {

  formularioSetor!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  unidade: GetUnidadeModel | null = null;
  id: string | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private SetorService: SetorService,
    private UnidadeDocService : UnidadeDocService ,
    private route: ActivatedRoute, 
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioSetor= this.formBuilder.group({
      descricao_gho_setor: ['', Validators.required],
      nome_gho_setor: ['', Validators.required],
       idunidadeDoc: ['', Validators.required]

    });
    if (this.id) {
      this.buscarUnidadePorId();
    }
  }

  buscarUnidadePorId(): void {
    this.UnidadeDocService.getUnidadeDocById(this.id!).subscribe(
      (data:  GetUnidadeModel ) => {
        this.unidade = data;
        this.formularioSetor.patchValue({
          idunidadeDoc: this.unidade.idunidadeDoc,
   
        });
      },
      (error: any) => {
        console.error('Erro ao buscar unidade:', error);
      }
    );
  }

  criarSetor() {
    // Verifique se o formulário é válido
    if (this.formularioSetor.valid) {
      const novoRisco: PostSetorModel = this.formularioSetor.value as PostSetorModel;
      this.SetorService.criarSetor(novoRisco).subscribe(
        response => {
          console.log('Setor criado com sucesso:', response);
          this.cadastroSucesso = 'Setor criado com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar Setor:', error);
          this.cadastroErro = 'Erro ao criar Setor. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this.formularioSetor);
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