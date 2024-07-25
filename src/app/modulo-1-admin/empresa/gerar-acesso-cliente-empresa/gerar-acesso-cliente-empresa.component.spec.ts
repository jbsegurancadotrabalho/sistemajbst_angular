import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarAcessoClienteEmpresaComponent } from './gerar-acesso-cliente-empresa.component';

describe('GerarAcessoClienteEmpresaComponent', () => {
  let component: GerarAcessoClienteEmpresaComponent;
  let fixture: ComponentFixture<GerarAcessoClienteEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarAcessoClienteEmpresaComponent]
    });
    fixture = TestBed.createComponent(GerarAcessoClienteEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
