import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarCertificadoComponent } from './gerar-certificado.component';

describe('GerarCertificadoComponent', () => {
  let component: GerarCertificadoComponent;
  let fixture: ComponentFixture<GerarCertificadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarCertificadoComponent]
    });
    fixture = TestBed.createComponent(GerarCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
