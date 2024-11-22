import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFuncionarioPorCpfComponent } from './consultar-funcionario-por-cpf.component';

describe('ConsultarFuncionarioPorCpfComponent', () => {
  let component: ConsultarFuncionarioPorCpfComponent;
  let fixture: ComponentFixture<ConsultarFuncionarioPorCpfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarFuncionarioPorCpfComponent]
    });
    fixture = TestBed.createComponent(ConsultarFuncionarioPorCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
