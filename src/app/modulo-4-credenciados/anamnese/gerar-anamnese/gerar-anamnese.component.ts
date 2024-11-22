import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { AnamneseService } from 'src/app/services/anamnese.service';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { PutAtendimentoModel } from 'src/app/models/atendimento/PutAtendimentoModel';
import { GetAnamneseModel } from 'src/app/models/anamnese/GetAnamneseModel';
import { PostAnamneseModel } from 'src/app/models/anamnese/PostAnamneseModel';
import { PutAnamneseModel } from 'src/app/models/anamnese/PutAnamneseModel';

@Component({
  selector: 'app-gerar-anamnese',
  templateUrl: './gerar-anamnese.component.html',
  styleUrls: ['./gerar-anamnese.component.css']
})
export class GerarAnamneseComponent  implements OnInit {

  id: string | null = null;
  anamnese: any = {}; // Usaremos um objeto único, pois parece que recebemos um objeto único da API

  constructor(
    private route: ActivatedRoute,
    private AnamneseService: AnamneseService,
    private activatedRoute: ActivatedRoute,

  ) {
   
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.consultarAnamnesePorId();
    }
  }

  consultarAnamnesePorId(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    if (id) {
      this.AnamneseService.consultarAnamnesePorId(id).subscribe(
        (data: any) => {
          console.log('Response data:', data); // Log the full response
          this.anamnese = Array.isArray(data) ? data : [data]; // Adjust this line according to your API response structure
          console.log('Associacoes fetched:', this.anamnese);
        },
        (error: any) => {
          console.error('Error fetching associacoes:', error);
        }
      );
    } else {
      console.error('ID not found in route parameters');
    }
  }

 
  printPage() {
    window.print();
  }

}
