import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service'; 
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { GetUsuarioModel } from 'src/app/models/usuarios/GetUsuarioModel';
import { ChangeDetectorRef } from '@angular/core';
import { GetEmpresaModel } from 'src/app/models/empresadoc/GetEmpresaModel';


@Component({
  selector: 'app-editar-empresa-cliente',
  templateUrl: './editar-empresa-cliente.component.html',
  styleUrls: ['./editar-empresa-cliente.component.css']
})


export class EditarEmpresaClienteComponent {

 
  empresaForm!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  empresa: GetEmpresaModel| null = null;
  idEmpresa: string | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private empresaService: EmpresaService,
    private activatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.empresaForm = this.formBuilder.group({
      idEmpresa: ['', Validators.required],
      razaosocial: ['', Validators.required],
      nomefantasia: ['', Validators.required],
      cnpj: ['', Validators.required],
      status: ['', Validators.required],
      responsavel_sistema: ['', Validators.required],
      telefone_responsavel: ['', Validators.required]
    });

    this.idEmpresa = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.idEmpresa) {
      this.buscarUsuarioPorId();
    }
  }

  buscarUsuarioPorId(): void {
    this.empresaService.consultarEmpresaPorId(this.idEmpresa!).subscribe(
      (data: GetEmpresaModel) => {
        this.empresa = data;
        this.empresaForm.patchValue({
          idEmpresa: this.empresa.idEmpresa,
          razaosocial: this.empresa.razaosocial,
          nomefantasia: this.empresa.nomefantasia,
          status: this.empresa.status,
          cnpj: this.empresa.cnpj,
          responsavel_sistema: this.empresa.responsavel_sistema,
          telefone_responsavel: this.empresa.telefone_responsavel


        });
        this.cd.detectChanges();
      },
      (error: any) => {
        console.error('Erro ao buscar usuário:', error);
      }
    );
  }

  editarEmpresa() {
    if (this.empresaForm.valid) {
      this.empresaService.editarEmpresa(this.empresaForm.value)
        .subscribe(
          response => {
            console.log('Empresa editada com sucesso!', response);
            this.cadastroSucesso = 'Empresa editada com sucesso!';
            this.empresaForm.reset();
          },
          error => {
            console.error('Erro ao editar empresa:', error);
            this.cadastroErro = 'Erro ao editar empresa. Por favor, tente novamente.';
          }
        );
    }
  }
}

 