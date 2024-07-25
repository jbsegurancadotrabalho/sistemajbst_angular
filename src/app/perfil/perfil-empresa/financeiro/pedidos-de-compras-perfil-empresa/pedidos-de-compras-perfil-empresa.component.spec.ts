import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosDeComprasPerfilEmpresaComponent } from './pedidos-de-compras-perfil-empresa.component';

describe('PedidosDeComprasPerfilEmpresaComponent', () => {
  let component: PedidosDeComprasPerfilEmpresaComponent;
  let fixture: ComponentFixture<PedidosDeComprasPerfilEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosDeComprasPerfilEmpresaComponent]
    });
    fixture = TestBed.createComponent(PedidosDeComprasPerfilEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
