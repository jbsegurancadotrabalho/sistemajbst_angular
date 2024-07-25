import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDanosComponent } from './consultar-danos.component';

describe('ConsultarDanosComponent', () => {
  let component: ConsultarDanosComponent;
  let fixture: ComponentFixture<ConsultarDanosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarDanosComponent]
    });
    fixture = TestBed.createComponent(ConsultarDanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
