import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-criar-exames-geral',
  templateUrl: './criar-exames-geral.component.html',
  styleUrls: ['./criar-exames-geral.component.css']
})
export class CriarExamesGeralComponent implements OnInit {


  formularioExames!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    // Inicialize o formulário e defina os controles
    this.formularioExames = this.formBuilder.group({
      nome_exame: ['', Validators.required],
      tipo_exame: ['', Validators.required],
      descricao_exame: ['', Validators.required],
    });
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
