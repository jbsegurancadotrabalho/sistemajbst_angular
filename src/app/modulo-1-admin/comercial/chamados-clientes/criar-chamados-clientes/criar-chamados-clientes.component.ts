import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChamadosClienteService } from 'src/app/services/chamados-clientes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { GetUsuarioModel } from 'src/app/models/usuarios/GetUsuarioModel';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-criar-chamados-clientes',
  templateUrl: './criar-chamados-clientes.component.html',
  styleUrls: ['./criar-chamados-clientes.component.css']
})
export class CriarChamadosClientesComponent implements OnInit {

  chamadoForm!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  usuario: GetUsuarioModel | null = null;
  id: string | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private chamadosClienteService: ChamadosClienteService,
    private activatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.chamadoForm = this.formBuilder.group({
      nome_contato: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      empresa: ['', Validators.required],
      cnpj: ['', Validators.required],
      tipo_servico: ['', Validators.required],
      corpo_assunto: ['', Validators.required],
      id: [''], // Inicialize como string vazia ou opcional
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
        this.chamadoForm.patchValue({
          id: this.usuario.id,
        });
        this.cd.detectChanges();
      },
      (error: any) => {
        console.error('Erro ao buscar usuário:', error);
      }
    );
  }

  criarChamado(): void {
    if (this.chamadoForm.valid) {
      const formData = this.chamadoForm.value;
      console.log('Dados do formulário:', formData); // Log para depuração

      this.chamadosClienteService.criarChamadoCliente(formData).subscribe(
        response => {
          console.log('Chamado criado com sucesso!', response);
          this.cadastroSucesso = 'Chamado criado com sucesso!';
          this.chamadoForm.reset();
        },
        error => {
          console.error('Erro ao criar chamado:', error);
          this.cadastroErro = 'Erro ao criar chamado. Por favor, tente novamente.';
        }
      );
    } else {
      this.markFormGroupTouched(this.chamadoForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
