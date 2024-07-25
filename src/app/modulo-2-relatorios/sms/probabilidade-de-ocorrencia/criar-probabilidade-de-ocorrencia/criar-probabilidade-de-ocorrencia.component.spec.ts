import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarProbabilidadeDeOcorrenciaComponent } from './criar-probabilidade-de-ocorrencia.component';

describe('CriarProbabilidadeDeOcorrenciaComponent', () => {
  let component: CriarProbabilidadeDeOcorrenciaComponent;
  let fixture: ComponentFixture<CriarProbabilidadeDeOcorrenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarProbabilidadeDeOcorrenciaComponent]
    });
    fixture = TestBed.createComponent(CriarProbabilidadeDeOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
