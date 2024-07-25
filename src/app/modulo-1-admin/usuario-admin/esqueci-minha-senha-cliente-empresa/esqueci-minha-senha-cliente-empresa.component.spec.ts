import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqueciMinhaSenhaClienteEmpresaComponent } from './esqueci-minha-senha-cliente-empresa.component';

describe('EsqueciMinhaSenhaClienteEmpresaComponent', () => {
  let component: EsqueciMinhaSenhaClienteEmpresaComponent;
  let fixture: ComponentFixture<EsqueciMinhaSenhaClienteEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsqueciMinhaSenhaClienteEmpresaComponent]
    });
    fixture = TestBed.createComponent(EsqueciMinhaSenhaClienteEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
