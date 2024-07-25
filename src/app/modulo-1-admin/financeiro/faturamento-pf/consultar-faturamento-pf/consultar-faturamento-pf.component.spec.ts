import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFaturamentoPfComponent } from './consultar-faturamento-pf.component';

describe('ConsultarFaturamentoPfComponent', () => {
  let component: ConsultarFaturamentoPfComponent;
  let fixture: ComponentFixture<ConsultarFaturamentoPfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarFaturamentoPfComponent]
    });
    fixture = TestBed.createComponent(ConsultarFaturamentoPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
