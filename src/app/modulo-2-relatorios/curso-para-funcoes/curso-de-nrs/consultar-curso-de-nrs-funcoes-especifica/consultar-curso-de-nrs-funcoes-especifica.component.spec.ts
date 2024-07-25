import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCursoDeNrsFuncoesEspecificaComponent } from './consultar-curso-de-nrs-funcoes-especifica.component';

describe('ConsultarCursoDeNrsFuncoesEspecificaComponent', () => {
  let component: ConsultarCursoDeNrsFuncoesEspecificaComponent;
  let fixture: ComponentFixture<ConsultarCursoDeNrsFuncoesEspecificaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarCursoDeNrsFuncoesEspecificaComponent]
    });
    fixture = TestBed.createComponent(ConsultarCursoDeNrsFuncoesEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
