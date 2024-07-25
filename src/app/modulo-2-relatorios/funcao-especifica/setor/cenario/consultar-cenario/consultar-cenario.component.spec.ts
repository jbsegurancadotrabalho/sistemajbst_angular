import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCenarioComponent } from './consultar-cenario.component';

describe('ConsultarCenarioComponent', () => {
  let component: ConsultarCenarioComponent;
  let fixture: ComponentFixture<ConsultarCenarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarCenarioComponent]
    });
    fixture = TestBed.createComponent(ConsultarCenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
