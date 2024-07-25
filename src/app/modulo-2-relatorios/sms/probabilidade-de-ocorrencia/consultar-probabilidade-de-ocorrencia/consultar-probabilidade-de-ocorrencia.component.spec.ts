import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProbabilidadeDeOcorrenciaComponent } from './consultar-probabilidade-de-ocorrencia.component';

describe('ConsultarProbabilidadeDeOcorrenciaComponent', () => {
  let component: ConsultarProbabilidadeDeOcorrenciaComponent;
  let fixture: ComponentFixture<ConsultarProbabilidadeDeOcorrenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarProbabilidadeDeOcorrenciaComponent]
    });
    fixture = TestBed.createComponent(ConsultarProbabilidadeDeOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
