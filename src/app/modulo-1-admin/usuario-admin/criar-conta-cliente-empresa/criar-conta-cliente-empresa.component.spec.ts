import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarContaClienteEmpresaComponent } from './criar-conta-cliente-empresa.component';

describe('CriarContaClienteEmpresaComponent', () => {
  let component: CriarContaClienteEmpresaComponent;
  let fixture: ComponentFixture<CriarContaClienteEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarContaClienteEmpresaComponent]
    });
    fixture = TestBed.createComponent(CriarContaClienteEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
