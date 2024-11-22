import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import 'select2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { AvaliacoesOcupacionaisCredenciadosService } from 'src/app/services/avaliacoes-ocupacionais-credenciados.service';
import { AvaliacoesOcupacionaisService } from 'src/app/services/avaliacoes-ocupacionais.service';
import { GetCursosModel } from 'src/app/models/cursos/GetCursosModel';
import { GetCursosCredenciadosModel } from 'src/app/models/cursos_credenciados/GetCursosCredenciadosModel';
import { PutCursosCredenciadosModel } from 'src/app/models/cursos_credenciados/PutCursosCredenciadosModel';
import { GetAvaliacoesModel } from 'src/app/models/avaliacoes-ocupacionais/GetAvaliacoesModel';
import { GetAvaliacoesOcupacionaisCredenciadosModel } from 'src/app/models/avaliacoes-ocupacionais/avaliacoes-ocupacionais-credenciados/GetAvaliacoesOcupacionaisCredenciadosModel';
import { PutAvaliacoesOcupacionaisCredenciadosModel } from 'src/app/models/avaliacoes-ocupacionais/avaliacoes-ocupacionais-credenciados/PutAvaliacoesOcupacionaisCredenciadosModel';

@Component({
  selector: 'app-editar-avaliacoes-ocupacionais-credenciados',
  templateUrl: './editar-avaliacoes-ocupacionais-credenciados.component.html',
  styleUrls: ['./editar-avaliacoes-ocupacionais-credenciados.component.css']
})
export class EditarAvaliacoesOcupacionaisCredenciadosComponent implements OnInit, AfterViewInit {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioAvaliacoesCredenciados: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  avaliacoes: GetAvaliacoesModel[] = [];
  id: string | null = null;
  credenciado: GetAvaliacoesOcupacionaisCredenciadosModel | null = null;
  avaliacao: any [] = []

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private config: NgSelectConfig,
    private AvaliacoesOcupacionaisCredenciadosService: AvaliacoesOcupacionaisCredenciadosService,
    private AvaliacoesOcupacionaisService: AvaliacoesOcupacionaisService
  ) {
    this.formularioAvaliacoesCredenciados = this.formBuilder.group({
      idAvaliacoesCredenciados: ['', Validators.required],
      nome_avaliacoes: ['', Validators.required],
      valorCredenciado: ['', Validators.required],
      valorJB: ['', Validators.required],
      idAvaliacoes: ['', Validators.required],
    });
    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.consultarAvaliações();
    this.consultarAvaliacoesCredenciados();
  }

  consultarAvaliações(): void {
    this.AvaliacoesOcupacionaisService.consultarAvaliações().subscribe(
      (data: GetAvaliacoesModel[]) => { // Handle as an array
        this.avaliacoes = data;
        if (this.avaliacao.length > 0) {
          const selectedAvaliacao = this.avaliacao[0]; // Example: Select the first exam
          this.formularioAvaliacoesCredenciados.patchValue({
            idAvaliacoes: selectedAvaliacao.idAvaliacoes,
            nome_avaliacoes: selectedAvaliacao.nome_avaliacoes,
          });
        }
      },
      (error: any) => {
        console.error('Erro ao buscar exames:', error);
      }
    );
  }

  consultarAvaliacoesCredenciados(): void {
    if (this.id) {
      this.AvaliacoesOcupacionaisCredenciadosService.consultarAvaliacoesCredenciadosPorId(this.id).subscribe(
        (data: GetAvaliacoesOcupacionaisCredenciadosModel) => {
          this.credenciado = data;

          this.formularioAvaliacoesCredenciados.patchValue({
            idAvaliacoesCredenciados: this.credenciado.idAvaliacoesCredenciados,
            nome_avaliacoes: this.credenciado.nome_avaliacoes,
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
        this.formularioAvaliacoesCredenciados.get('idAvaliacoes')?.setValue(selectedValue);
        this.formularioAvaliacoesCredenciados.get('idAvaliacoes')?.updateValueAndValidity();
      });
    }
  }

  editarAvaliacoesCredenciados(): void {
    if (this.formularioAvaliacoesCredenciados.valid) {
      // Corrige o tipo de conversão
      const curso: PutAvaliacoesOcupacionaisCredenciadosModel = this.formularioAvaliacoesCredenciados.value as PutAvaliacoesOcupacionaisCredenciadosModel;
  
      this.AvaliacoesOcupacionaisCredenciadosService.editarAvaliacoesCredenciados(curso).subscribe(
        response => {
          console.log('Avaliação do Credenciado editada com sucesso:', response);
          this.cadastroSucesso = 'Avaliação do Credenciado editada com sucesso!';
        },
        error => {
          console.error('Erro ao editar Avaliação do Credenciado:', error);
          this.cadastroErro = 'Erro ao editar Avaliação do Credenciado. Por favor, tente novamente.';
        }
      );
    } else {
      console.error('O formulário é inválido. Por favor, verifique os campos obrigatórios.');
      this.markFormGroupTouched(this.formularioAvaliacoesCredenciados);
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
