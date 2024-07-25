import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service'; 
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { GetUsuarioModel } from 'src/app/models/usuarios/GetUsuarioModel';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cadastrar-empresa-cliente',
  templateUrl: './cadastrar-empresa-cliente.component.html',
  styleUrls: ['./cadastrar-empresa-cliente.component.css']
})
export class CadastrarEmpresaClienteComponent implements OnInit {
  empresaForm!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  usuario: GetUsuarioModel | null = null;
  id: string | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private empresaService: EmpresaService,
    private activatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.empresaForm = this.formBuilder.group({
      id: ['', Validators.required],
      razaosocial: ['', Validators.required],
      nomefantasia: ['', Validators.required],
      cnpj: ['', Validators.required],
      status: ['', Validators.required],
      responsavel_sistema: ['', Validators.required],
      telefone_responsavel: ['', Validators.required]
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.buscarUsuarioPorId();
    }
  }

  buscarUsuarioPorId(): void {
    this.usuariosService.consultarUsuarioPorId(this.id!).subscribe(
      (data: GetUsuarioModel) => {
        this.usuario = data;
        this.empresaForm.patchValue({
          id: this.usuario.id,
        });
        this.cd.detectChanges();
      },
      (error: any) => {
        console.error('Erro ao buscar usuário:', error);
      }
    );
  }

  criarEmpresa() {
    if (this.empresaForm.valid) {
      this.empresaService.criarEmpresa(this.empresaForm.value)
        .subscribe(
          response => {
            console.log('Empresa criada com sucesso!', response);
            this.cadastroSucesso = 'Empresa criada com sucesso!';
            this.empresaForm.reset();
          },
          error => {
            console.error('Erro ao criar empresa:', error);
            this.cadastroErro = 'Erro ao criar empresa. Por favor, tente novamente.';
          }
        );
    }
  }
}
