import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAgendamentosFuncionarioComponent } from './consultar-agendamentos-funcionario.component';

describe('ConsultarAgendamentosFuncionarioComponent', () => {
  let component: ConsultarAgendamentosFuncionarioComponent;
  let fixture: ComponentFixture<ConsultarAgendamentosFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarAgendamentosFuncionarioComponent]
    });
    fixture = TestBed.createComponent(ConsultarAgendamentosFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
