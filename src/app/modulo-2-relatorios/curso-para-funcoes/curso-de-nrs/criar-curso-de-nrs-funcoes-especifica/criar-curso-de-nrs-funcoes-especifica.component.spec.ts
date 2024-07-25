import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCursoDeNrsFuncoesEspecificaComponent } from './criar-curso-de-nrs-funcoes-especifica.component';

describe('CriarCursoDeNrsFuncoesEspecificaComponent', () => {
  let component: CriarCursoDeNrsFuncoesEspecificaComponent;
  let fixture: ComponentFixture<CriarCursoDeNrsFuncoesEspecificaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarCursoDeNrsFuncoesEspecificaComponent]
    });
    fixture = TestBed.createComponent(CriarCursoDeNrsFuncoesEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
