import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalisePosturaService } from 'src/app/services/analise-postura.service';
import { GetAnalisePosturaModel } from 'src/app/models/funcao-especifica/GetAnalisePosturaModel';
import { PutAnalisePosturaModel } from 'src/app/models/funcao-especifica/PutAnalisePosturaModel';

@Component({
  selector: 'app-editar-analise-de-postura',
  templateUrl: './editar-analise-de-postura.component.html',
  styleUrls: ['./editar-analise-de-postura.component.css']
})
export class EditarAnaliseDePosturaComponent implements OnInit {
  formularioPostura!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  postura: GetAnalisePosturaModel | null = null;
  id: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private  AnalisePosturaService:  AnalisePosturaService,
    private route: ActivatedRoute, 
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioPostura = this.formBuilder.group({
      idAnalisePostura: ['', Validators.required],
      titulo: ['', Validators.required],
      pergunta: ['', Validators.required],
      resposta: ['', Validators.required],
    });
    if (this.id) {
      this.buscarSetorPorId();
    }
  }
  buscarSetorPorId(): void {
    this.AnalisePosturaService.consultarAnalisePosturaPorId(this.id!).subscribe(
      (data: GetAnalisePosturaModel ) => {
        this.postura = data;
        // Define os valores dos campos do formulário
        this.formularioPostura.patchValue({
          idAnalisePostura: this.postura.idAnalisePostura,
          titulo: this.postura.pergunta,
          pergunta: this.postura.pergunta,
          resposta: this.postura.resposta,
         
        });
      },
      (error: any) => {
        console.error('Erro ao buscar setor:', error);
      }
    );
  }

  editarAnalisePostura() {
    console.log('Creating danger with form data:', this.formularioPostura.value);
    // Check if the form is valid
    if (this.formularioPostura.valid) {
      const novoRisco: PutAnalisePosturaModel = this.formularioPostura.value as PutAnalisePosturaModel;
      console.log('Form is valid, submitting:', novoRisco);
      this.AnalisePosturaService.editarAnalisePostura(novoRisco).subscribe(
        response => {
          console.log('Danger created successfully:', response);
          this.cadastroSucesso = 'Análise de Postura editada com sucesso!';
          // Additional logic if necessary, such as redirecting to another page
        },
        error => {
          console.error('Error creating danger:', error);
          this.cadastroErro = 'Erro ao editar análise de postura. Por favor, tente novamente.';
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


