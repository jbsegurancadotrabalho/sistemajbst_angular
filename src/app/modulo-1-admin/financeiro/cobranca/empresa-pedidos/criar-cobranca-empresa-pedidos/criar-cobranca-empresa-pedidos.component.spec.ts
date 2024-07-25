import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCobrancaEmpresaPedidosComponent } from './criar-cobranca-empresa-pedidos.component';

describe('CriarCobrancaEmpresaPedidosComponent', () => {
  let component: CriarCobrancaEmpresaPedidosComponent;
  let fixture: ComponentFixture<CriarCobrancaEmpresaPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarCobrancaEmpresaPedidosComponent]
    });
    fixture = TestBed.createComponent(CriarCobrancaEmpresaPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
