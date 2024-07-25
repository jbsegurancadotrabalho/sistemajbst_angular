import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTurmasPerfilEmpresaComponent } from './consultar-turmas-perfil-empresa.component';

describe('ConsultarTurmasPerfilEmpresaComponent', () => {
  let component: ConsultarTurmasPerfilEmpresaComponent;
  let fixture: ComponentFixture<ConsultarTurmasPerfilEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarTurmasPerfilEmpresaComponent]
    });
    fixture = TestBed.createComponent(ConsultarTurmasPerfilEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
