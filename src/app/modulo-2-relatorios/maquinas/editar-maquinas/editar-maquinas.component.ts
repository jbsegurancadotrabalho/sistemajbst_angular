import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaquinaService } from 'src/app/services/maquina.service'; 
import { PutMaquinasModel } from 'src/app/models/sms/PutMaquinasModel'; 
import { GetMaquinasModel } from 'src/app/models/sms/GetMaquinasModel';

@Component({
  selector: 'app-editar-maquinas',
  templateUrl: './editar-maquinas.component.html',
  styleUrls: ['./editar-maquinas.component.css']
})
export class EditarMaquinasComponent implements OnInit {
  id: string | null = null;
  maquinas: PutMaquinasModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  maquinaForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private maquinasService: MaquinaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.maquinaForm = this.formBuilder.group({
      idMaquina: ['', Validators.required],
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
      instalaçoes: ['', Validators.required],
      dispositivos_eletricos: ['', Validators.required],
      aterramento_maquinas: ['', Validators.required],
      condutores_maquinas: ['', Validators.required],
      dispositivos_partida: ['', Validators.required],
      sistema_seguranca: ['', Validators.required]
    });
    
    if (this.id) {
      this.buscarMaquinaPorId();
    }
  }

  buscarMaquinaPorId(): void {
    this.maquinasService.consultarMaquinasPorId(this.id!).subscribe(
      (data: GetMaquinasModel) => {
        // Transformar os dados retornados em um PutMaquinasModel
        const maquinasData: PutMaquinasModel = {
          idMaquina: data.idMaquina,
          nome_maquina: data.nome_maquina,
          local_maquina: data.local_maquina,
          descricao_maquina: data.descricao_maquina, // Use `descricao_maquina`
          descricao_funcao_maquina: data.descricao_funcao_maquina,
          patrimonio_maquina: data.patrimonio_maquina,
          fabricante_maquina: data.fabricante_maquina,
          fabricacao_maquina: data.fabricacao_maquina,
          serie_maquina: data.serie_maquina,
          modelo_maquina: data.modelo_maquina,
          posicaotrabalho_maquina: data.posicaotrabalho_maquina,
          peso_maquina: data.peso_maquina,
          historico_acidente_maquina: data.historico_acidente_maquina,
          voltagem_maquina: data.voltagem_maquina,
          comando_maquina: data.comando_maquina,
          potencia_maquina: data.potencia_maquina,
          qtdOperadores_maquina: data.qtdOperadores_maquina,
          turno_maquina: data.turno_maquina,
          dias_turno_maquina: data.dias_turno_maquina,
          capacidade_maquina: data.capacidade_maquina,
          carga_maquina: data.carga_maquina,
          descarga_maquina: data.descarga_maquina,
          arranjo_fisico: data.arranjo_fisico,
          instalaçoes: data.instalaçoes,
          dispositivos_eletricos: data.dispositivos_eletricos,
          aterramento_maquinas: data.aterramento_maquinas,
          condutores_maquinas: data.condutores_maquinas,
          dispositivos_partida: data.dispositivos_partida,
          sistema_seguranca: data.sistema_seguranca
        };
        this.maquinas = maquinasData;
        this.maquinaForm.patchValue(maquinasData);
      },
      (error: any) => {
        console.error('Erro ao buscar máquina:', error);
      }
    );
  }
  

  enviarEdicao(): void {
    if (this.maquinaForm.valid) {
      const formData = this.maquinaForm.value as PutMaquinasModel;
      this.maquinasService.editarMaquinas(this.id!, formData).subscribe(
        response => {
          console.log('Máquina editada com sucesso!', response);
          this.cadastroSucesso = 'Máquina editada com sucesso!';
          this.cadastroErro = null;
        },
        error => {
          console.error('Erro ao editar máquina:', error);
          this.cadastroErro = 'Erro ao editar máquina. Por favor, tente novamente.';
          this.cadastroSucesso = null;
        }
      );
    } else {
      this.markFormGroupTouched(this.maquinaForm);
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
}
