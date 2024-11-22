import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAsoComponent } from './consultar-aso.component';

describe('ConsultarAsoComponent', () => {
  let component: ConsultarAsoComponent;
  let fixture: ComponentFixture<ConsultarAsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarAsoComponent]
    });
    fixture = TestBed.createComponent(ConsultarAsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
