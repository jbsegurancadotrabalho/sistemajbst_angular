import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarProbabilidadeDeOcorrenciaRiscosComponent } from './criar-probabilidade-de-ocorrencia-riscos.component';

describe('CriarProbabilidadeDeOcorrenciaRiscosComponent', () => {
  let component: CriarProbabilidadeDeOcorrenciaRiscosComponent;
  let fixture: ComponentFixture<CriarProbabilidadeDeOcorrenciaRiscosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarProbabilidadeDeOcorrenciaRiscosComponent]
    });
    fixture = TestBed.createComponent(CriarProbabilidadeDeOcorrenciaRiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
