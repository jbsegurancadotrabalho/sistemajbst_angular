import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarCertificadoPessoafisicaComponent } from './gerar-certificado-pessoafisica.component';

describe('GerarCertificadoPessoafisicaComponent', () => {
  let component: GerarCertificadoPessoafisicaComponent;
  let fixture: ComponentFixture<GerarCertificadoPessoafisicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarCertificadoPessoafisicaComponent]
    });
    fixture = TestBed.createComponent(GerarCertificadoPessoafisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
