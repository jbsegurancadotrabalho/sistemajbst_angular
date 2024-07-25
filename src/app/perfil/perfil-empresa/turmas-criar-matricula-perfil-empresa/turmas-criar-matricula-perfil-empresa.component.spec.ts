import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmasCriarMatriculaPerfilEmpresaComponent } from './turmas-criar-matricula-perfil-empresa.component';

describe('TurmasCriarMatriculaPerfilEmpresaComponent', () => {
  let component: TurmasCriarMatriculaPerfilEmpresaComponent;
  let fixture: ComponentFixture<TurmasCriarMatriculaPerfilEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurmasCriarMatriculaPerfilEmpresaComponent]
    });
    fixture = TestBed.createComponent(TurmasCriarMatriculaPerfilEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
