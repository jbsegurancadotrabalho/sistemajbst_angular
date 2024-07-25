import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarAutorizacaoPerfilAlunoComponent } from './gerar-autorizacao-perfil-aluno.component';

describe('GerarAutorizacaoPerfilAlunoComponent', () => {
  let component: GerarAutorizacaoPerfilAlunoComponent;
  let fixture: ComponentFixture<GerarAutorizacaoPerfilAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarAutorizacaoPerfilAlunoComponent]
    });
    fixture = TestBed.createComponent(GerarAutorizacaoPerfilAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
