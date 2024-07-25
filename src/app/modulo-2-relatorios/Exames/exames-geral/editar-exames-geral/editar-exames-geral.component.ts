import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-exames-geral',
  templateUrl: './editar-exames-geral.component.html',
  styleUrls: ['./editar-exames-geral.component.css']
})
export class EditarExamesGeralComponent {
  id: string | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  exameForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}


  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}