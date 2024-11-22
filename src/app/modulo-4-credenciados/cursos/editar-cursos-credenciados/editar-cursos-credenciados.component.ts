import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import 'select2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { CursosCredenciadoService } from 'src/app/services/cursos-credenciados.service';
import { CursosService } from 'src/app/services/cursos.service';
import { GetCursosModel } from 'src/app/models/cursos/GetCursosModel';
import { GetCursosCredenciadosModel } from 'src/app/models/cursos_credenciados/GetCursosCredenciadosModel';
import { PutCursosCredenciadosModel } from 'src/app/models/cursos_credenciados/PutCursosCredenciadosModel';

@Component({
  selector: 'app-editar-cursos-credenciados',
  templateUrl: './editar-cursos-credenciados.component.html',
  styleUrls: ['./editar-cursos-credenciados.component.css']
})
export class EditarCursosCredenciadosComponent implements OnInit, AfterViewInit {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioCursosCredenciados: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  cursos1: GetCursosModel[] = [];
  id: string | null = null;
  credenciado: GetCursosCredenciadosModel | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private config: NgSelectConfig,
    private CursosCredenciadoService: CursosCredenciadoService,
    private CursosService: CursosService
  ) {
    this.formularioCursosCredenciados = this.formBuilder.group({
      idCursosCredenciados: ['', Validators.required],
      nomeCursosCredenciados: ['', Validators.required],
      statusCursosCredenciados: ['', Validators.required],
      valorCredenciado: ['', Validators.required],
      valorJB: ['', Validators.required],
      idcurso: ['', Validators.required],
    });
    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.consultarCursos();
    this.consultarCursosCredenciados();
  }

  consultarCursos(): void {
    this.CursosService.consultarCursos().subscribe(
      (data: GetCursosModel[]) => {
        this.cursos1 = data;
      },
      (error: any) => {
        console.error('Erro ao buscar cursos:', error);
      }
    );
  }

  consultarCursosCredenciados(): void {
    if (this.id) {
      this.CursosCredenciadoService.consultarCursoCredenciadoPorId(this.id).subscribe(
        (data: GetCursosCredenciadosModel) => {
          this.credenciado = data;

          this.formularioCursosCredenciados.patchValue({
            idCursosCredenciados: this.credenciado.idCursosCredenciados,
            nomeCursosCredenciados: this.credenciado.nomeCursosCredenciados,
            statusCursosCredenciados: this.credenciado.statusCursosCredenciados,
            valorCredenciado: this.credenciado.valorCredenciado,
            valorJB: this.credenciado.valorJB,
          });
        },
        (error: any) => {
          console.error('Erro ao buscar credenciado:', error);
        }
      );
    } else {
      console.error('ID do credenciado é nulo.');
    }
  }

  ngAfterViewInit(): void {
    if (this.planoSelect) {
      const selectElement = $(this.planoSelect.nativeElement) as any;

      selectElement.select2({
        theme: 'bootstrap-5',
      }).on('change', () => {
        const selectedValue = String(selectElement.val());
        this.formularioCursosCredenciados.get('idcurso')?.setValue(selectedValue);
        this.formularioCursosCredenciados.get('idcurso')?.updateValueAndValidity();
      });
    }
  }

  editarCursosCredenciados(): void {
    if (this.formularioCursosCredenciados.valid) {
      const curso: PutCursosCredenciadosModel = this.formularioCursosCredenciados.value as PutCursosCredenciadosModel;

      this.CursosCredenciadoService.editarCursoCredenciado(curso).subscribe(
        response => {
          console.log('Curso editado com sucesso:', response);
          this.cadastroSucesso = 'Curso editado com sucesso!';
        },
        error => {
          console.error('Erro ao editar curso:', error);
          this.cadastroErro = 'Erro ao editar curso. Por favor, tente novamente.';
        }
      );
    } else {
      console.error('O formulário é inválido. Por favor, verifique os campos obrigatórios.');
      this.markFormGroupTouched(this.formularioCursosCredenciados);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
