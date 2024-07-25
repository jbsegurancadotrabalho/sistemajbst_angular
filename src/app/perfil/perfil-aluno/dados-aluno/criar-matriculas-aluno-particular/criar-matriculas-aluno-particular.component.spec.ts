import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMatriculasAlunoParticularComponent } from './criar-matriculas-aluno-particular.component';

describe('CriarMatriculasAlunoParticularComponent', () => {
  let component: CriarMatriculasAlunoParticularComponent;
  let fixture: ComponentFixture<CriarMatriculasAlunoParticularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarMatriculasAlunoParticularComponent]
    });
    fixture = TestBed.createComponent(CriarMatriculasAlunoParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
