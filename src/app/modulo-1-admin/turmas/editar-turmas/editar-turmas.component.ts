import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import 'select2'; // Adicione esta importação
import { NgSelectConfig } from '@ng-select/ng-select';



@Component({
  selector: 'app-editar-turmas',
  templateUrl: './editar-turmas.component.html',
  styleUrls: ['./editar-turmas.component.css']
})


export class EditarTurmasComponent implements OnInit {
  @ViewChild('planoSelect') planoSelect!: ElementRef;


  mensagem: string = '';
  formEdicaoTurmas: FormGroup;
  cursos: any [] = []
  unidades: any [] = []

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private config: NgSelectConfig

  ) {
    this.formEdicaoTurmas = this.formBuilder.group({
      idTurmas: ['', Validators.required],
      idcurso: ['', Validators.required],
      idUnidadedetreinamento: ['', Validators.required],
      datainicio: ['', Validators.required],
      datafim: ['', Validators.required],
      validadedocurso: ['', Validators.required],
      cargahoraria: ['', Validators.required],
      modalidade: ['', Validators.required],
      status: ['', Validators.required],
      instrutor: ['', Validators.required],
      descricao: ['', Validators.required],
      diasespecificos: ['', Validators.required],
      tipo: ['', Validators.required],
      nivel: ['', Validators.required],
      validade: ['', Validators.required],
      dia: ['', Validators.required],
      mes: ['', Validators.required],
      ano: ['', Validators.required],
      primeirodia: ['', Validators.required],
      segundodia: ['', Validators.required],
      terceirodia: ['', Validators.required],
      quartodia: ['', Validators.required],
      quintodia: ['', Validators.required],
      observacoes: ['', Validators.required],

    });

    this.config.notFoundText = 'Não encontrado';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }
  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/turmas/' + id)
      .subscribe({
        next: (data: any) => {
          this.formEdicaoTurmas.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })

      this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/unidadedetreinamento')
      .subscribe({ 
        next: (data) => { 
          this.unidades = data as any[];
        },
        error: (e) => { //recebe o retorno de erro da API
          console.log(e);
        }
      });

      this.httpClient.get('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/cursos'
      )
      .subscribe({ 
        next: (data) => { 
          this.cursos = data as any[];
  
        },
        error: (e) => { //recebe o retorno de erro da API
          console.log(e);
        }
      });
  
  }

  ngAfterViewInit(): void {
    if (this.planoSelect) {
      const selectElement = $(this.planoSelect.nativeElement) as any;
  
      selectElement.select2({
        theme: 'bootstrap-5',
      }).on('change', () => {
        const selectedValue = String(selectElement.val());
        this.formEdicaoTurmas.get('idcurso')?.setValue(selectedValue);
        this.formEdicaoTurmas.get('idcurso')?.updateValueAndValidity();
      });
  
      const lastOptionValue = this.cursos.length > 0 ? this.cursos[this.cursos.length - 1].idcurso : '';
  
      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      selectElement.val(lastOptionValue).trigger('change');
    }
  }
  
  
  get formControls(): any {
    return this.formEdicaoTurmas.controls;
  }

  onSubmit(): void {
    if (this.formEdicaoTurmas.valid) {
      // Formate as datas para o formato ISO 8601
      const dataInicio = this.formatDate(this.formEdicaoTurmas.value.datainicio);
      const dataFim = this.formatDate(this.formEdicaoTurmas.value.datafim);
      const validadedoCurso = this.formatDate(this.formEdicaoTurmas.value.validadedocurso);

      // Atualize as datas no objeto do formulário
      this.formEdicaoTurmas.patchValue({
        datainicio: dataInicio,
        datafim: dataFim,
        validadedocurso: validadedoCurso

      });
  
      // Enviar o formulário para o endpoint
      this.httpClient
        .put('https://seguranca-do-trabalho-jb-env.eba-izb9phrg.us-east-1.elasticbeanstalk.com/api/turmas', this.formEdicaoTurmas.value)
        .subscribe({
          next: (data: any) => {
            this.mensagem = `Turma Atualizada com sucesso!`;
            // Limpar o formulário ou realizar ações adicionais, se necessário
            this.formEdicaoTurmas.reset();
          },
          error: (e) => {
            console.log(e.error);
            // Realizar ações de tratamento de erro, se necessário
          }
        });
    } else {
      // Realize alguma ação ou exiba uma mensagem de erro se o formulário for inválido
    }
  }
  
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toISOString(); // Formatar para ISO 8601
    } else {
      console.error('Data inválida:', dateString);
      return ''; // Ou outra ação apropriada
    }
  }
  descricaoOptions = [
    { value: 'de Saúde e Segurança do Trabalho' },
	{ value: 'de Normas Regulamentadoras - NR´S' },
    { value: 'Disposições Gerais' },
    { value: 'Comissão Interna de Prevenção de Acidentes e de Assédio' },
    { value: 'EPI - Equipamento de Proteção Individual e EPC - Equipamento de Proteção Coletiva' },
    { value: 'Primeiros Socorros' },
    { value: 'Segurança em Instalações e Serviços Elétricos' },
    { value: 'Sistema Elétrico de Potência' },
    { value: 'Transporte, Movimentação, Armazenagem e Manuseio de Materiais' },
    { value: 'Segurança no Trabalho em Máquinas e Equipamentos' },
    { value: 'Caldeiras, Vasos de Pressão, Tubulações e Tanques Metálicos de Armazenamento' },
    { value: 'Atividades e Operações Insalubres' },
    { value: 'Atividades e Operações Perigosas' },
    { value: 'Ergonomia' },
    { value: 'Segurança e Saúde no Trabalho na Indústria da Construção' },
    { value: 'Atmosferas Explosivas' },
    { value: 'Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis' },
    { value: 'Proteção contra Incêndios' },
    { value: 'Sinalização de Segurança' },
    { value: 'Segurança e Saúde no Trabalho Aquaviário' },
    { value: 'Segurança e Saúde no Trabalho na Agricultura, Pecuária, Silvicultura, Exploração Florestal e Aquicultura' },
    { value: 'Segurança e Saúde no Trabalho em Serviços de Saúde' },
    { value: 'Segurança e Saúde no Trabalho em Espaços Confinados' },
    { value: 'Condições e Meio Ambiente de Trabalho na Indústria da Construção, Reparação e Desmonte Naval' },
    { value: 'Segurança em Trabalhos em Altura' },
    { value: 'Segurança e Saúde no Trabalho em Empresas de Abate e Processamento de Carnes e Derivados' },
    { value: 'Segurança e Saúde em Plataformas de Petróleo' },
    { value: 'Atividades de Limpeza Urbana e Manejo de Resíduos Sólidos' },
    { value: 'Predial, Residencial e Industrial">Predial, Residencial e Industrial' }

  ];

  descricaoOptionsCargaHoraria = [
    { value: 'Selecione a Descrição da Turmas' },
    { value: 'Disposições Gerais' },
    { value: 'Comissão Interna de Prevenção de Acidentes' },
    { value: 'Carga Horária' },
    { value: '1 Hora' },
    { value: '2 Horas' },
    { value: '4 Horas' },
    { value: '6 Horas' },
    { value: '8 Horas' },
    { value: '10 Horas' },
    { value: '12 Horas' },
    { value: '16 Horas' },
    { value: '20 Horas' },
    { value: '24 Horas' },
    { value: '32 Horas' },
    { value: '40 Horas' }
  ];
  
  // No seu componente TypeScript
diasOptions = [
  { value: 'Dia' },
  { value: '01' },
  { value: '02' },
  { value: '03' },
  { value: '04' },
  { value: '05' },
  { value: '06' },
  { value: '07' },
  { value: '08' },
  { value: '09' },
  { value: '10' },
  { value: '11' },
  { value: '12' },
  { value: '13' },
  { value: '14' },
  { value: '15' },
  { value: '16' },
  { value: '17' },
  { value: '18' },
  { value: '19' },
  { value: '20' },
  { value: '21' },
  { value: '22' },
  { value: '23' },
  { value: '24' },
  { value: '25' },
  { value: '26' },
  { value: '27' },
  { value: '28' },
  { value: '29' },
  { value: '30' },
  { value: '31' }
];

mesOptions = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];
anoOptions = Array.from({ length: 100 }, (_, index) => String(2022 + index));


customMatchFn(term: string, item: any) {
  // Implemente a lógica de correspondência personalizada aqui
  return item.cnpj.toLowerCase().includes(term.toLowerCase());
}	

customMatchFn1(term: string, item: any) {
  // Implemente a lógica de correspondência personalizada aqui
  return item.curso.toLowerCase().includes(term.toLowerCase());
}	



}  