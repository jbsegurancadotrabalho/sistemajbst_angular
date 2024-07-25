import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCnaeComponent } from './consultar-cnae.component';

describe('ConsultarCnaeComponent', () => {
  let component: ConsultarCnaeComponent;
  let fixture: ComponentFixture<ConsultarCnaeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarCnaeComponent]
    });
    fixture = TestBed.createComponent(ConsultarCnaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
