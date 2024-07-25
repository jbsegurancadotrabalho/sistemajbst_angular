import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { GetFuncionarioModel } from 'src/app/models/Funcionario/GetFuncionarioModel'; 
import { PutFuncionarioModel } from 'src/app/models/Funcionario/PutFuncionarioModel'; 
import * as $ from 'jquery';
import 'select2'; // Adicione esta importação
import { HttpClient } from '@angular/common/http';
import 'select2'; // Adicione esta importação
import { NgSelectConfig } from '@ng-select/ng-select';
import { GetFuncaoModel } from 'src/app/models/funcaodoc/GetFuncaoModel';

@Component({
  selector: 'app-editar-funcionario-empresa',
  templateUrl: './editar-funcionario-empresa.component.html',
  styleUrls: ['./editar-funcionario-empresa.component.css']
})
export class EditarFuncionarioEmpresaComponent implements OnInit, AfterViewInit {
  @ViewChild('planoSelect') planoSelect!: ElementRef;

  idFuncao: string | null = null;
  id: string | null = null;
  funcionario: PutFuncionarioModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  funcionarioForm!: FormGroup;
  funcoes: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private funcionarioService: FuncionarioService,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private config: NgSelectConfig

  ) {

    this.config.notFoundText = 'Não encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.funcionarioForm = this.formBuilder.group({
      idFuncionario: ['', Validators.required],
      nome: ['', Validators.required],
      rg: ['', Validators.required],
      cpf: ['', Validators.required],
      status: ['', Validators.required],
      matricula: ['', Validators.required],
      idFuncao: ['', Validators.required]  // Certifique-se de incluir o campo idFuncao
    });

    if (this.id) {
      this.buscarFuncionarioPorId();
    }

    this.idFuncao = this.route.snapshot.paramMap.get('idFuncao');
    this.httpClient.get('http://localhost:8081/api/funcao').subscribe({

    next: (data: any) => {
      this.funcoes = Object.values(data) as any[];
    },
    error: (e) => {
      console.log(e);
    }
  }); 
 
    }

    

  ngAfterViewInit(): void {
    $(document).ready(() => {
      if (this.planoSelect) {
        const selectElement = $(this.planoSelect.nativeElement) as any;

        selectElement.select2({
          theme: 'bootstrap-5',
        }).on('change', () => {
          const selectedValue = String(selectElement.val());
          this.funcionarioForm.get('idFuncao')?.setValue(selectedValue);
          this.funcionarioForm.get('idFuncao')?.updateValueAndValidity();
        });

        selectElement.next().find('.select2-selection').addClass('form-control');
        selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
      }
    });


  }
  carregarFuncoes(): void {

}

  
  buscarFuncionarioPorId(): void {
    this.funcionarioService.consultarFuncionarioPorId(this.id!).subscribe(
      (data: GetFuncionarioModel) => {
        this.funcionario = data;
        this.funcionarioForm.patchValue({
          idFuncionario: this.funcionario.idFuncionario,
          nome: this.funcionario.nome,
          rg: this.funcionario.rg,
          cpf: this.funcionario.cpf,
          status: this.funcionario.status,
          matricula: this.funcionario.matricula,
          idFuncao: this.funcionario.idFuncao  // Certifique-se de preencher o idFuncao
        });
      },
      (error: any) => {
        console.error('Erro ao buscar Funcionário:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this.funcionarioForm.valid) {
        const formData = this.funcionarioForm.value as PutFuncionarioModel;
        console.log('Dados do formulário:', formData); // Adicione este log para depurar os dados do formulário
        this.funcionarioService.editar(this.id!, formData).subscribe(
            response => {
                console.log('Funcionário editado com sucesso!', response);
                this.cadastroSucesso = 'Funcionário editado com sucesso!';
                this.cadastroErro = null;
            },
            error => {
                console.error('Erro ao editar Funcionário:', error);
                this.cadastroErro = 'Erro ao editar Funcionário. Por favor, tente novamente.';
                this.cadastroSucesso = null;
            }
        );
    } else {
        this.markFormGroupTouched(this.funcionarioForm);
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

  customMatchFn = (term: string, item: any) => {
    return item.funcao.toLowerCase().indexOf(term.toLowerCase()) > -1;
  };


  
}


 
