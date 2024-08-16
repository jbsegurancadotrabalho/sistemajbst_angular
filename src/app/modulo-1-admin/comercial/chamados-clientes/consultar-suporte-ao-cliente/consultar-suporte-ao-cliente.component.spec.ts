import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSuporteAoClienteComponent } from './consultar-suporte-ao-cliente.component';

describe('ConsultarSuporteAoClienteComponent', () => {
  let component: ConsultarSuporteAoClienteComponent;
  let fixture: ComponentFixture<ConsultarSuporteAoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarSuporteAoClienteComponent]
    });
    fixture = TestBed.createComponent(ConsultarSuporteAoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
