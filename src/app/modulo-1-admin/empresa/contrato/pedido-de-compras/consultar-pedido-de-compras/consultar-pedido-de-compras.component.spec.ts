import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPedidoDeComprasComponent } from './consultar-pedido-de-compras.component';

describe('ConsultarPedidoDeComprasComponent', () => {
  let component: ConsultarPedidoDeComprasComponent;
  let fixture: ComponentFixture<ConsultarPedidoDeComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarPedidoDeComprasComponent]
    });
    fixture = TestBed.createComponent(ConsultarPedidoDeComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
