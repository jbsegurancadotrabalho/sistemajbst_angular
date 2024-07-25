import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-consultar-turmas-por-unidades',
  templateUrl: './consultar-turmas-por-unidades.component.html',
  styleUrls: ['./consultar-turmas-por-unidades.component.css']
})
export class ConsultarTurmasPorUnidadesComponent implements OnInit {

  mensagem: string = '';
  formConsultarTurmas: FormGroup;
  turmas: any[] = [];
  unidades: any[] = [];

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private config: NgSelectConfig

  ) {
    this.formConsultarTurmas = this.formBuilder.group({
        inicio: ['', Validators.required],
        fim: ['', Validators.required],
        unidadeId: ['', Validators.required]
    });

    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/unidadedetreinamento')
      .subscribe({
        next: (data) => {
          this.unidades = data as any[];
        },
        error: (e) => {
          console.log(e);
        }
      });
  }

  consultarTurmas(): void {
    if (this.formConsultarTurmas.valid) {
      const formData = this.formConsultarTurmas.value;
      
      // Convertendo as datas para o formato desejado (YYYY-MM-DDTHH:MM:SSZ)
      const inicio = new Date(formData.inicio).toISOString();
      const fim = new Date(formData.fim).toISOString();
  
      // Criando os parâmetros da solicitação HTTP
      const params = new HttpParams()
        .set('diaInicio', new Date(formData.inicio).getDate().toString())
        .set('mesInicio', (new Date(formData.inicio).getMonth() + 1).toString()) // Lembrando que os meses começam de zero
        .set('anoInicio', new Date(formData.inicio).getFullYear().toString())
        .set('diaFim', new Date(formData.fim).getDate().toString())
        .set('mesFim', (new Date(formData.fim).getMonth() + 1).toString()) // Lembrando que os meses começam de zero
        .set('anoFim', new Date(formData.fim).getFullYear().toString())
        .set('unidadeId', formData.unidadeId);
  
      // URL da API
      const url = 'http://turmas-jb-env.eba-gupb3gze.us-east-1.elasticbeanstalk.com/api/turmas/consultar-turmas-data-inico-e-fim';

      // Fazendo a requisição HTTP
      this.httpClient.get(url, { params })
        .subscribe({
          next: (data) => {
            this.turmas = data as any[]; // Atribuindo os dados das turmas
          },
          error: (error) => {
            console.error(error); // Trate o erro adequadamente
          }
        });
    } else {
      console.error('Formulário inválido');
    }
  }  

  printPage() {
    const printContentsElement = document.getElementById('card-to-print');
    
    if (printContentsElement) {
      const printContents = printContentsElement.innerHTML;
      const originalContents = document.body.innerHTML;
      
      document.body.innerHTML = printContents;
  
      window.print();
  
      document.body.innerHTML = originalContents;
    } else {
      console.error('Elemento para impressão não encontrado');
    }
  }
  
  calcularTotalLinhasPorTurma(turma: any): number {
    return turma.matricula.length > 0 ? turma.matricula.length : 1;
  }
  

  
}
