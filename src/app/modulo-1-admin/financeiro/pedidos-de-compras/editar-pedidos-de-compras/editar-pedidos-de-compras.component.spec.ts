import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPedidosDeComprasComponent } from './editar-pedidos-de-compras.component';

describe('EditarPedidosDeComprasComponent', () => {
  let component: EditarPedidosDeComprasComponent;
  let fixture: ComponentFixture<EditarPedidosDeComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPedidosDeComprasComponent]
    });
    fixture = TestBed.createComponent(EditarPedidosDeComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
