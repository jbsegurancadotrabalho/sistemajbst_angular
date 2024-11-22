import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ExamesService } from 'src/app/services/exames.service';
import { PutExamesModel } from 'src/app/models/exames/PutExamesModel';

@Component({
  selector: 'app-editar-exames',
  templateUrl: './editar-exames.component.html',
  styleUrls: ['./editar-exames.component.css']
})
export class EditarExamesComponent implements OnInit {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioExames: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;
  exames: PutExamesModel | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private config: NgSelectConfig,
    private examesService: ExamesService,
    private router: Router
  ) {
    this.formularioExames = this.formBuilder.group({
      idExames: ['', Validators.required],
      nome_exame: ['', Validators.required],
      tipo_exame: ['', Validators.required],
      descricao_exame: ['', Validators.required],
    });

    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.buscarExamePorId();
  }

  buscarExamePorId(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.examesService.consultarExamesPorId(this.id).subscribe(
        (data: PutExamesModel) => {
          this.exames = data;
          this.formularioExames.patchValue(data);

        },
        (error: any) => {
          console.error('Erro ao buscar exame:', error);
        }
      );
    } else {
      console.error('ID não encontrado na rota.');
    }
  }

  editarExames(): void {
    if (this.formularioExames.valid) {
      const exameAtualizado: PutExamesModel = this.formularioExames.value;
      this.examesService.editarExames(exameAtualizado).subscribe(
        response => {
          console.log('Exame editado com sucesso:', response);
          this.cadastroSucesso = 'Exame editado com sucesso!';
          // Redirecionar após a edição, se necessário
        },
        error => {
          console.error('Erro ao editar exame:', error);
          this.cadastroErro = 'Erro ao editar exame. Por favor, tente novamente.';
        }
      );
    } else {
      this.markFormGroupTouched(this.formularioExames);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
