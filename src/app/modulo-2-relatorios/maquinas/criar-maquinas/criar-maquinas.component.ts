import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaquinaService } from 'src/app/services/maquina.service';
import { PostMaquinasModel } from 'src/app/models/sms/PostMaquinasModel';


@Component({
  selector: 'app-criar-maquinas',
  templateUrl: './criar-maquinas.component.html',
  styleUrls: ['./criar-maquinas.component.css']
})
export class CriarMaquinasComponent  implements OnInit {
 
  formularioMaquina!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private maquinaService: MaquinaService
  ) {}

  ngOnInit(): void {
    this.formularioMaquina= this.formBuilder.group({
      nome_maquina: ['', Validators.required],
      local_maquina: ['', Validators.required],
      descricao_maquina: ['', Validators.required],
      descricao_funcao_maquina: ['', Validators.required],
      patrimonio_maquina: ['', Validators.required],
      fabricante_maquina: ['', Validators.required],
      fabricacao_maquina: ['', Validators.required],
      serie_maquina: ['', Validators.required],
      modelo_maquina: ['', Validators.required],
      posicaotrabalho_maquina: ['', Validators.required],
      peso_maquina: ['', Validators.required],
      historico_acidente_maquina: ['', Validators.required],
      voltagem_maquina: ['', Validators.required],
      comando_maquina: ['', Validators.required],
      potencia_maquina: ['', Validators.required],
      qtdOperadores_maquina: ['', Validators.required],
      turno_maquina: ['', Validators.required],
      dias_turno_maquina: ['', Validators.required],
      capacidade_maquina: ['', Validators.required],
      carga_maquina: ['', Validators.required],
      descarga_maquina: ['', Validators.required],
      arranjo_fisico: ['', Validators.required],
      instalacoes: ['', Validators.required], // Verifique aqui o nome do controle
      dispositivos_eletricos: ['', Validators.required],
      aterramento_maquinas: ['', Validators.required],
      condutores_maquinas: ['', Validators.required],
      dispositivos_partida: ['', Validators.required],
      sistema_seguranca: ['', Validators.required]
    });
  }

  criarMaquina() {
    // Verifique se o formulário é válido
    if (this.formularioMaquina.valid) {
      const novaMaquina: PostMaquinasModel = this.formularioMaquina.value as PostMaquinasModel;
      this.maquinaService.criarMaquina(novaMaquina).subscribe(
        response => {
          console.log('Máquina criada com sucesso:', response);
          this.cadastroSucesso = 'Máquina criada com sucesso!';
          this.cadastroErro = null;
          this.formularioMaquina.reset();
        },
        error => {
          console.error('Erro ao criar Máquina:', error);
          this.cadastroErro = 'Erro ao criar Máquina. Por favor, tente novamente.';
          this.cadastroSucesso = null;
        }
      );
    } else {
      // Se o formulário não for válido, marque os campos como tocados para exibir os erros
      this.markFormGroupTouched(this.formularioMaquina);
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