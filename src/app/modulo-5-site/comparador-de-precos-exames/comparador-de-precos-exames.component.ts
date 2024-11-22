import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ExamesService } from 'src/app/services/exames.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { GetEnderecoModel } from 'src/app/models/unidadedoc/GetEnderecoModel';
import { GetExamesModel } from 'src/app/models/exames/GetExamesModel';
import * as $ from 'jquery';
import 'select2';
import { GetExamesPorLocalidadeModel } from 'src/app/models/exames/GetExamesPorLocalidadeModel.ts/GetExamesPorLocalidadeModel';
import { GetUfModel } from 'src/app/models/endereco/GetUfModel';

@Component({
  selector: 'app-comparador-de-precos-exames',
  templateUrl: './comparador-de-precos-exames.component.html',
  styleUrls: ['./comparador-de-precos-exames.component.css']
})
export class ComparadorDePrecosExamesComponent implements OnInit, AfterViewInit {
  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formularioEpi: FormGroup;
  paginaAtual1: number = 1;
  itensPorPagina = 100;
  filtro: any = { nome_empresas: '' };
  enderecouff: GetUfModel[] = [];
  enderecoslocalidade: GetEnderecoModel[] = [];
  enderecosbairro: GetEnderecoModel[] = [];
  exames1: GetExamesModel[] = [];
  exames2: any [] = []


  constructor(
    private formBuilder: FormBuilder,
    private ExamesService: ExamesService,
    private EnderecoService: EnderecoService,
    private config: NgSelectConfig
  ) {
    this.formularioEpi = this.formBuilder.group({
      nome_exame: ['', Validators.required],
      localidade: ['', Validators.required],
      bairro: ['', Validators.required],
      uf: ['', Validators.required]  // Certifique-se de que o campo 'uf' está aqui
    });
  
    this.config.notFoundText = 'Não Encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }
  

  ngOnInit(): void {
    this.carregarUfsEndereco();
    this.carregarLocalidadeEndereco();
    this.carregarBairroEndereco();
    this.consultarExames();
  
    // Inscrição no valueChanges do campo 'uf' para verificar mudanças no valor selecionado
    this.formularioEpi.get('uf')?.valueChanges.subscribe(value => {
      console.log('Endereços UF:', this.enderecouff);
    });
  }
  

  ngAfterViewInit(): void {
    if (this.planoSelect) {
      const selectElement = $(this.planoSelect.nativeElement) as any;
  
      selectElement.select2({
        theme: 'bootstrap-5',
      }).on('change', () => {
        const selectedValue = String(selectElement.val());
  
        // Atualizar o campo 'bairro' com o valor selecionado
        this.formularioEpi.get('bairro')?.setValue(selectedValue);
  
        // Atualizar o campo 'uf' se não estiver vazio
        if (this.enderecouff.length > 0) {
          const ufValue = this.enderecouff[this.enderecouff.length - 1].uf;
          this.formularioEpi.get('uf')?.setValue(ufValue);
          this.formularioEpi.get('uf')?.updateValueAndValidity();
          console.log('UF atualizada:', ufValue);
        }
  
        // Atualizar o campo 'localidade' se não estiver vazio
        if (this.enderecoslocalidade.length > 0) {
          const localidadeValue = this.enderecoslocalidade[this.enderecoslocalidade.length - 1].localidade;
          this.formularioEpi.get('localidade')?.setValue(localidadeValue);
          this.formularioEpi.get('localidade')?.updateValueAndValidity();
        }
      });
  
      // Configurar o estilo do Select2
      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
    }
  }
  

  consultarExames(): void {
    this.ExamesService.consultarExames().subscribe(
      (data: GetExamesModel[]) => {
        this.exames1 = data;
        if (this.exames1.length > 0) {
          const selectedExame = this.exames1[0];
          this.formularioEpi.patchValue({
            nome_exame: selectedExame.nome_exame,
          });
        }
      },
      (error: any) => {
        console.error('Erro ao buscar exames:', error);
      }
    );
  }

  buscarExames(): void {
    if (this.formularioEpi.valid) {
      const nomeExame = this.formularioEpi.get('nome_exame')?.value;
      const localidade = this.formularioEpi.get('localidade')?.value;
      const uf = this.formularioEpi.get('uf')?.value; 
      const bairro = this.formularioEpi.get('bairro')?.value;
        this.consultarExamesPorLocalidade(nomeExame, localidade, uf, bairro);

    } else {
      this.markFormGroupTouched(this.formularioEpi);
    }
  }

  carregarUfsEndereco(): void {
    this.EnderecoService.consultarUfEndereco().subscribe(
      (data: GetUfModel[]) => {
        this.enderecouff = data;
        if (this.enderecouff.length > 0) {
          const selectedUf = this.enderecouff[0].uf; 
          this.formularioEpi.patchValue({
            uf: selectedUf 
          });
          console.log('UF inicial carregada:', selectedUf);
        }
      },
      (error: any) => {
        console.error('Erro ao carregar UFs:', error);
      }
    );
  }
  
  
  
  



  carregarLocalidadeEndereco(): void {
    this.EnderecoService.consultarLocalidadeEndereco().subscribe(
      (enderecoslocalidade1) => {
        this.enderecoslocalidade = enderecoslocalidade1;
        console.log('Localidades carregadas:', this.enderecoslocalidade); // Verifique os dados aqui
      },
      (error) => {
        console.error('Erro ao carregar localidades:', error);
      }
    );
  }
  

  carregarBairroEndereco(): void {
    this.EnderecoService.consultarBairroEndereco().subscribe(
      (enderecos) => {
        this.enderecosbairro = enderecos;
      },
      (error) => {
        console.error('Erro ao carregar endereços:', error);
      }
    );
  }
  consultarExamesPorLocalidade(nomeExame: string, localidade: string, uf: string, bairro: string): void {
    if (nomeExame && localidade && uf && bairro) {
      this.ExamesService.consultarExamesPorLocalidade(nomeExame, localidade, uf, bairro).subscribe(
        (data: any) => {
          this.exames2 = Array.isArray(data) ? data : [data];
          console.log('Dados recebidos:', this.exames2); // Verifica a estrutura dos dados
        },
        (error: any) => {
          console.error('Error fetching credenciado details:', error);
        }
      );
    } else {
      console.warn('Missing parameters for fetching credenciados');
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

  getTotalExams(): number {
    return this.exames2?.reduce((total, exame) => total + (exame.examescredenciados?.length || 0), 0) || 0;
}

  pageChange(event: any) {
    console.log('Página mudou para:', event);
  }
}

