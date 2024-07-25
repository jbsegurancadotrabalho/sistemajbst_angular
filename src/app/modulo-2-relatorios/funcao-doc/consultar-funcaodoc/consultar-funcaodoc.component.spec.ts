import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFuncaodocComponent } from './consultar-funcaodoc.component';

describe('ConsultarFuncaodocComponent', () => {
  let component: ConsultarFuncaodocComponent;
  let fixture: ComponentFixture<ConsultarFuncaodocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarFuncaodocComponent]
    });
    fixture = TestBed.createComponent(ConsultarFuncaodocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
