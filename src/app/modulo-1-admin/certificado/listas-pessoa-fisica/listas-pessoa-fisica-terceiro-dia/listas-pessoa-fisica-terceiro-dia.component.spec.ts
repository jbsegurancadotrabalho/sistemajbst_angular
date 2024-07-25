import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasPessoaFisicaTerceiroDiaComponent } from './listas-pessoa-fisica-terceiro-dia.component';

describe('ListasPessoaFisicaTerceiroDiaComponent', () => {
  let component: ListasPessoaFisicaTerceiroDiaComponent;
  let fixture: ComponentFixture<ListasPessoaFisicaTerceiroDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasPessoaFisicaTerceiroDiaComponent]
    });
    fixture = TestBed.createComponent(ListasPessoaFisicaTerceiroDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
