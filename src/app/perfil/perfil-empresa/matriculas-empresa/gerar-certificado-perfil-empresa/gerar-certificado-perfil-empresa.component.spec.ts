import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarCertificadoPerfilEmpresaComponent } from './gerar-certificado-perfil-empresa.component';

describe('GerarCertificadoPerfilEmpresaComponent', () => {
  let component: GerarCertificadoPerfilEmpresaComponent;
  let fixture: ComponentFixture<GerarCertificadoPerfilEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarCertificadoPerfilEmpresaComponent]
    });
    fixture = TestBed.createComponent(GerarCertificadoPerfilEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
