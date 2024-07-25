import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCertificadoAlunosComponent } from './consultar-certificado-alunos.component';

describe('ConsultarCertificadoAlunosComponent', () => {
  let component: ConsultarCertificadoAlunosComponent;
  let fixture: ComponentFixture<ConsultarCertificadoAlunosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarCertificadoAlunosComponent]
    });
    fixture = TestBed.createComponent(ConsultarCertificadoAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
