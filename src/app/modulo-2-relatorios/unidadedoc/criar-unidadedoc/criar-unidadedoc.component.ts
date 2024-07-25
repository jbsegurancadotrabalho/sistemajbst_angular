import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnidadeDocService } from 'src/app/services/unidadedoc.service'; // Importe o serviço UnidadeDocService
import { GetUnidadeModel } from 'src/app/models/unidadedoc/GetUnidadeModel';
import { PostUnidadeModel } from 'src/app/models/unidadedoc/PostUnidadeModel';
import { Observable } from 'rxjs';
import { GetEnderecoModel } from 'src/app/models/unidadedoc/GetEnderecoModel';
import * as $ from 'jquery';
import 'select2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-criar-unidadedoc',
  templateUrl: './criar-unidadedoc.component.html',
  styleUrls: ['./criar-unidadedoc.component.css']
})
export class CriarUnidadedocComponent   {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  unidadeForm: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  enderecos: GetEnderecoModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private unidadeDocService: UnidadeDocService, // Importe o serviço UnidadeDocService
    private config: NgSelectConfig,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.unidadeForm = this.formBuilder.group({
      nomefantasia: ['', Validators.required],
      cnpj: ['', Validators.required],
      horario_empresa: [''],
      nomeEspecificoUnidade: ['', Validators.required],
      idEmpresa_doc: [''],
      idEndereco: ['']
    });

    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
    this.carregarTodosEnderecos();
  }

  ngOnInit(): void {
    var idEmpresa = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.httpClient.get('http://relatorio-jb-env.eba-w4gjvqei.us-east-2.elasticbeanstalk.com/empresa-doc/' + idEmpresa)
      .subscribe({
        next: (data: any) => {
          this.unidadeForm.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })
  }

  ngAfterViewInit(): void {
    if (this.planoSelect) {
      const selectElement = $(this.planoSelect.nativeElement) as any;
  
      selectElement.select2({
        theme: 'bootstrap-5',
      }).on('change', () => {
        const selectedValue = String(selectElement.val());
        this.unidadeForm.get('idEndereco')?.setValue(selectedValue);
        this.unidadeForm.get('idEndereco')?.updateValueAndValidity();
      });
  
      const lastOptionValue = this.enderecos.length > 0 ? this.enderecos[this.enderecos.length - 1].idEndereco : '';
  
      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      selectElement.val(lastOptionValue).trigger('change');
    }
  }

  criarUnidade() {
    if (this.unidadeForm.valid) {
      console.log('Dados do formulário:', this.unidadeForm.value);
      
      this.unidadeDocService.criarUnidadeDoc(this.unidadeForm.value) // Verifique se aqui está chamando o método correto do serviço UnidadeDocService
        .subscribe(
          response => {
            console.log('Unidade criada com sucesso!', response);
            this.cadastroSucesso = 'Unidade criada com sucesso!';
            this.unidadeForm.reset();
          },
          error => {
            console.error('Erro ao criar unidade:', error);
            this.cadastroErro = 'Erro ao criar unidade. Por favor, tente novamente.';
          }
        );
    } else {
      console.error('Formulário inválido. Por favor, preencha os campos corretamente.');
    }
  }


  carregarTodosEnderecos(): void {
    this.unidadeDocService.getTodosEndereco()
      .subscribe(
        (enderecos) => {
          this.enderecos = enderecos;
        },
        (error) => {
          console.error('Erro ao carregar endereços:', error);
        }
      );
  }
}
