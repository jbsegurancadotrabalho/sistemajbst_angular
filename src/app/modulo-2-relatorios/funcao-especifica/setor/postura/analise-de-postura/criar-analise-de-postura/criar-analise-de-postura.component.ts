import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PosturaService } from 'src/app/services/postura.service'; 
import { GetAnalisePosturaModel } from 'src/app/models/funcao-especifica/GetAnalisePosturaModel';
import { AnalisePosturaService } from 'src/app/services/analise-postura.service';
import { GetPosturaModel } from 'src/app/models/funcao-especifica/GetPosturaModel';
import { PostAnalisePosturaModel } from 'src/app/models/funcao-especifica/PostAnalisePosturaModel';


@Component({
  selector: 'app-criar-analise-de-postura',
  templateUrl: './criar-analise-de-postura.component.html',
  styleUrls: ['./criar-analise-de-postura.component.css']
})

export class CriarAnaliseDePosturaComponent implements OnInit {
  formularioPostura!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  postura: GetPosturaModel | null = null;
  id: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private PosturaService: PosturaService,
    private route: ActivatedRoute, 
    private AnalisePosturaService : AnalisePosturaService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioPostura = this.formBuilder.group({
      idPostura: ['', Validators.required],
      titulo: ['', Validators.required],
      pergunta: ['', Validators.required],
      resposta: ['', Validators.required],
    });
    if (this.id) {
      this.buscarSetorPorId();
    }
  }
  buscarSetorPorId(): void {
    this.PosturaService.consultarPosturaPorId(this.id!).subscribe(
      (data: GetPosturaModel ) => {
        this.postura = data;
        // Define os valores dos campos do formulário
        this.formularioPostura.patchValue({
          idPostura: this.postura.idPostura,
        });
      },
      (error: any) => {
        console.error('Erro ao buscar setor:', error);
      }
    );
  }

  criarAnalisePostura() {
    console.log('Creating danger with form data:', this.formularioPostura.value);
    // Check if the form is valid
    if (this.formularioPostura.valid) {
      const novoRisco: PostAnalisePosturaModel = this.formularioPostura.value as PostAnalisePosturaModel;
      console.log('Form is valid, submitting:', novoRisco);
      this.AnalisePosturaService.criarAnalisePostura(novoRisco).subscribe(
        response => {
          console.log('Danger created successfully:', response);
          this.cadastroSucesso = 'Análise de Postura criada com sucesso!';
          // Additional logic if necessary, such as redirecting to another page
        },
        error => {
          console.error('Error creating danger:', error);
          this.cadastroErro = 'Erro ao criar análise de postura. Por favor, tente novamente.';
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

