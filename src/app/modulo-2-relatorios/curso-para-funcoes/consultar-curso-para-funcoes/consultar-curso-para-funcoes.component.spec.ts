import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCursoParaFuncoesComponent } from './consultar-curso-para-funcoes.component';

describe('ConsultarCursoParaFuncoesComponent', () => {
  let component: ConsultarCursoParaFuncoesComponent;
  let fixture: ComponentFixture<ConsultarCursoParaFuncoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarCursoParaFuncoesComponent]
    });
    fixture = TestBed.createComponent(ConsultarCursoParaFuncoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
