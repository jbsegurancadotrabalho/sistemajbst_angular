import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDanosRiscosComponent } from './consultar-danos-riscos.component';

describe('ConsultarDanosRiscosComponent', () => {
  let component: ConsultarDanosRiscosComponent;
  let fixture: ComponentFixture<ConsultarDanosRiscosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarDanosRiscosComponent]
    });
    fixture = TestBed.createComponent(ConsultarDanosRiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
