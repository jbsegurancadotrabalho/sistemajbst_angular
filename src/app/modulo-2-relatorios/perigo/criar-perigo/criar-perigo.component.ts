import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerigoService } from 'src/app/services/perigo.service';
import { PostPerigoModel } from 'src/app/models/sms/PostPerigoModel';
import { FuncaoDocService } from 'src/app/services/funcaodoc.service'; // Import the service
import { PutFuncaoDocModel } from 'src/app/models/funcaodoc/PutFuncaoDocModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-criar-perigo',
  templateUrl: './criar-perigo.component.html',
  styleUrls: ['./criar-perigo.component.css']
})
export class CriarPerigoComponent implements OnInit {
  formularioPerigo!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  funcao: PutFuncaoDocModel | null = null;
  id: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private perigoService: PerigoService,
    private funcaoDocService: FuncaoDocService,
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
      idFuncaoDoc: ['', Validators.required]
    });
    if (this.id) {
      this.buscarFuncaoPorId();
    }
  }
  buscarFuncaoPorId(): void {
    this.funcaoDocService.buscarFuncaoPorId(this.id!).subscribe(
      (data: PutFuncaoDocModel) => {
        this.funcao = data;
        // Define os valores dos campos do formulário
        this.formularioPerigo.patchValue({
          idFuncaoDoc: this.funcao.idFuncaoDoc,
          nome_da_funcao: this.funcao.nome_da_funcao,
          setor_gho: this.funcao.setor_gho,
          cenario_funcaodoc: this.funcao.cenario_funcaodoc
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
      const novoRisco: PostPerigoModel = this.formularioPerigo.value as PostPerigoModel;
      console.log('Form is valid, submitting:', novoRisco);
      this.perigoService.criarPerigo(novoRisco).subscribe(
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
