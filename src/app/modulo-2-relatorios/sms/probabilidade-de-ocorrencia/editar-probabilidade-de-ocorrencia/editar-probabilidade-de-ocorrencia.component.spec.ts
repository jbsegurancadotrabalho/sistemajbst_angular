import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProbabilidadeDeOcorrenciaComponent } from './editar-probabilidade-de-ocorrencia.component';

describe('EditarProbabilidadeDeOcorrenciaComponent', () => {
  let component: EditarProbabilidadeDeOcorrenciaComponent;
  let fixture: ComponentFixture<EditarProbabilidadeDeOcorrenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarProbabilidadeDeOcorrenciaComponent]
    });
    fixture = TestBed.createComponent(EditarProbabilidadeDeOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
