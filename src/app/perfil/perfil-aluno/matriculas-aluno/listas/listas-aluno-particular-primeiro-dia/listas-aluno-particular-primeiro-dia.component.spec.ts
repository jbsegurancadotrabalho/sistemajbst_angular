import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasAlunoParticularPrimeiroDiaComponent } from './listas-aluno-particular-primeiro-dia.component';

describe('ListasAlunoParticularPrimeiroDiaComponent', () => {
  let component: ListasAlunoParticularPrimeiroDiaComponent;
  let fixture: ComponentFixture<ListasAlunoParticularPrimeiroDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasAlunoParticularPrimeiroDiaComponent]
    });
    fixture = TestBed.createComponent(ListasAlunoParticularPrimeiroDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
