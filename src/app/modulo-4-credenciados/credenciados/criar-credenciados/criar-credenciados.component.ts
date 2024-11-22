import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetEnderecoModel } from 'src/app/models/unidadedoc/GetEnderecoModel';
import * as $ from 'jquery';
import 'select2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { EnderecoService } from 'src/app/services/endereco.service';
import { CredenciadoService } from 'src/app/services/credenciados.service';
import { PostCredenciadosModel } from 'src/app/models/credenciados/PostCredenciadosModel';


@Component({
  selector: 'app-criar-credenciados',
  templateUrl: './criar-credenciados.component.html',
  styleUrls: ['./criar-credenciados.component.css']
})
export class CriarCredenciadosComponent implements OnInit {

  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioEpi: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;
  enderecos: GetEnderecoModel[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private EnderecoService: EnderecoService,
    private CredenciadoService: CredenciadoService,
    private route: ActivatedRoute, 
    private config: NgSelectConfig,

  ) 
  
  
  {

    this.formularioEpi= this.formBuilder.group({
      razaosocial: ['', Validators.required],
      nomeCredenciado: ['', Validators.required],
      cnpj: ['', Validators.required],
      status: ['', Validators.required],
      inscricaomunicipal: ['', Validators.required],
      responsavel_sistema: ['', Validators.required],
      email_usuario: ['', Validators.required],
      senha_sistema: ['', Validators.required],
      telefone_responsavel: ['', Validators.required],
      idEndereco: ['', Validators.required],

    });

    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
    this.carregarTodosEnderecos();

    
  }

  ngOnInit(): void {

    if (this.id) {
      this.carregarTodosEnderecos();
    }
    this.formularioEpi= this.formBuilder.group({
      razaosocial: ['', Validators.required],
      nomeCredenciado: ['', Validators.required],
      cnpj: ['', Validators.required],
      status: ['', Validators.required],
      inscricaomunicipal: ['', Validators.required],
      responsavel_sistema: ['', Validators.required],
      email_usuario: ['', Validators.required],
      senha_sistema: ['', Validators.required],
      telefone_responsavel: ['', Validators.required],
      idEndereco: ['', Validators.required],

    });


  }

  carregarTodosEnderecos(): void {
    this.EnderecoService.consultarEndereco()
      .subscribe(
        (enderecos) => {
          this.enderecos = enderecos;
        },
        (error) => {
          console.error('Erro ao carregar endereços:', error);
        }
      );
  }





  criarEpi() {
    // Verifique se o formulário é válido
    if (this.formularioEpi.valid) {
      const novoRisco: PostCredenciadosModel = this.formularioEpi.value as PostCredenciadosModel;
      this.CredenciadoService.criarCredenciado(novoRisco).subscribe(
        response => {
          console.log('Credenciado criado com sucesso:', response);
          this.cadastroSucesso = 'Credenciado criado com sucesso!';
          // Lógica adicional se necessário, como redirecionar para outra página
        },
        error => {
          console.error('Erro ao criar Credenciado:', error);
          this.cadastroErro = 'Erro ao criar Credenciado. Por favor, tente novamente.';
          // Lógica adicional para tratar o erro, como mostrar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this.formularioEpi);
    }
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

  
  
  


  ngAfterViewInit(): void {
    if (this.planoSelect) {
      const selectElement = $(this.planoSelect.nativeElement) as any;
  
      selectElement.select2({
        theme: 'bootstrap-5',
      }).on('change', () => {
        const selectedValue = String(selectElement.val());
        this.formularioEpi.get('idEndereco')?.setValue(selectedValue);
        this.formularioEpi.get('idEndereco')?.updateValueAndValidity();
      });
  
      const lastOptionValue = this.enderecos.length > 0 ? this.enderecos[this.enderecos.length - 1].idEndereco : '';
  
      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      selectElement.val(lastOptionValue).trigger('change');
    }
  }

}