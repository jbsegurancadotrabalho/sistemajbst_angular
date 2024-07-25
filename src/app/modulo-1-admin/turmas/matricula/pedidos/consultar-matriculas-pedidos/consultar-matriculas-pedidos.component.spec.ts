import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMatriculasPedidosComponent } from './consultar-matriculas-pedidos.component';

describe('ConsultarMatriculasPedidosComponent', () => {
  let component: ConsultarMatriculasPedidosComponent;
  let fixture: ComponentFixture<ConsultarMatriculasPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarMatriculasPedidosComponent]
    });
    fixture = TestBed.createComponent(ConsultarMatriculasPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
