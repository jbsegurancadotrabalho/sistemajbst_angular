import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ConsultarUnidades } from 'src/app/models/models_diversos/consultar-unidades.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditarContatos } from 'src/app/models/models_diversos/editar-contatos.model';

@Component({
  selector: 'app-consultar-unidade',
  templateUrl: './consultar-unidade.component.html',
  styleUrls: ['./consultar-unidade.component.css']
})
export class ConsultarUnidadeComponent implements OnInit {
  
  mensagem: string = '';
  unidade: ConsultarUnidades | null = null;
  unidades: any [] = []
  unidadeSelecionada: any = null;
  contato: EditarContatos | null = null;
  pagina: number = 1; 
  filtro: any = { curso: '' }; 
  itensPorPagina = 5;
  paginaAtual: number = 1; 

  
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/unidadedetreinamento')
    .subscribe({ 
      next: (data) => { 
        this.unidades = data as any[];
      },
      error: (e) => { //recebe o retorno de erro da API
        console.log(e);
      }
    });

  }

  exibirContatos(unidade: any) {
    this.unidadeSelecionada = unidade;
                 }
	 
  setContato(contato: EditarContatos): void {
  this.contato = contato;
  this.formEditarContato.patchValue(contato);
                }

    setUnidade(unidade: ConsultarUnidades): void {
    this.unidade = unidade;
    this.formCadastrarContato.patchValue(unidade);  
    this.formEditarContato.patchValue(unidade);    
  
                }
        formCadastrarContato = new FormGroup({
        idUnidadedetreinamento: new FormControl('', [Validators.required]),
        contato: new FormControl('', [Validators.required]),
        telefone_1: new FormControl('', [Validators.required]),
        telefone_2: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
          });

          formEditarContato = new FormGroup({
            idUnidadedetreinamento: new FormControl('', [Validators.required]),
            idContato: new FormControl('', [Validators.required]),
            contato: new FormControl('', [Validators.required]),
            telefone_1: new FormControl('', [Validators.required]),
            telefone_2: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
              });

          get form(): any {
            return this. formCadastrarContato.controls;
            return this. formEditarContato.controls;

          }
         
          CadastroSubmit(): void {
            this.httpClient.post('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/contato', this.formCadastrarContato.value)
            .subscribe({
              next: (data: any) => {
                this.mensagem = `Contato Atualizada com sucesso!`;
                  this.formCadastrarContato.reset();       
                                 },
              error: (e) => {
              }
            });      
      
          }

          EditarContatoSubmit(): void {
            this.httpClient.put('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/contato', this.formEditarContato.value)
            .subscribe({
              next: (data: any) => {
                this.mensagem = `Contato Atualizada com sucesso!`;
                  this.formCadastrarContato.reset();       
                                 },
              error: (e) => {
              }
            });      
      
          }
                 
  onDelete(idUnidadedetreinamento: number, unidade: string): void {
    if(window.confirm('Deseja realmente excluir a Unidade de Treinamento selecionado?\n' + unidade)) {
      //enviando uma reqquisição para o serviço de exclusão da API
      this.httpClient.delete('http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.com/api/unidadedetreinamento/' + idUnidadedetreinamento)
        .subscribe({
          next: (data: any) => {
            this.ngOnInit();
          },
          error: (e) => {
          }
        })
    }
  }
                 



}
