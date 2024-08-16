import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChamadosClienteService } from 'src/app/services/chamados-clientes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { GetUsuarioModel } from 'src/app/models/usuarios/GetUsuarioModel';
import { ChangeDetectorRef } from '@angular/core';
import { GetChamadosModel } from 'src/app/models/chamados/GetChamadosModel';
import { PutChamadosModel } from 'src/app/models/chamados/PutChamadosModel';

@Component({
  selector: 'app-editar-chamados-clientes',
  templateUrl: './editar-chamados-clientes.component.html',
  styleUrls: ['./editar-chamados-clientes.component.css']
})
export class EditarChamadosClientesComponent  implements OnInit {

  chamadoForm!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  chamado: PutChamadosModel | null = null;
  id: string | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private chamadosClienteService: ChamadosClienteService,
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.chamadoForm = this.formBuilder.group({
      id_chamados_clientes: ['', Validators.required],
      nome_contato: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      empresa: ['', Validators.required],
      cnpj: ['', Validators.required],
      tipo_servico: ['', Validators.required],
      corpo_assunto: ['', Validators.required],
      status_chamado: ['', Validators.required],
      resposta_chamado:  ['', Validators.required],
    });

    if (this.id) {
      this.buscarChamadoPorId();
    }
  }

  buscarChamadoPorId(): void {
    this.chamadosClienteService.getChamadoById(this.id!).subscribe(
      (data: PutChamadosModel) => {
        this.chamado = data;
        this.chamadoForm.patchValue({
          id_chamados_clientes: this.chamado.id_chamados_clientes,
          nome_contato: this.chamado.nome_contato,
          email: this.chamado.email,
          telefone: this.chamado.telefone,
          empresa: this.chamado.empresa,
          cnpj: this.chamado.cnpj,
          tipo_servico:this.chamado.tipo_servico,
          corpo_assunto: this.chamado.corpo_assunto,
          status_chamado: this.chamado.status_chamado,
          resposta_chamado: this.chamado.resposta_chamado,
        });
      },
      (error: any) => {
        console.error('Erro ao buscar chamado:', error);
      }
    );
  }

  criarChamado(): void {
    if (this.chamadoForm.valid) {
      const formData = this.chamadoForm.value;
      console.log('Dados do formulário:', formData); // Log para depuração

      if (this.id) {
        this.chamadosClienteService.editarChamadoCliente(this.id, formData).subscribe(
          response => {
            console.log('Suporte Finalizado com sucesso!', response);
            this.cadastroSucesso = 'Suporte Finalizado com sucesso!';
            this.chamadoForm.reset();
          },
          error => {
            console.error('Erro ao dá o Suporte:', error);
            this.cadastroErro = 'Erro ao dá o Suporte. Por favor, tente novamente.';
          }
        );
      }
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
