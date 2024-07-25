import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFuncionarioPerfilEmpresaComponent } from './consultar-funcionario-perfil-empresa.component';

describe('ConsultarFuncionarioPerfilEmpresaComponent', () => {
  let component: ConsultarFuncionarioPerfilEmpresaComponent;
  let fixture: ComponentFixture<ConsultarFuncionarioPerfilEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarFuncionarioPerfilEmpresaComponent]
    });
    fixture = TestBed.createComponent(ConsultarFuncionarioPerfilEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
