import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioFaturamentoAlunoComponent } from './relatorio-faturamento-aluno.component';

describe('RelatorioFaturamentoAlunoComponent', () => {
  let component: RelatorioFaturamentoAlunoComponent;
  let fixture: ComponentFixture<RelatorioFaturamentoAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatorioFaturamentoAlunoComponent]
    });
    fixture = TestBed.createComponent(RelatorioFaturamentoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
