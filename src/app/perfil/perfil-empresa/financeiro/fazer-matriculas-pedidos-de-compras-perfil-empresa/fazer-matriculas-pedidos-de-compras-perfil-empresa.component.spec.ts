import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazerMatriculasPedidosDeComprasPerfilEmpresaComponent } from './fazer-matriculas-pedidos-de-compras-perfil-empresa.component';

describe('FazerMatriculasPedidosDeComprasPerfilEmpresaComponent', () => {
  let component: FazerMatriculasPedidosDeComprasPerfilEmpresaComponent;
  let fixture: ComponentFixture<FazerMatriculasPedidosDeComprasPerfilEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FazerMatriculasPedidosDeComprasPerfilEmpresaComponent]
    });
    fixture = TestBed.createComponent(FazerMatriculasPedidosDeComprasPerfilEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
