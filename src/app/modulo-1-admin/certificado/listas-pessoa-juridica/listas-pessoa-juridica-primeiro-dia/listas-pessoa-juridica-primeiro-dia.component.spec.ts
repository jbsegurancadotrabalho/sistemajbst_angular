import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasPessoaJuridicaPrimeiroDiaComponent } from './listas-pessoa-juridica-primeiro-dia.component';

describe('ListasPessoaJuridicaPrimeiroDiaComponent', () => {
  let component: ListasPessoaJuridicaPrimeiroDiaComponent;
  let fixture: ComponentFixture<ListasPessoaJuridicaPrimeiroDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasPessoaJuridicaPrimeiroDiaComponent]
    });
    fixture = TestBed.createComponent(ListasPessoaJuridicaPrimeiroDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
