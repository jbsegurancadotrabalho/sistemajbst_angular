import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasPessoaFisicaQuartoDiaComponent } from './listas-pessoa-fisica-quarto-dia.component';

describe('ListasPessoaFisicaQuartoDiaComponent', () => {
  let component: ListasPessoaFisicaQuartoDiaComponent;
  let fixture: ComponentFixture<ListasPessoaFisicaQuartoDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasPessoaFisicaQuartoDiaComponent]
    });
    fixture = TestBed.createComponent(ListasPessoaFisicaQuartoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
