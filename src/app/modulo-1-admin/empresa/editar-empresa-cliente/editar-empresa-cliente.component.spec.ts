import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEmpresaClienteComponent } from './editar-empresa-cliente.component';

describe('EditarEmpresaClienteComponent', () => {
  let component: EditarEmpresaClienteComponent;
  let fixture: ComponentFixture<EditarEmpresaClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEmpresaClienteComponent]
    });
    fixture = TestBed.createComponent(EditarEmpresaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
