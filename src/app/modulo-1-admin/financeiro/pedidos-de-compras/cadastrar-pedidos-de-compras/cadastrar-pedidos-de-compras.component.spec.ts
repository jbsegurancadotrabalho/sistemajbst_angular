import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPedidosDeComprasComponent } from './cadastrar-pedidos-de-compras.component';

describe('CadastrarPedidosDeComprasComponent', () => {
  let component: CadastrarPedidosDeComprasComponent;
  let fixture: ComponentFixture<CadastrarPedidosDeComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarPedidosDeComprasComponent]
    });
    fixture = TestBed.createComponent(CadastrarPedidosDeComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
