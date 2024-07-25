import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasPessoaJuridicaTerceiroDiaComponent } from './listas-pessoa-juridica-terceiro-dia.component';

describe('ListasPessoaJuridicaTerceiroDiaComponent', () => {
  let component: ListasPessoaJuridicaTerceiroDiaComponent;
  let fixture: ComponentFixture<ListasPessoaJuridicaTerceiroDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasPessoaJuridicaTerceiroDiaComponent]
    });
    fixture = TestBed.createComponent(ListasPessoaJuridicaTerceiroDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
