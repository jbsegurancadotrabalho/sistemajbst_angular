import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasPessoaFisicaPrimeiroDiaComponent } from './listas-pessoa-fisica-primeiro-dia.component';

describe('ListasPessoaFisicaPrimeiroDiaComponent', () => {
  let component: ListasPessoaFisicaPrimeiroDiaComponent;
  let fixture: ComponentFixture<ListasPessoaFisicaPrimeiroDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasPessoaFisicaPrimeiroDiaComponent]
    });
    fixture = TestBed.createComponent(ListasPessoaFisicaPrimeiroDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
