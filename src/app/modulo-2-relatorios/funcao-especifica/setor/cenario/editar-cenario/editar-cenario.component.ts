import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CenarioService } from 'src/app/services/cenario.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PutCenarioModel } from 'src/app/models/funcao-especifica/PutCenarioModel'; 
import { GetCenarioModel } from 'src/app/models/funcao-especifica/GetCenarioModel';


@Component({
  selector: 'app-editar-cenario',
  templateUrl: './editar-cenario.component.html',
  styleUrls: ['./editar-cenario.component.css']
})
export class EditarCenarioComponent implements OnInit {
  id: string | null = null;
  cenario: GetCenarioModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  setorForm!: FormGroup;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private CenarioService: CenarioService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.setorForm = this.formBuilder.group({
      idCenario: [''], 
      nomeAtividade: ['', Validators.required],
      descricaoAtividade: ['', Validators.required],
      area: ['', Validators.required],

    });

    if (this.id) {
      this. buscarCenarioPorId();
    }
  }

  buscarCenarioPorId(): void {
    this.CenarioService.consultarCenarioPorId(this.id!).subscribe(
      (data:  GetCenarioModel) => {
        this.cenario = data;
        // Define os valores dos campos do formulário
        this.setorForm.patchValue({
          idCenario: this.cenario.idCenario,
          nomeAtividade: this.cenario.nomeAtividade,
          descricaoAtividade: this.cenario.descricaoAtividade,
          area: this.cenario.area,

        });
      },
      (error: any) => {
        console.error('Erro ao buscar função:', error);
      }
    );
  }

  enviarEdicao(): void {
    if (this. setorForm.valid) {
      this.CenarioService.editarCenario(this.id!, this.setorForm.value)
        .subscribe(
          response => {
            console.log('Cenário editado com sucesso!', response);
            // Definindo a mensagem de sucesso
            this.cadastroSucesso = 'Cenário editado com sucesso!';
            // Limpando o formulário após o sucesso
          },
          error => {
            console.error('Erro ao editar Cenário:', error);
            // Definindo a mensagem de erro
            this.cadastroErro = 'Erro ao editar Cenário. Por favor, tente novamente.';
          }
        );
    }
  }
  
}  

