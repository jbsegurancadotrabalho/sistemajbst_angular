import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarRelatoriosPedidosDeComprasPerfilEmpresaComponent } from './gerar-relatorios-pedidos-de-compras-perfil-empresa.component';

describe('GerarRelatoriosPedidosDeComprasPerfilEmpresaComponent', () => {
  let component: GerarRelatoriosPedidosDeComprasPerfilEmpresaComponent;
  let fixture: ComponentFixture<GerarRelatoriosPedidosDeComprasPerfilEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarRelatoriosPedidosDeComprasPerfilEmpresaComponent]
    });
    fixture = TestBed.createComponent(GerarRelatoriosPedidosDeComprasPerfilEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
