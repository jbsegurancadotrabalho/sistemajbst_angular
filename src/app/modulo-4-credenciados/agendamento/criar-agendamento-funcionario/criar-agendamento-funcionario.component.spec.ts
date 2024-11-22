import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAgendamentoFuncionarioComponent } from './criar-agendamento-funcionario.component';

describe('CriarAgendamentoFuncionarioComponent', () => {
  let component: CriarAgendamentoFuncionarioComponent;
  let fixture: ComponentFixture<CriarAgendamentoFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarAgendamentoFuncionarioComponent]
    });
    fixture = TestBed.createComponent(CriarAgendamentoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
