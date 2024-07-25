import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CenarioService } from 'src/app/services/cenario.service';
import { PostCenarioModel } from 'src/app/models/funcao-especifica/PostCenarioModel';
import { PutCenarioModel } from 'src/app/models/funcao-especifica/PutCenarioModel';
import { GetCenarioModel } from 'src/app/models/funcao-especifica/GetCenarioModel';
import { SetorService } from 'src/app/services/setor.service';
import { GetSetorModel } from 'src/app/models/funcao-especifica/GetSetorModel';

@Component({
  selector: 'app-criar-cenario',
  templateUrl: './criar-cenario.component.html',
  styleUrls: ['./criar-cenario.component.css']
})


export class CriarCenarioComponent implements OnInit {
  formularioCenario!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  setor: GetSetorModel | null = null;
  id: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private SetorService: SetorService,
    private CenarioService: CenarioService,
    private route: ActivatedRoute, 

  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioCenario = this.formBuilder.group({
      id_gho_setor: ['', Validators.required],
      nomeAtividade: ['', Validators.required],
      descricaoAtividade: ['', Validators.required],
      area: ['', Validators.required],
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
        this.formularioCenario.patchValue({
          id_gho_setor: this.setor.id_gho_setor,
        });
      },
      (error: any) => {
        console.error('Erro ao buscar setor:', error);
      }
    );
  }

  criarCenario() {
    console.log('Creating danger with form data:', this.formularioCenario.value);
    // Check if the form is valid
    if (this.formularioCenario.valid) {
      const novoRisco: PostCenarioModel = this.formularioCenario.value as PostCenarioModel;
      console.log('Form is valid, submitting:', novoRisco);
      this.CenarioService.criarCenario(novoRisco).subscribe(
        response => {
          console.log('Danger created successfully:', response);
          this.cadastroSucesso = 'Cenário criado com sucesso!';
          // Additional logic if necessary, such as redirecting to another page
        },
        error => {
          console.error('Error creating danger:', error);
          this.cadastroErro = 'Erro ao criar cenário. Por favor, tente novamente.';
          // Additional logic to handle the error, such as displaying an error message to the user
        }
      );
    } else {
      console.warn('Form is invalid, marking all fields as touched');
      // If the form is not valid, mark the fields as touched to display the errors
      this.markFormGroupTouched(this.formularioCenario);
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

