import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMatriculasPedidosComponent } from './criar-matriculas-pedidos.component';

describe('CriarMatriculasPedidosComponent', () => {
  let component: CriarMatriculasPedidosComponent;
  let fixture: ComponentFixture<CriarMatriculasPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarMatriculasPedidosComponent]
    });
    fixture = TestBed.createComponent(CriarMatriculasPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
