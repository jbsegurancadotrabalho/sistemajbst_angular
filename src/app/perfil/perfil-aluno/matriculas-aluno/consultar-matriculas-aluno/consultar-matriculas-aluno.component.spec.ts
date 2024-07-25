import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMatriculasAlunoComponent } from './consultar-matriculas-aluno.component';

describe('ConsultarMatriculasAlunoComponent', () => {
  let component: ConsultarMatriculasAlunoComponent;
  let fixture: ComponentFixture<ConsultarMatriculasAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarMatriculasAlunoComponent]
    });
    fixture = TestBed.createComponent(ConsultarMatriculasAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
