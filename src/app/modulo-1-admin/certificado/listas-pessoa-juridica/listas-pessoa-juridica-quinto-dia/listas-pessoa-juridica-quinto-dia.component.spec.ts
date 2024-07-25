import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasPessoaJuridicaQuintoDiaComponent } from './listas-pessoa-juridica-quinto-dia.component';

describe('ListasPessoaJuridicaQuintoDiaComponent', () => {
  let component: ListasPessoaJuridicaQuintoDiaComponent;
  let fixture: ComponentFixture<ListasPessoaJuridicaQuintoDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasPessoaJuridicaQuintoDiaComponent]
    });
    fixture = TestBed.createComponent(ListasPessoaJuridicaQuintoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
