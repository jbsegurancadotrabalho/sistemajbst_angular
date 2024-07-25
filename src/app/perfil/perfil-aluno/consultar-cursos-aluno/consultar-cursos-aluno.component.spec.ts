import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCursosAlunoComponent } from './consultar-cursos-aluno.component';

describe('ConsultarCursosAlunoComponent', () => {
  let component: ConsultarCursosAlunoComponent;
  let fixture: ComponentFixture<ConsultarCursosAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarCursosAlunoComponent]
    });
    fixture = TestBed.createComponent(ConsultarCursosAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
