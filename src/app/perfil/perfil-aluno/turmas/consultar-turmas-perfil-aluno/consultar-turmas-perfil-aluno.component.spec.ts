import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTurmasPerfilAlunoComponent } from './consultar-turmas-perfil-aluno.component';

describe('ConsultarTurmasPerfilAlunoComponent', () => {
  let component: ConsultarTurmasPerfilAlunoComponent;
  let fixture: ComponentFixture<ConsultarTurmasPerfilAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarTurmasPerfilAlunoComponent]
    });
    fixture = TestBed.createComponent(ConsultarTurmasPerfilAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
