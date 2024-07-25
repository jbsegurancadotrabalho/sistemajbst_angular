import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasAlunoParticularTerceiroDiaComponent } from './listas-aluno-particular-terceiro-dia.component';

describe('ListasAlunoParticularTerceiroDiaComponent', () => {
  let component: ListasAlunoParticularTerceiroDiaComponent;
  let fixture: ComponentFixture<ListasAlunoParticularTerceiroDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasAlunoParticularTerceiroDiaComponent]
    });
    fixture = TestBed.createComponent(ListasAlunoParticularTerceiroDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
