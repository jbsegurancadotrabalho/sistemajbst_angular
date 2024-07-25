import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.development';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-consultar-faturamento-aluno',
  templateUrl: './consultar-faturamento-aluno.component.html',
  styleUrls: ['./consultar-faturamento-aluno.component.css']
})
export class ConsultarFaturamentoAlunoComponent implements OnInit {
  
  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  anoAtual: number = (new Date()).getFullYear();
  mesAtual: number = (new Date()).getMonth();
  faturamentopf: any[] = [];
  userId: string | null = null;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getUserIdAndFetchFaturamento();
  }

  getUserIdAndFetchFaturamento(): void {
    const encryptedUserId = localStorage.getItem('encryptedUserId');
    if (encryptedUserId !== null) {
      this.userId = this.decryptData(encryptedUserId, environment.cryptoKey);
      if (this.userId !== null) {
        this.fetchFaturamento();
      } else {
        console.error('ID do usuário não encontrado na localStorage.');
      }
    } else {
      console.error('ID do usuário criptografado não encontrado na localStorage.');
    }
  }

  decryptData(data: string, key: string): string | null {
    try {
      const bytes = CryptoJS.AES.decrypt(data, key);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedData;
    } catch (error) {
      console.error('Erro ao descriptografar dados:', error);
      return null;
    }
  }
  fetchFaturamento(): void {
  
  
    const endpoint = `http://financeiro-jb-env.eba-nnqujqph.us-east-1.elasticbeanstalk.com/api/relatório-financeiro/api/relatorio-financeiro/faturamento/usuario-mes-ano?idUsuario=${this.userId}&mes=${this.mesAtual + 1}&ano=${this.anoAtual}`;
  
    this.httpClient.get<any[]>(endpoint).subscribe({
      next: (data) => {
        // Loga os dados recebidos no console
        console.log('Dados recebidos:', data);
  
        // Atualiza a variável com os dados recebidos
        this.faturamentopf = data;
      },
      error: (e) => {
        // Loga o erro no console
        console.error('Erro ao obter faturamento:', e);
      }
    });
  }
  

  selecionarMes(mes: number): void {
    this.mesAtual = mes;
    this.fetchFaturamento();
  }

  mudarMes(delta: number): void {
    this.mesAtual += delta;

    if (this.mesAtual > 11) {
      this.mesAtual = 0;
      this.anoAtual++;
    } else if (this.mesAtual < 0) {
      this.mesAtual = 11;
      this.anoAtual--;
    }

    this.fetchFaturamento();
  }

  get periodoAtual(): string {
    return `${this.meses[this.mesAtual]} de ${this.anoAtual}`;
  }

  getStatusFatura(item: any): string {
    console.log('faturaFechada:', item.faturaFechada);
    return item.faturaFechada ? 'Fatura Fechada' : 'Fatura Aberta';
  }
  

  getStatusCor(item: any): string {
    console.log(item.faturaFechada); // Verifique se a função está retornando os valores esperados
    return item.faturaFechada ? 'red' : 'green';
  }
  

  getTableRowClass(item: any): string {
    return item.faturaFechada ? 'table-white' : 'table-white';
}


}
