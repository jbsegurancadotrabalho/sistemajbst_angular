import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCursoParaFuncoesComponent } from './criar-curso-para-funcoes.component';

describe('CriarCursoParaFuncoesComponent', () => {
  let component: CriarCursoParaFuncoesComponent;
  let fixture: ComponentFixture<CriarCursoParaFuncoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarCursoParaFuncoesComponent]
    });
    fixture = TestBed.createComponent(CriarCursoParaFuncoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
