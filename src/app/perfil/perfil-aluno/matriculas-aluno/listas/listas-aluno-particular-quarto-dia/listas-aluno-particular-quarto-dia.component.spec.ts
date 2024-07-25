import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasAlunoParticularQuartoDiaComponent } from './listas-aluno-particular-quarto-dia.component';

describe('ListasAlunoParticularQuartoDiaComponent', () => {
  let component: ListasAlunoParticularQuartoDiaComponent;
  let fixture: ComponentFixture<ListasAlunoParticularQuartoDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasAlunoParticularQuartoDiaComponent]
    });
    fixture = TestBed.createComponent(ListasAlunoParticularQuartoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
