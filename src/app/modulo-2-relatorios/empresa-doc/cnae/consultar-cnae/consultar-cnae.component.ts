import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresaDocService } from 'src/app/services/empresadoc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CnaeService } from 'src/app/services/cnae.service';


@Component({
  selector: 'app-consultar-cnae',
  templateUrl: './consultar-cnae.component.html',
  styleUrls: ['./consultar-cnae.component.css']
})
export class ConsultarCnaeComponent  implements OnInit {
  cnaeForm!: FormGroup;
  cadastroSucesso: string | null = null;
  cadastroErro: string | null = null;
  empresas: any[] = [];
  paginaAtual1: number = 1;
  itensPorPagina = 10;
  filtro: any = { nome_empresas: '' };
  
  constructor(
    private formBuilder: FormBuilder,
    private empresaDocService: EmpresaDocService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private cnaeService: CnaeService
  ) {}


  ngOnInit(): void {
    this.consultarEmpresa();
  }

  consultarEmpresa(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.empresaDocService.getEmpresaDocById(id).subscribe(
      (data: any) => {
        this.empresas = data.cnaes;
        console.log('Perigos fetched:', this.empresas);
      },
      (error: any) => {
        console.error('Error fetching Epi:', error);
      }
    );
  }

  excluirCnae(id: string, nome: string): void {
    if (confirm(`Tem certeza de que deseja excluir o Cnae"${nome}"?`)) {
      this.cnaeService.excluirCnae(id).subscribe(
        (response: any) => {
          console.log('Epi excluída com sucesso:', response);
        },
        (error: any) => {
          console.error('Erro ao excluir Epi:', error);
        }
      );
    }
  }

}

