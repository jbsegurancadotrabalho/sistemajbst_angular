import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePresencaQuintoDiaComponent } from './lista-de-presenca-quinto-dia.component';

describe('ListaDePresencaQuintoDiaComponent', () => {
  let component: ListaDePresencaQuintoDiaComponent;
  let fixture: ComponentFixture<ListaDePresencaQuintoDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDePresencaQuintoDiaComponent]
    });
    fixture = TestBed.createComponent(ListaDePresencaQuintoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
