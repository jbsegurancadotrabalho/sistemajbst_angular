import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPerigoComponent } from './consultar-perigo.component';

describe('ConsultarPerigoComponent', () => {
  let component: ConsultarPerigoComponent;
  let fixture: ComponentFixture<ConsultarPerigoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarPerigoComponent]
    });
    fixture = TestBed.createComponent(ConsultarPerigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
