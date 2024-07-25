import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMedidasDeControleComponent } from './consultar-medidas-de-controle.component';

describe('ConsultarMedidasDeControleComponent', () => {
  let component: ConsultarMedidasDeControleComponent;
  let fixture: ComponentFixture<ConsultarMedidasDeControleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarMedidasDeControleComponent]
    });
    fixture = TestBed.createComponent(ConsultarMedidasDeControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
