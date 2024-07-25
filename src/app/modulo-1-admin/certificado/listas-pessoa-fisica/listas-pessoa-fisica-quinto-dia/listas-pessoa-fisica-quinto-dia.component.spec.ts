import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasPessoaFisicaQuintoDiaComponent } from './listas-pessoa-fisica-quinto-dia.component';

describe('ListasPessoaFisicaQuintoDiaComponent', () => {
  let component: ListasPessoaFisicaQuintoDiaComponent;
  let fixture: ComponentFixture<ListasPessoaFisicaQuintoDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasPessoaFisicaQuintoDiaComponent]
    });
    fixture = TestBed.createComponent(ListasPessoaFisicaQuintoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
