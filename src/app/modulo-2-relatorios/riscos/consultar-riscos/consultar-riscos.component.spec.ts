import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRiscosComponent } from './consultar-riscos.component';

describe('ConsultarRiscosComponent', () => {
  let component: ConsultarRiscosComponent;
  let fixture: ComponentFixture<ConsultarRiscosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarRiscosComponent]
    });
    fixture = TestBed.createComponent(ConsultarRiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
