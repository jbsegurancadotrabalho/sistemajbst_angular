import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPedidoDeComprasComponent } from './cadastrar-pedido-de-compras.component';

describe('CadastrarPedidoDeComprasComponent', () => {
  let component: CadastrarPedidoDeComprasComponent;
  let fixture: ComponentFixture<CadastrarPedidoDeComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarPedidoDeComprasComponent]
    });
    fixture = TestBed.createComponent(CadastrarPedidoDeComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
