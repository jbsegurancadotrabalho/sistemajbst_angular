import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePresencaSegundoDiaComponent } from './lista-de-presenca-segundo-dia.component';

describe('ListaDePresencaSegundoDiaComponent', () => {
  let component: ListaDePresencaSegundoDiaComponent;
  let fixture: ComponentFixture<ListaDePresencaSegundoDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDePresencaSegundoDiaComponent]
    });
    fixture = TestBed.createComponent(ListaDePresencaSegundoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
