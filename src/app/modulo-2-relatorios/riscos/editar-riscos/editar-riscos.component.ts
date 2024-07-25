import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RiscosService } from 'src/app/services/riscos.service';
import { PutRiscosModel } from 'src/app/models/sms/PutRiscosModel';

@Component({
  selector: 'app-editar-riscos',
  templateUrl: './editar-riscos.component.html',
  styleUrls: ['./editar-riscos.component.css']
})


export class EditarRiscosComponent implements OnInit {
  id: string | null = null;
  funcao: PutRiscosModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  funcaodocForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private riscosService: RiscosService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.funcaodocForm = this.formBuilder.group({
      idRisco: ['', Validators.required],
      grupo: ['', Validators.required],
      tipo: ['', Validators.required],
      fonte_geradora: ['', Validators.required],
      meios_de_propagacao: ['', Validators.required],
      cor: ['', Validators.required],
      meios_de_controles: ['', Validators.required]
    
    });

    if (this.id) {
      this.buscarFuncaoPorId();
    }
  }

  buscarFuncaoPorId(): void {
    this.riscosService.consultarRiscoPorId(this.id!).subscribe(
      (data: PutRiscosModel) => {
        this.funcao = data;
        // Define os valores dos campos do formulário
        this.funcaodocForm.patchValue({
          idRisco: this.funcao.idRisco, // Preenche o ID do risco
          grupo: this.funcao.grupo,
          tipo: this.funcao.tipo,
          fonte_geradora: this.funcao.fonte_geradora,
          meios_de_propagacao: this.funcao.meios_de_propagacao,
          cor: this.funcao.cor,
          meios_de_controles: this.funcao.meios_de_controles
    
        });
      },
      (error: any) => {
        console.error('Erro ao buscar função:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this.funcaodocForm.valid) {
      const formData = this.funcaodocForm.value as PutRiscosModel;
      this.riscosService.editarRisco(this.id!, formData).subscribe(
        response => {
          console.log('Função editada com sucesso!', response);
          // Definindo a mensagem de sucesso
          this.cadastroSucesso = 'Função editada com sucesso!';
          // Limpando o formulário após o sucesso
          this.funcaodocForm.reset();
        },
        error => {
          console.error('Erro ao editar função:', error);
          // Definindo a mensagem de erro
          this.cadastroErro = 'Erro ao editar função. Por favor, tente novamente.';
        }
      );
    }
  }
}