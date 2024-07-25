import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css']
})
export class EditarEnderecoComponent implements OnInit, AfterViewInit {
 
  @ViewChild('planoSelect') planoSelect!: ElementRef;

  formEditarEndereco: FormGroup;
  mensagem: string = '';
  unidades: any [] = []
 
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.formEditarEndereco = this.formBuilder.group({
      idUnidadedetreinamento: [this.unidades[0]?.idUnidadedetreinamento || '', Validators.required],
      idEndereco: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      logradouro: new FormControl('', [Validators.required]),
      complemento: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      localidade: new FormControl('', [Validators.required]),
      uf: new FormControl('', [Validators.required]),    });
  }

  ngOnInit(): void {
    //capturando o id enviado na URL
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/endereco/' + id)
      .subscribe({
        next: (data: any) => {
          this.formEditarEndereco.patchValue(data);
          
        },
        error: (e) => {
          console.log(e);
        }
      })

      this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/unidadedetreinamento')
      .subscribe({ //capturando o retorno da API
        next: (data) => { //recebe o retorno de sucesso da API
          //armazenar os dados na variável
          this.unidades = data as any[];
        },
        error: (e) => { //recebe o retorno de erro da API
          console.log(e);
        }
      });
  }
  
  ngAfterViewInit(): void {
    const selectElement = $(this.planoSelect.nativeElement);
  
    selectElement
      .select2({
        theme: 'bootstrap-5',
      })
      .on('change', () => {
        const selectedValue = selectElement.val();
        // Correção aqui: Acesse a propriedade usando notação de colchetes []
        this.formEditarEndereco.controls['idUnidadedetreinamento'].setValue(selectedValue);
        this.formEditarEndereco.controls['idUnidadedetreinamento'].updateValueAndValidity();
      });
  
  }
  

      get form(): any {
        return this.formEditarEndereco.controls;
      }


      onSubmit(): void {
        const formValue = this.formEditarEndereco.value as {
          idUnidadedetreinamento: string;
          idEndereco: string;
          cep: string;
          logradouro: string;
          complemento: string;
          numero: string;
          bairro: string;
          localidade: string;
          uf: string;
        };
      
        this.httpClient
          .put('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/endereco', formValue)
          .subscribe({
            next: (data: any) => {
              this.mensagem = `Endereço Atualizado com sucesso!`;
            },
            error: (error: any) => {
              console.error(error.error);
            }
          });
      }


}
