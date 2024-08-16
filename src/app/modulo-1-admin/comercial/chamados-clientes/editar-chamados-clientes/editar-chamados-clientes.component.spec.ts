import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarChamadosClientesComponent } from './editar-chamados-clientes.component';

describe('EditarChamadosClientesComponent', () => {
  let component: EditarChamadosClientesComponent;
  let fixture: ComponentFixture<EditarChamadosClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarChamadosClientesComponent]
    });
    fixture = TestBed.createComponent(EditarChamadosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
