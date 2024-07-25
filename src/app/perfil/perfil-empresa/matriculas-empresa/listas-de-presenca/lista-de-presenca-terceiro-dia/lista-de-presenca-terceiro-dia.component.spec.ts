import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePresencaTerceiroDiaComponent } from './lista-de-presenca-terceiro-dia.component';

describe('ListaDePresencaTerceiroDiaComponent', () => {
  let component: ListaDePresencaTerceiroDiaComponent;
  let fixture: ComponentFixture<ListaDePresencaTerceiroDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDePresencaTerceiroDiaComponent]
    });
    fixture = TestBed.createComponent(ListaDePresencaTerceiroDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
