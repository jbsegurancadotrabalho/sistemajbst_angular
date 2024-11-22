import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparadorDePrecosExamesComponent } from './comparador-de-precos-exames.component';

describe('ComparadorDePrecosExamesComponent', () => {
  let component: ComparadorDePrecosExamesComponent;
  let fixture: ComponentFixture<ComparadorDePrecosExamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparadorDePrecosExamesComponent]
    });
    fixture = TestBed.createComponent(ComparadorDePrecosExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
