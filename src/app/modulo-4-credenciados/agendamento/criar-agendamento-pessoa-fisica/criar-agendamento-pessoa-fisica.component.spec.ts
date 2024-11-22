import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAgendamentoPessoaFisicaComponent } from './criar-agendamento-pessoa-fisica.component';

describe('CriarAgendamentoPessoaFisicaComponent', () => {
  let component: CriarAgendamentoPessoaFisicaComponent;
  let fixture: ComponentFixture<CriarAgendamentoPessoaFisicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarAgendamentoPessoaFisicaComponent]
    });
    fixture = TestBed.createComponent(CriarAgendamentoPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
