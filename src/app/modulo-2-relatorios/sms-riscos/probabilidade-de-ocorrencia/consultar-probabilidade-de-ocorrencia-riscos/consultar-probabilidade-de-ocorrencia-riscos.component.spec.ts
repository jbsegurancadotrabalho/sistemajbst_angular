import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProbabilidadeDeOcorrenciaRiscosComponent } from './consultar-probabilidade-de-ocorrencia-riscos.component';

describe('ConsultarProbabilidadeDeOcorrenciaRiscosComponent', () => {
  let component: ConsultarProbabilidadeDeOcorrenciaRiscosComponent;
  let fixture: ComponentFixture<ConsultarProbabilidadeDeOcorrenciaRiscosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarProbabilidadeDeOcorrenciaRiscosComponent]
    });
    fixture = TestBed.createComponent(ConsultarProbabilidadeDeOcorrenciaRiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
