import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarCertificadoSemSerAssinadoComponent } from './gerar-certificado-sem-ser-assinado.component';

describe('GerarCertificadoSemSerAssinadoComponent', () => {
  let component: GerarCertificadoSemSerAssinadoComponent;
  let fixture: ComponentFixture<GerarCertificadoSemSerAssinadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarCertificadoSemSerAssinadoComponent]
    });
    fixture = TestBed.createComponent(GerarCertificadoSemSerAssinadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
