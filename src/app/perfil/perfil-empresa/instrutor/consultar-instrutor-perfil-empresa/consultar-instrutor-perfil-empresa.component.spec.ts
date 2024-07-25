import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarInstrutorPerfilEmpresaComponent } from './consultar-instrutor-perfil-empresa.component';

describe('ConsultarInstrutorPerfilEmpresaComponent', () => {
  let component: ConsultarInstrutorPerfilEmpresaComponent;
  let fixture: ComponentFixture<ConsultarInstrutorPerfilEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarInstrutorPerfilEmpresaComponent]
    });
    fixture = TestBed.createComponent(ConsultarInstrutorPerfilEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
