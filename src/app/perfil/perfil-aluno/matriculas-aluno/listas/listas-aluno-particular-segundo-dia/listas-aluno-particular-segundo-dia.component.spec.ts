import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasAlunoParticularSegundoDiaComponent } from './listas-aluno-particular-segundo-dia.component';

describe('ListasAlunoParticularSegundoDiaComponent', () => {
  let component: ListasAlunoParticularSegundoDiaComponent;
  let fixture: ComponentFixture<ListasAlunoParticularSegundoDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasAlunoParticularSegundoDiaComponent]
    });
    fixture = TestBed.createComponent(ListasAlunoParticularSegundoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
