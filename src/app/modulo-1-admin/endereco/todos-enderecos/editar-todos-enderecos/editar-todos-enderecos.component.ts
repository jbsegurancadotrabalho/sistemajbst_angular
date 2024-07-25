import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostEnderecoModel } from 'src/app/models/endereco/PostEnderecoModel';
import { PutEnderecoModel } from 'src/app/models/endereco/PutEnderecoModel';
import { GetEnderecoModel } from 'src/app/models/unidadedoc/GetEnderecoModel';
import { EnderecoService } from 'src/app/services/endereco.service';


@Component({
  selector: 'app-editar-todos-enderecos',
  templateUrl: './editar-todos-enderecos.component.html',
  styleUrls: ['./editar-todos-enderecos.component.css']
})
export class EditarTodosEnderecosComponent implements OnInit {

  formularioEndereco!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  id: string | null = null;
  endereco: GetEnderecoModel | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private EnderecoService: EnderecoService,
    private route: ActivatedRoute, 
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formularioEndereco = this.formBuilder.group({
      idEndereco: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      complemento: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      localidade: ['', Validators.required],
      uf: ['', Validators.required],

    });

    if (this.id) {
      this.buscarEnderecoPorId();
    }
   
  }
  buscarEnderecoPorId(): void {
    this.EnderecoService.consultarEnderecoPorId(this.id!).subscribe(
      (data: GetEnderecoModel ) => {
        this.endereco = data;
        this.formularioEndereco.patchValue({
        idEndereco: this.endereco.idEndereco,
        cep: this.endereco.cep,
        logradouro: this.endereco.logradouro,
        complemento: this.endereco.complemento,
        numero: this.endereco.numero,
        bairro: this.endereco.bairro,
         localidade: this.endereco.localidade,
         uf: this.endereco.uf,
        });
      },
      (error: any) => {
        console.error('Erro ao buscar EPI:', error);
      }
    );
  }


  editarEndereco() {
    if (this.formularioEndereco.valid) {
      const novoEndereco: PutEnderecoModel = this.formularioEndereco.value as PutEnderecoModel;
      this.EnderecoService.editarEndereco(novoEndereco).subscribe(
        response => {
          console.log('Endereço editado com sucesso:', response);
          this.cadastroSucesso = 'Endereço editado com sucesso!';
        },
        error => {
          console.error('Erro ao criar Endereço:', error);
          this.cadastroErro = 'Erro ao criar Endereço. Por favor, tente novamente.';
        }
      );
    } else {
      this.markFormGroupTouched(this.formularioEndereco);
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
}