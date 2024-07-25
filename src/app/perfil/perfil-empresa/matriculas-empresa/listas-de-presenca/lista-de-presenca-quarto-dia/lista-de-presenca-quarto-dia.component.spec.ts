import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePresencaQuartoDiaComponent } from './lista-de-presenca-quarto-dia.component';

describe('ListaDePresencaQuartoDiaComponent', () => {
  let component: ListaDePresencaQuartoDiaComponent;
  let fixture: ComponentFixture<ListaDePresencaQuartoDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDePresencaQuartoDiaComponent]
    });
    fixture = TestBed.createComponent(ListaDePresencaQuartoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
