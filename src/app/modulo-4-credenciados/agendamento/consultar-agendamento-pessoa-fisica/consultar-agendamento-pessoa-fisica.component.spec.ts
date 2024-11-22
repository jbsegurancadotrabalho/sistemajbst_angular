import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAgendamentoPessoaFisicaComponent } from './consultar-agendamento-pessoa-fisica.component';

describe('ConsultarAgendamentoPessoaFisicaComponent', () => {
  let component: ConsultarAgendamentoPessoaFisicaComponent;
  let fixture: ComponentFixture<ConsultarAgendamentoPessoaFisicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarAgendamentoPessoaFisicaComponent]
    });
    fixture = TestBed.createComponent(ConsultarAgendamentoPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
