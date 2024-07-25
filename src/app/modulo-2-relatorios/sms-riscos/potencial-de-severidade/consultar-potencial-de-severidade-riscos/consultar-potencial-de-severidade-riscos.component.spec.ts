import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPotencialDeSeveridadeRiscosComponent } from './consultar-potencial-de-severidade-riscos.component';

describe('ConsultarPotencialDeSeveridadeRiscosComponent', () => {
  let component: ConsultarPotencialDeSeveridadeRiscosComponent;
  let fixture: ComponentFixture<ConsultarPotencialDeSeveridadeRiscosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarPotencialDeSeveridadeRiscosComponent]
    });
    fixture = TestBed.createComponent(ConsultarPotencialDeSeveridadeRiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
