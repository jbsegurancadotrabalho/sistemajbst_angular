import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasAlunoParticularQuintoDiaComponent } from './listas-aluno-particular-quinto-dia.component';

describe('ListasAlunoParticularQuintoDiaComponent', () => {
  let component: ListasAlunoParticularQuintoDiaComponent;
  let fixture: ComponentFixture<ListasAlunoParticularQuintoDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasAlunoParticularQuintoDiaComponent]
    });
    fixture = TestBed.createComponent(ListasAlunoParticularQuintoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
