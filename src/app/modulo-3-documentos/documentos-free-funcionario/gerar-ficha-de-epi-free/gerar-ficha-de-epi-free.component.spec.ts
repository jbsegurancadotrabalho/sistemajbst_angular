import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarFichaDeEpiFreeComponent } from './gerar-ficha-de-epi-free.component';

describe('GerarFichaDeEpiFreeComponent', () => {
  let component: GerarFichaDeEpiFreeComponent;
  let fixture: ComponentFixture<GerarFichaDeEpiFreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarFichaDeEpiFreeComponent]
    });
    fixture = TestBed.createComponent(GerarFichaDeEpiFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
