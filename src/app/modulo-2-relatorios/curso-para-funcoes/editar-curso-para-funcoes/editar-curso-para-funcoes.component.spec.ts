import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCursoParaFuncoesComponent } from './editar-curso-para-funcoes.component';

describe('EditarCursoParaFuncoesComponent', () => {
  let component: EditarCursoParaFuncoesComponent;
  let fixture: ComponentFixture<EditarCursoParaFuncoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCursoParaFuncoesComponent]
    });
    fixture = TestBed.createComponent(EditarCursoParaFuncoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
