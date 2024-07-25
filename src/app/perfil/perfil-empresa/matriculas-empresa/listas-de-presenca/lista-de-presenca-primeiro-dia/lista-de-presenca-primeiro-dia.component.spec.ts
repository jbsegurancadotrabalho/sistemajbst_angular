import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePresencaPrimeiroDiaComponent } from './lista-de-presenca-primeiro-dia.component';

describe('ListaDePresencaPrimeiroDiaComponent', () => {
  let component: ListaDePresencaPrimeiroDiaComponent;
  let fixture: ComponentFixture<ListaDePresencaPrimeiroDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDePresencaPrimeiroDiaComponent]
    });
    fixture = TestBed.createComponent(ListaDePresencaPrimeiroDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
