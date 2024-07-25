import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerigoService } from 'src/app/services/perigo.service';
import { PostPerigoIncluirFuncaoModel } from 'src/app/models/sms/PostPerigoIncluirFuncaoModel';
import { FuncaoEspecificaService } from 'src/app/services/funcaoespecifica.service';
import { PutFuncaoDocModel } from 'src/app/models/funcaodoc/PutFuncaoDocModel';
import { ActivatedRoute, Router } from '@angular/router';
import { PutFuncaoEspecificaUnidadeModel } from 'src/app/models/funcao-especifica/PutFuncaoEspecificaUnidadeModel';


@Component({
  selector: 'app-criar-perigo-funcao-especifica',
  templateUrl: './criar-perigo-funcao-especifica.component.html',
  styleUrls: ['./criar-perigo-funcao-especifica.component.css']
})
export class CriarPerigoFuncaoEspecificaComponent implements OnInit {
  formularioPerigo!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  funcao: PutFuncaoEspecificaUnidadeModel | null = null;
  id: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private perigoService: PerigoService,
    private FuncaoEspecificaService: FuncaoEspecificaService,
    private route: ActivatedRoute, 

  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioPerigo = this.formBuilder.group({
      nomePerigo: ['', Validators.required],
      causasPerigo: ['', Validators.required],
      consequencias_perigo: ['', Validators.required],
      medidasPreventivas: ['', Validators.required],
      classificacao: ['', Validators.required],
      idFuncaoEspecifica: ['', Validators.required]
    });
    if (this.id) {
      this.buscarFuncaoPorId();
    }
  }
  buscarFuncaoPorId(): void {
    this.FuncaoEspecificaService.consultarFuncaoPorId(this.id!).subscribe(
      (data: PutFuncaoEspecificaUnidadeModel) => {
        this.funcao = data;
        // Define os valores dos campos do formulário
        this.formularioPerigo.patchValue({
          idFuncaoEspecifica: this.funcao.idFuncaoEspecifica,
     
        });
      },
      (error: any) => {
        console.error('Erro ao buscar função:', error);
      }
    );
  }

  criarPerigo() {
    console.log('Creating danger with form data:', this.formularioPerigo.value);
    // Check if the form is valid
    if (this.formularioPerigo.valid) {
      const novoRisco: PostPerigoIncluirFuncaoModel = this.formularioPerigo.value as PostPerigoIncluirFuncaoModel;
      console.log('Form is valid, submitting:', novoRisco);
      this.perigoService.criarPerigoFuncaoEspecifica(novoRisco).subscribe(
        response => {
          console.log('Danger created successfully:', response);
          this.cadastroSucesso = 'Perigo criado com sucesso!';
          // Additional logic if necessary, such as redirecting to another page
        },
        error => {
          console.error('Error creating danger:', error);
          this.cadastroErro = 'Erro ao criar perigo. Por favor, tente novamente.';
          // Additional logic to handle the error, such as displaying an error message to the user
        }
      );
    } else {
      console.warn('Form is invalid, marking all fields as touched');
      // If the form is not valid, mark the fields as touched to display the errors
      this.markFormGroupTouched(this.formularioPerigo);
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
