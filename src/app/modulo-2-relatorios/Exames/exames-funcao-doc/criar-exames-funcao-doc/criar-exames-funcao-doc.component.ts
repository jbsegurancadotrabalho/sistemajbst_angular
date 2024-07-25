import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExameService } from 'src/app/services/examesfuncaodoc.service'; 
import { PostExamesFuncdocModel } from 'src/app/models/sms/PostExamesFuncdocModel'; 
import { FuncaoDocService } from 'src/app/services/funcaodoc.service'; // Import the service
import { ActivatedRoute, Router } from '@angular/router';
import { PutFuncaoDocModel } from 'src/app/models/funcaodoc/PutFuncaoDocModel';

@Component({
  selector: 'app-criar-exames-funcao-doc',
  templateUrl: './criar-exames-funcao-doc.component.html',
  styleUrls: ['./criar-exames-funcao-doc.component.css']
})
export class CriarExamesFuncaoDocComponent implements OnInit {
  formularioExame!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  exame: PostExamesFuncdocModel | null = null;
  id: string | null = null;
  funcao: PutFuncaoDocModel | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private ExameService: ExameService,
    private funcaoDocService: FuncaoDocService,
    private route: ActivatedRoute, 

  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioExame = this.formBuilder.group({
      nome_exames_funcaodoc: ['', Validators.required],
      descricao_exames_funcaodoc: ['', Validators.required],
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
        this.formularioExame.patchValue({
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

  criarExames() {
    console.log('Creating danger with form data:', this.formularioExame.value);
    // Check if the form is valid
    if (this.formularioExame.valid) {
      const novoRisco: PostExamesFuncdocModel = this.formularioExame.value as PostExamesFuncdocModel;
      console.log('Form is valid, submitting:', novoRisco);
      this.ExameService.criarExames(novoRisco).subscribe(
        response => {
          console.log('Danger created successfully:', response);
          this.cadastroSucesso = 'Exame criado com sucesso!';
          // Additional logic if necessary, such as redirecting to another page
        },
        error => {
          console.error('Error creating danger:', error);
          this.cadastroErro = 'Erro ao criar exame. Por favor, tente novamente.';
          // Additional logic to handle the error, such as displaying an error message to the user
        }
      );
    } else {
      console.warn('Form is invalid, marking all fields as touched');
      // If the form is not valid, mark the fields as touched to display the errors
      this.markFormGroupTouched(this.formularioExame);
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
