import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEventosComponent } from './consultar-eventos.component';

describe('ConsultarEventosComponent', () => {
  let component: ConsultarEventosComponent;
  let fixture: ComponentFixture<ConsultarEventosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEventosComponent]
    });
    fixture = TestBed.createComponent(ConsultarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
