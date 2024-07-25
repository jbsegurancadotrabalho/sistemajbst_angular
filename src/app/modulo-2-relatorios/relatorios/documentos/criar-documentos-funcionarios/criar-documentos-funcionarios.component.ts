import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostDocumentosModel } from 'src/app/models/relatorios/PostDocumentosModel'; 
import { UnidadeDocService } from 'src/app/services/unidadedoc.service'; 
import { DocumentosService } from 'src/app/services/documentos.service';
import { RelatoriosService } from 'src/app/services/relatorios.service';
import { ActivatedRoute } from '@angular/router';
import { GetRelatoriosModel } from 'src/app/models/relatorios/GetRelatoriosModel';
import { GetUnidadeModel } from 'src/app/models/unidadedoc/GetUnidadeModel';
import * as $ from 'jquery';
import { NgSelectConfig } from '@ng-select/ng-select';
import { FuncionarioService } from 'src/app/services/funcionario.service';


@Component({
  selector: 'app-criar-documentos-funcionarios',
  templateUrl: './criar-documentos-funcionarios.component.html',
  styleUrls: ['./criar-documentos-funcionarios.component.css']
})
export class CriarDocumentosFuncionariosComponent implements OnInit, AfterViewInit {
  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioRelatorios!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  relatorios: GetRelatoriosModel | null = null;
  unidades: GetUnidadeModel[] = []; // Ensure this is an array
  funcionarios: [] = []; // Ensure this is an array

  id: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private unidadeDocService: UnidadeDocService,
    private documentosService: DocumentosService,
    private relatoriosService: RelatoriosService,
    private Funcionarioservice: FuncionarioService,
    private route: ActivatedRoute, 
    private activatedRoute: ActivatedRoute,
    private config: NgSelectConfig
  ) {

    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioRelatorios = this.formBuilder.group({
      venda: ['', Validators.required],
      valor: ['', Validators.required],
      status: ['', Validators.required],
      tipo_de_pagamento: ['', Validators.required],
      idunidadeDoc: ['', Validators.required],
      idRelatorios: ['', Validators.required],
      observacoes: ['', Validators.required],
    });
    if (this.id) {
      this.buscarRelatoriosPorId();
      this.buscarUnidades();
      this.buscarFuncionarios();
      
    }
  }

  buscarRelatoriosPorId(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;

    if (this.id) {
      this.relatoriosService.consultarRelatoriosPorId(this.id).subscribe(
        (data: GetRelatoriosModel) => {
          this.relatorios = data;
          this.formularioRelatorios.patchValue({
            idRelatorios: this.relatorios.idRelatorios,
          });
        },
        (error: any) => {
          console.error('Erro ao buscar função:', error);
        }
      );
    }
  }

  buscarUnidades(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.unidadeDocService.getTodasUnidades().subscribe(
      (data: any) => {
        this.unidades = data;
        console.log('Perigos fetched:', this.unidades);
      },
      (error: any) => {
        console.error('Error fetching perigos:', error);
      }
    );
  }

  
  buscarFuncionarios(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.Funcionarioservice.consultarFuncionarios().subscribe(
      (data: any) => {
        this.funcionarios = data;
        console.log('Perigos fetched:', this.funcionarios);
      },
      (error: any) => {
        console.error('Error fetching perigos:', error);
      }
    );
  }


  ngAfterViewInit(): void {
    if (this.planoSelect) {
      const selectElement = $(this.planoSelect.nativeElement) as any;
      selectElement.select2({
        theme: 'bootstrap-5',
      }).on('change', () => {
        const selectedValue = String(selectElement.val());
        this.formularioRelatorios.get('idunidadeDoc')?.setValue(selectedValue);
        this.formularioRelatorios.get('idunidadeDoc')?.updateValueAndValidity();
        this.formularioRelatorios.get('idFuncionario')?.setValue(selectedValue);
        this.formularioRelatorios.get('idFuncionario')?.updateValueAndValidity();
      });

      const lastOptionValue = this.unidades.length > 0 ? this.unidades[this.unidades.length - 1].idunidadeDoc : '';

      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');

      selectElement.val(lastOptionValue).trigger('change');
    }
  }

  criarRelatorios() {
    if (this.formularioRelatorios.valid) {
      const novoRisco: PostDocumentosModel = this.formularioRelatorios.value as PostDocumentosModel;
  
      // Log form fields to console
      console.log(this.formularioRelatorios.value);
  
      this.documentosService.criarDocumentos(novoRisco).subscribe(
        response => {
          console.log('Documento criado com sucesso:', response);
          this.cadastroSucesso = 'Documento criado com sucesso!';
        },
        error => {
          console.error('Erro ao criar Documentos:', error);
          this.cadastroErro = 'Erro ao criar Documento. Por favor, tente novamente.';
        }
      );
    } else {
      this.markFormGroupTouched(this.formularioRelatorios);
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

