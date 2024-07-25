import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SetorService } from 'src/app/services/setor.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PutSetorModel } from 'src/app/models/funcao-especifica/PutSetorModel'; 


@Component({
  selector: 'app-editar-setor',
  templateUrl: './editar-setor.component.html',
  styleUrls: ['./editar-setor.component.css']
})
export class EditarSetorComponent implements OnInit {
  id: string | null = null;
  setor: PutSetorModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  setorForm!: FormGroup;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private SetorService: SetorService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.setorForm = this.formBuilder.group({
      id_gho_setor: [''], 
      nome_gho_setor: ['', Validators.required],
      descricao_gho_setor: ['', Validators.required],
    });

    if (this.id) {
      this. buscarSetorPorId();
    }
  }

  buscarSetorPorId(): void {
    this.SetorService.consultarSetorPorId(this.id!).subscribe(
      (data:  PutSetorModel) => {
        this.setor = data;
        // Define os valores dos campos do formulário
        this.setorForm.patchValue({
          id_gho_setor: this.setor.id_gho_setor,
          nome_gho_setor: this.setor.nome_gho_setor,
          descricao_gho_setor: this.setor.descricao_gho_setor,

        });
      },
      (error: any) => {
        console.error('Erro ao buscar função:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this. setorForm.valid) {
      this.SetorService.editarSetor(this.setorForm.value)
        .subscribe(
          response => {
            console.log('Setor editado com sucesso!', response);
            // Definindo a mensagem de sucesso
            this.cadastroSucesso = 'Setor editado com sucesso!';
            // Limpando o formulário após o sucesso
            this.setorForm.reset();
          },
          error => {
            console.error('Erro ao editar setor:', error);
            // Definindo a mensagem de erro
            this.cadastroErro = 'Erro ao editar setor. Por favor, tente novamente.';
          }
        );
    }
  }
  
}  
