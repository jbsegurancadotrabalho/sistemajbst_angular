import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FuncaoEspecificaService } from 'src/app/services/funcaoespecifica.service'; 
import { CenarioService } from 'src/app/services/cenario.service';
import { GetCenarioModel } from 'src/app/models/funcao-especifica/GetCenarioModel';


@Component({
  selector: 'app-criar-funcao-especifica-unidadedoc',
  templateUrl: './criar-funcao-especifica-unidadedoc.component.html',
  styleUrls: ['./criar-funcao-especifica-unidadedoc.component.css']
})
export class CriarFuncaoEspecificaUnidadedocComponent implements OnInit {
  id: string | null = null;
  cenario: GetCenarioModel | null = null;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  funcaoForm!: FormGroup;

  constructor(
    private route: ActivatedRoute, 
    private ActivatedRoute: ActivatedRoute, 
    private CenarioService: CenarioService,
    private formBuilder: FormBuilder,
    private FuncaoEspecificaService: FuncaoEspecificaService,
  ) {}

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.funcaoForm = this.formBuilder.group({
      idCenario: [''], 
      setor_gho: ['', Validators.required],
      nome_da_funcao: ['', Validators.required],
      cenario_funcaodoc: ['', Validators.required],
      cbo: ['', Validators.required],
      descricao: ['', Validators.required],
      gro: ['', Validators.required],
      gp: ['', Validators.required],

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
        this.funcaoForm.patchValue({
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


  criarFuncao() {
    if (this.funcaoForm.valid) {
      console.log('Dados do formulário:', this.funcaoForm.value);
      
      this.FuncaoEspecificaService.criarFuncao(this.funcaoForm.value) // Verifique se aqui está chamando o método correto do serviço UnidadeDocService
        .subscribe(
          response => {
            console.log('Função criada com sucesso!', response);
            this.cadastroSucesso = 'Função criada com sucesso!';
            this.funcaoForm.reset();
          },
          error => {
            console.error('Erro ao criar função:', error);
            this.cadastroErro = 'Erro ao criar Função. Por favor, tente novamente.';
          }
        );
    } else {
      console.error('Formulário inválido. Por favor, preencha os campos corretamente.');
    }
  }

  
}  

