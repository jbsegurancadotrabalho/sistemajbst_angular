import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarAutorizacaoPerfilEmpresaComponent } from './gerar-autorizacao-perfil-empresa.component';

describe('GerarAutorizacaoPerfilEmpresaComponent', () => {
  let component: GerarAutorizacaoPerfilEmpresaComponent;
  let fixture: ComponentFixture<GerarAutorizacaoPerfilEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarAutorizacaoPerfilEmpresaComponent]
    });
    fixture = TestBed.createComponent(GerarAutorizacaoPerfilEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
