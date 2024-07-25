import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPedidoDeComprasComponent } from './editar-pedido-de-compras.component';

describe('EditarPedidoDeComprasComponent', () => {
  let component: EditarPedidoDeComprasComponent;
  let fixture: ComponentFixture<EditarPedidoDeComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPedidoDeComprasComponent]
    });
    fixture = TestBed.createComponent(EditarPedidoDeComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
