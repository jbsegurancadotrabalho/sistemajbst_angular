import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.development';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-consultar-faturamento-perfil-empresa',
  templateUrl: './consultar-faturamento-perfil-empresa.component.html',
  styleUrls: ['./consultar-faturamento-perfil-empresa.component.css']
})
export class ConsultarFaturamentoPerfilEmpresaComponent implements OnInit {
  
  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  anoAtual: number = (new Date()).getFullYear();
  mesAtual: number = (new Date()).getMonth();
  faturamentopj: any[] = [];
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
    console.log('ID do usuário:', this.userId);
    console.log('Mês atual:', this.mesAtual + 1);
    console.log('Ano atual:', this.anoAtual);
  
    const endpoint = `http://empresa-jb-env.eba-vj7gm5ar.us-east-2.elasticbeanstalk.coms/api/faturamento/api/faturamentos/${this.userId}/${this.mesAtual + 1}/${this.anoAtual}`;
    const params = new HttpParams()
      .set('mes', (this.mesAtual + 1).toString())
      .set('ano', this.anoAtual.toString());
  
    this.httpClient.get<any[]>(endpoint, { params }).subscribe({
      next: (data) => {
        // Loga os dados recebidos no console
        console.log('Dados recebidos:', data);
  
        // Atualiza a variável com os dados recebidos
        this.faturamentopj = data;
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
