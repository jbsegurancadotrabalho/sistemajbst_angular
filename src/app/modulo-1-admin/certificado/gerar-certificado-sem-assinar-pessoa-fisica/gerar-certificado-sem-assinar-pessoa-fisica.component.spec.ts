import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarCertificadoSemAssinarPessoaFisicaComponent } from './gerar-certificado-sem-assinar-pessoa-fisica.component';

describe('GerarCertificadoSemAssinarPessoaFisicaComponent', () => {
  let component: GerarCertificadoSemAssinarPessoaFisicaComponent;
  let fixture: ComponentFixture<GerarCertificadoSemAssinarPessoaFisicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarCertificadoSemAssinarPessoaFisicaComponent]
    });
    fixture = TestBed.createComponent(GerarCertificadoSemAssinarPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
