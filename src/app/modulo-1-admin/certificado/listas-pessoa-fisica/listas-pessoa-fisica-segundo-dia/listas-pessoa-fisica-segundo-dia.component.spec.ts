import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasPessoaFisicaSegundoDiaComponent } from './listas-pessoa-fisica-segundo-dia.component';

describe('ListasPessoaFisicaSegundoDiaComponent', () => {
  let component: ListasPessoaFisicaSegundoDiaComponent;
  let fixture: ComponentFixture<ListasPessoaFisicaSegundoDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasPessoaFisicaSegundoDiaComponent]
    });
    fixture = TestBed.createComponent(ListasPessoaFisicaSegundoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
