import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarFichaDeEpiComponent } from './gerar-ficha-de-epi.component';

describe('GerarFichaDeEpiComponent', () => {
  let component: GerarFichaDeEpiComponent;
  let fixture: ComponentFixture<GerarFichaDeEpiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarFichaDeEpiComponent]
    });
    fixture = TestBed.createComponent(GerarFichaDeEpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
