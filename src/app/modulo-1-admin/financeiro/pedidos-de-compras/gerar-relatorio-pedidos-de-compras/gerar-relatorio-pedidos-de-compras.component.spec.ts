import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarRelatorioPedidosDeComprasComponent } from './gerar-relatorio-pedidos-de-compras.component';

describe('GerarRelatorioPedidosDeComprasComponent', () => {
  let component: GerarRelatorioPedidosDeComprasComponent;
  let fixture: ComponentFixture<GerarRelatorioPedidosDeComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarRelatorioPedidosDeComprasComponent]
    });
    fixture = TestBed.createComponent(GerarRelatorioPedidosDeComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
