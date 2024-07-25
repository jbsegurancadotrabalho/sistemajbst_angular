import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAvaliacaoFuncaoEspecificaComponent } from './criar-avaliacao-funcao-especifica.component';

describe('CriarAvaliacaoFuncaoEspecificaComponent', () => {
  let component: CriarAvaliacaoFuncaoEspecificaComponent;
  let fixture: ComponentFixture<CriarAvaliacaoFuncaoEspecificaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarAvaliacaoFuncaoEspecificaComponent]
    });
    fixture = TestBed.createComponent(CriarAvaliacaoFuncaoEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
