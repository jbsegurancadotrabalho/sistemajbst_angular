import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEtapasComponent } from './consultar-etapas.component';

describe('ConsultarEtapasComponent', () => {
  let component: ConsultarEtapasComponent;
  let fixture: ComponentFixture<ConsultarEtapasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEtapasComponent]
    });
    fixture = TestBed.createComponent(ConsultarEtapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
