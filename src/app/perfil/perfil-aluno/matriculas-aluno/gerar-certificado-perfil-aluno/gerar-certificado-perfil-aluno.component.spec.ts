import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarCertificadoPerfilAlunoComponent } from './gerar-certificado-perfil-aluno.component';

describe('GerarCertificadoPerfilAlunoComponent', () => {
  let component: GerarCertificadoPerfilAlunoComponent;
  let fixture: ComponentFixture<GerarCertificadoPerfilAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarCertificadoPerfilAlunoComponent]
    });
    fixture = TestBed.createComponent(GerarCertificadoPerfilAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
