import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFaturamentoPerfilEmpresaComponent } from './consultar-faturamento-perfil-empresa.component';

describe('ConsultarFaturamentoPerfilEmpresaComponent', () => {
  let component: ConsultarFaturamentoPerfilEmpresaComponent;
  let fixture: ComponentFixture<ConsultarFaturamentoPerfilEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarFaturamentoPerfilEmpresaComponent]
    });
    fixture = TestBed.createComponent(ConsultarFaturamentoPerfilEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
