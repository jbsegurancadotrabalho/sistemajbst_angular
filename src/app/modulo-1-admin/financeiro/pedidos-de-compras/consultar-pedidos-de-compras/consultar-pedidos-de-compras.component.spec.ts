import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPedidosDeComprasComponent } from './consultar-pedidos-de-compras.component';

describe('ConsultarPedidosDeComprasComponent', () => {
  let component: ConsultarPedidosDeComprasComponent;
  let fixture: ComponentFixture<ConsultarPedidosDeComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarPedidosDeComprasComponent]
    });
    fixture = TestBed.createComponent(ConsultarPedidosDeComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
