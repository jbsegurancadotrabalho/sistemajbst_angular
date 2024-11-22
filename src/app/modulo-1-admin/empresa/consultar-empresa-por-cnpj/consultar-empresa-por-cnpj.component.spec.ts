import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEmpresaPorCnpjComponent } from './consultar-empresa-por-cnpj.component';

describe('ConsultarEmpresaPorCnpjComponent', () => {
  let component: ConsultarEmpresaPorCnpjComponent;
  let fixture: ComponentFixture<ConsultarEmpresaPorCnpjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEmpresaPorCnpjComponent]
    });
    fixture = TestBed.createComponent(ConsultarEmpresaPorCnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
