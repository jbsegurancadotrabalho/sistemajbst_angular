import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMedidasDeControleRiscosComponent } from './consultar-medidas-de-controle-riscos.component';

describe('ConsultarMedidasDeControleRiscosComponent', () => {
  let component: ConsultarMedidasDeControleRiscosComponent;
  let fixture: ComponentFixture<ConsultarMedidasDeControleRiscosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarMedidasDeControleRiscosComponent]
    });
    fixture = TestBed.createComponent(ConsultarMedidasDeControleRiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
