import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPosturaComponent } from './consultar-postura.component';

describe('ConsultarPosturaComponent', () => {
  let component: ConsultarPosturaComponent;
  let fixture: ComponentFixture<ConsultarPosturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarPosturaComponent]
    });
    fixture = TestBed.createComponent(ConsultarPosturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
