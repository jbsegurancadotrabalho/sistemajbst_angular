import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRelatoriosComponent } from './consultar-relatorios.component';

describe('ConsultarRelatoriosComponent', () => {
  let component: ConsultarRelatoriosComponent;
  let fixture: ComponentFixture<ConsultarRelatoriosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarRelatoriosComponent]
    });
    fixture = TestBed.createComponent(ConsultarRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
