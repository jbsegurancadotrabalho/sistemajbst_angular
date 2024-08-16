import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarChamadosClientesComponent } from './consultar-chamados-clientes.component';

describe('ConsultarChamadosClientesComponent', () => {
  let component: ConsultarChamadosClientesComponent;
  let fixture: ComponentFixture<ConsultarChamadosClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarChamadosClientesComponent]
    });
    fixture = TestBed.createComponent(ConsultarChamadosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
