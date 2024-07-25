import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMatriculasAlunoParticularComponent } from './editar-matriculas-aluno-particular.component';

describe('EditarMatriculasAlunoParticularComponent', () => {
  let component: EditarMatriculasAlunoParticularComponent;
  let fixture: ComponentFixture<EditarMatriculasAlunoParticularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarMatriculasAlunoParticularComponent]
    });
    fixture = TestBed.createComponent(EditarMatriculasAlunoParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
