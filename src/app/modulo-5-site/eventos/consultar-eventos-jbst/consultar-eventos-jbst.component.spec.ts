import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEventosJbstComponent } from './consultar-eventos-jbst.component';

describe('ConsultarEventosJbstComponent', () => {
  let component: ConsultarEventosJbstComponent;
  let fixture: ComponentFixture<ConsultarEventosJbstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEventosJbstComponent]
    });
    fixture = TestBed.createComponent(ConsultarEventosJbstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
