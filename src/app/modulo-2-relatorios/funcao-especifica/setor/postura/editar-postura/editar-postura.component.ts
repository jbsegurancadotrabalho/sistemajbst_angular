import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PosturaService } from 'src/app/services/postura.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PutPosturaModel } from 'src/app/models/funcao-especifica/PutPosturaModel';
import { GetPosturaModel } from 'src/app/models/funcao-especifica/GetPosturaModel';


@Component({
  selector: 'app-editar-postura',
  templateUrl: './editar-postura.component.html',
  styleUrls: ['./editar-postura.component.css']
})
export class EditarPosturaComponent implements OnInit {
  id: string | null = null;
  postura: PutPosturaModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  formPostura!: FormGroup;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private PosturaService: PosturaService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formPostura = this.formBuilder.group({
      idPostura: [''], 
      nomePostura: ['', Validators.required],
      descricaoPostura: ['', Validators.required],
    });

    if (this.id) {
      this. buscarPosturaPorId();
    }
  }

  buscarPosturaPorId(): void {
    this.PosturaService.consultarPosturaPorId(this.id!).subscribe(
      (data:  PutPosturaModel) => {
        this.postura = data;
        // Define os valores dos campos do formulário
        this.formPostura.patchValue({
          idPostura: this.postura.idPostura,
          nomePostura: this.postura.nomePostura,
          descricaoPostura: this.postura.descricaoPostura,

        });
      },
      (error: any) => {
        console.error('Erro ao buscar função:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this.formPostura.valid) {
      this.PosturaService.editarPostura(this.formPostura.value)
        .subscribe(
          response => {
            console.log('Postura editada com sucesso!', response);
            // Definindo a mensagem de sucesso
            this.cadastroSucesso = 'Postura editada com sucesso!';
            // Limpando o formulário após o sucesso
            this.formPostura.reset();
          },
          error => {
            console.error('Erro ao editar postura:', error);
            // Definindo a mensagem de erro
            this.cadastroErro = 'Erro ao editar postura. Por favor, tente novamente.';
          }
        );
    }
  }
  
}  

