import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultar-funcionario-por-cpf',
  templateUrl: './consultar-funcionario-por-cpf.component.html',
  styleUrls: ['./consultar-funcionario-por-cpf.component.css']
})
export class ConsultarFuncionarioPorCpfComponent implements OnInit {
  formularioFuncionario: FormGroup;
  paginaAtual1: number = 1;
  itensPorPagina: number = 100;
  filtro: any = { nome_empresas: '' };
  funcionarios: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService,
    private config: NgSelectConfig,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    // Initialize the form with validators
    this.formularioFuncionario = this.formBuilder.group({
      idEmpresa: ['', Validators.required],
      cpf: ['', Validators.required],
    });

    // Configure NgSelect
    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    // Fetch company ID from route and set it in the form
    const idEmpresa = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.loadCompany(idEmpresa);
    this.buscarFuncionario();

  }

  // Load company details and set the idEmpresa in the form
  private loadCompany(idEmpresa: string): void {
    this.httpClient.get(`http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/empresa/${idEmpresa}`)
      .subscribe({
        next: (data: any) => {
          this.formularioFuncionario.patchValue({
            idEmpresa: idEmpresa,
            ...data // Populate other fields if necessary
          });
        },
        error: (error) => {
          console.error('Erro ao carregar empresa:', error);
        }
      });
  }

  // Search for employee by CPF
  buscarFuncionario(): void {
    console.log('Iniciando busca de funcionário...');

    if (this.formularioFuncionario.valid) {
      const idEmpresa = this.formularioFuncionario.get('idEmpresa')?.value;
      const cpf = this.formularioFuncionario.get('cpf')?.value;

      console.log('Valor de idEmpresa:', idEmpresa);
      console.log('Valor de cpf:', cpf);

      // Call the service to fetch employees based on the company ID and CPF
      this.funcionarioService.consultarFuncionariosPorEmpresaECpf(idEmpresa, cpf).subscribe(
        (data) => {
          this.funcionarios = data;
          console.log('Funcionários encontrados:', data);
        },
        (error) => {
          console.error('Erro ao buscar funcionários:', error);
        }
      );
    } else {
      console.log('Formulário inválido');
      this.markFormGroupTouched(this.formularioFuncionario);
    }
  }

  // Mark all controls in the form as touched
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
