import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEmpresaClienteComponent } from './cadastrar-empresa-cliente.component';

describe('CadastrarEmpresaClienteComponent', () => {
  let component: CadastrarEmpresaClienteComponent;
  let fixture: ComponentFixture<CadastrarEmpresaClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarEmpresaClienteComponent]
    });
    fixture = TestBed.createComponent(CadastrarEmpresaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
