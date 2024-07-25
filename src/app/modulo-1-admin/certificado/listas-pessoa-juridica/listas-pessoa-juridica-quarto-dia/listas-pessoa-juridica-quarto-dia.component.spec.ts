import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasPessoaJuridicaQuartoDiaComponent } from './listas-pessoa-juridica-quarto-dia.component';

describe('ListasPessoaJuridicaQuartoDiaComponent', () => {
  let component: ListasPessoaJuridicaQuartoDiaComponent;
  let fixture: ComponentFixture<ListasPessoaJuridicaQuartoDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasPessoaJuridicaQuartoDiaComponent]
    });
    fixture = TestBed.createComponent(ListasPessoaJuridicaQuartoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
