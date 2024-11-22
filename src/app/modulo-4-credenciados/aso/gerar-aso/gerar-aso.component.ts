import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { AsoService } from 'src/app/services/aso.service';
import { GetAnamneseModel } from 'src/app/models/anamnese/GetAnamneseModel';
import { PostAnamneseModel } from 'src/app/models/anamnese/PostAnamneseModel';
import { PutAnamneseModel } from 'src/app/models/anamnese/PutAnamneseModel';

@Component({
  selector: 'app-gerar-aso',
  templateUrl: './gerar-aso.component.html',
  styleUrls: ['./gerar-aso.component.css']
})
export class GerarAsoComponent  implements OnInit {

  id: string | null = null;
  aso: any = {}; // Usaremos um objeto único, pois parece que recebemos um objeto único da API

  constructor(
    private route: ActivatedRoute,
    private AsoService: AsoService,
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
      this.AsoService.consultarAsoPorId(id).subscribe(
        (data: any) => {
          console.log('Response data:', data); // Log the full response
          this.aso = Array.isArray(data) ? data : [data]; // Adjust this line according to your API response structure
          console.log('Associacoes fetched:', this.aso);
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

