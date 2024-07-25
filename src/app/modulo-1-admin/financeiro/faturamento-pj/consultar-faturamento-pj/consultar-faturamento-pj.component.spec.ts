import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFaturamentoPjComponent } from './consultar-faturamento-pj.component';

describe('ConsultarFaturamentoPjComponent', () => {
  let component: ConsultarFaturamentoPjComponent;
  let fixture: ComponentFixture<ConsultarFaturamentoPjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarFaturamentoPjComponent]
    });
    fixture = TestBed.createComponent(ConsultarFaturamentoPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
