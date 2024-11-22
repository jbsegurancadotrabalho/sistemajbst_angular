import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarAsoComponent } from './gerar-aso.component';

describe('GerarAsoComponent', () => {
  let component: GerarAsoComponent;
  let fixture: ComponentFixture<GerarAsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarAsoComponent]
    });
    fixture = TestBed.createComponent(GerarAsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
