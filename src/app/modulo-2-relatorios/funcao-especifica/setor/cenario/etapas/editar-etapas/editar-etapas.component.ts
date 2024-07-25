import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtapasService } from 'src/app/services/etapas.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PutEtapasModel } from 'src/app/models/funcao-especifica/PutEtapasModel'; 
import { GetEtapasModel } from 'src/app/models/funcao-especifica/GetEtapasModel';


@Component({
  selector: 'app-editar-etapas',
  templateUrl: './editar-etapas.component.html',
  styleUrls: ['./editar-etapas.component.css']
})
export class EditarEtapasComponent implements OnInit {
  id: string | null = null;
  etapas: GetEtapasModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  etapaForm!: FormGroup;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private EtapasService: EtapasService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.etapaForm = this.formBuilder.group({
      numero_etapa: ['', Validators.required],
      nome_etapa: ['', Validators.required],
      descricao_etapa: ['', Validators.required],
      acoes: ['', Validators.required],
      idEtapas: ['', Validators.required]

    });

    if (this.id) {
      this. buscarCenarioPorId();
    }
  }

  buscarCenarioPorId(): void {
    this.EtapasService.consultarEtapasPorId(this.id!).subscribe(
      (data:  GetEtapasModel) => {
        this.etapas = data;
        // Define os valores dos campos do formulário
        this.etapaForm.patchValue({
          idEtapas: this.etapas.idEtapas,
          numero_etapa: this.etapas.numero_etapa,
          nome_etapa: this.etapas.nome_etapa,
          descricao_etapa: this.etapas.descricao_etapa,
          acoes: this.etapas.acoes,

        });
      },
      (error: any) => {
        console.error('Erro ao buscar função:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this.etapaForm.valid) {
      this.EtapasService.editarEtapas(this.id!, this.etapaForm.value)
        .subscribe(
          response => {
            console.log('Etapa editada com sucesso!', response);
            // Definindo a mensagem de sucesso
            this.cadastroSucesso = 'Etapa editada com sucesso!';
            // Limpando o formulário após o sucesso
          },
          error => {
            console.error('Erro ao editar Etapas:', error);
            // Definindo a mensagem de erro
            this.cadastroErro = 'Erro ao editar Etapas. Por favor, tente novamente.';
          }
        );
    }
  }
  
}  

