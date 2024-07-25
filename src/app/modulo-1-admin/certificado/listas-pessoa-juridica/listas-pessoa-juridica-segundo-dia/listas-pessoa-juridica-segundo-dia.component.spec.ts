import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasPessoaJuridicaSegundoDiaComponent } from './listas-pessoa-juridica-segundo-dia.component';

describe('ListasPessoaJuridicaSegundoDiaComponent', () => {
  let component: ListasPessoaJuridicaSegundoDiaComponent;
  let fixture: ComponentFixture<ListasPessoaJuridicaSegundoDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasPessoaJuridicaSegundoDiaComponent]
    });
    fixture = TestBed.createComponent(ListasPessoaJuridicaSegundoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
