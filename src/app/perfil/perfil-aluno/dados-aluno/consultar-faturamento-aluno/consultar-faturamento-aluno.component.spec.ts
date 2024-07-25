import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFaturamentoAlunoComponent } from './consultar-faturamento-aluno.component';

describe('ConsultarFaturamentoAlunoComponent', () => {
  let component: ConsultarFaturamentoAlunoComponent;
  let fixture: ComponentFixture<ConsultarFaturamentoAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarFaturamentoAlunoComponent]
    });
    fixture = TestBed.createComponent(ConsultarFaturamentoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
