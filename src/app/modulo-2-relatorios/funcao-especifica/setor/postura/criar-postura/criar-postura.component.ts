import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PosturaService } from 'src/app/services/postura.service'; 
import { PostPosturaModel } from 'src/app/models/funcao-especifica/PostPosturaModel'; 
import { PutPosturaModel } from 'src/app/models/funcao-especifica/PutPosturaModel'; 
import { GetPosturaModel } from 'src/app/models/funcao-especifica/GetPosturaModel'; 
import { SetorService } from 'src/app/services/setor.service';
import { GetSetorModel } from 'src/app/models/funcao-especifica/GetSetorModel';



@Component({
  selector: 'app-criar-postura',
  templateUrl: './criar-postura.component.html',
  styleUrls: ['./criar-postura.component.css']
})
export class CriarPosturaComponent implements OnInit {
  formularioPostura!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  setor: GetSetorModel | null = null;
  id: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private SetorService: SetorService,
    private PosturaService: PosturaService,
    private route: ActivatedRoute, 

  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioPostura = this.formBuilder.group({
      id_gho_setor: ['', Validators.required],
      nomePostura: ['', Validators.required],
      descricaoPostura: ['', Validators.required],
    });
    if (this.id) {
      this.buscarSetorPorId();
    }
  }
  buscarSetorPorId(): void {
    this.SetorService.consultarSetorPorId(this.id!).subscribe(
      (data: GetSetorModel ) => {
        this.setor = data;
        // Define os valores dos campos do formulário
        this.formularioPostura.patchValue({
          id_gho_setor: this.setor.id_gho_setor,
        });
      },
      (error: any) => {
        console.error('Erro ao buscar setor:', error);
      }
    );
  }

  criarPostura() {
    console.log('Creating danger with form data:', this.formularioPostura.value);
    // Check if the form is valid
    if (this.formularioPostura.valid) {
      const novoRisco: PostPosturaModel = this.formularioPostura.value as PostPosturaModel;
      console.log('Form is valid, submitting:', novoRisco);
      this.PosturaService.criarPostura(novoRisco).subscribe(
        response => {
          console.log('Danger created successfully:', response);
          this.cadastroSucesso = 'Postura criada com sucesso!';
          // Additional logic if necessary, such as redirecting to another page
        },
        error => {
          console.error('Error creating danger:', error);
          this.cadastroErro = 'Erro ao criar postura. Por favor, tente novamente.';
          // Additional logic to handle the error, such as displaying an error message to the user
        }
      );
    } else {
      console.warn('Form is invalid, marking all fields as touched');
      // If the form is not valid, mark the fields as touched to display the errors
      this.markFormGroupTouched(this.formularioPostura);
    }
  }

  // Function to mark all fields in the form as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
    console.log('All form fields marked as touched:', formGroup);
  }
}

