import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursoNrService } from 'src/app/services/curso-nrsfuncoes.service';
import { PutCursoModel } from 'src/app/models/sms/PutCursoNrsFuncoesModel';
import { GetCursoModel } from 'src/app/models/sms/GetCursoNrsFuncoesModel';

@Component({
  selector: 'app-editar-curso-para-funcoes',
  templateUrl: './editar-curso-para-funcoes.component.html',
  styleUrls: ['./editar-curso-para-funcoes.component.css']
})
export class EditarCursoParaFuncoesComponent implements OnInit {
  id: string | null = null;
  curso: PutCursoModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  cursoForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoNrService: CursoNrService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.cursoForm = this.formBuilder.group({
      idCursoNrs: ['', Validators.required],
      nomeCurso: ['', Validators.required],
      descricaoCurso: ['', Validators.required],
    });

    if (this.id) {
      this.buscarCursoPorId();
    }
  }

  buscarCursoPorId(): void {
    this.cursoNrService.consultarCursosPorId(this.id!).subscribe(
      (data: GetCursoModel) => {
        this.curso = data;
        // Define os valores dos campos do formulário
        this.cursoForm.patchValue({
          idCursoNrs: this.curso.idCursoNrs,
          nomeCurso: this.curso.nomeCurso,
          descricaoCurso: this.curso.descricaoCurso
        });
      },
      (error: any) => {
        console.error('Erro ao buscar curso:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this.cursoForm.valid) {
      const formData = this.cursoForm.value as PutCursoModel;
      this.cursoNrService.editarCursos(this.id!, formData).subscribe(
        response => {
          console.log('Curso editado com sucesso!', response);
          // Definindo a mensagem de sucesso
          this.cadastroSucesso = 'Curso editado com sucesso!';
          // Limpando o formulário após o sucesso
          this.cursoForm.reset();
        },
        error => {
          console.error('Erro ao editar curso:', error);
          // Definindo a mensagem de erro
          this.cadastroErro = 'Erro ao editar curso. Por favor, tente novamente.';
        }
      );
    }
  }
}
