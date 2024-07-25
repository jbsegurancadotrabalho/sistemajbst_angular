import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAvaliacaoFuncaoEspecificaComponent } from './consultar-avaliacao-funcao-especifica.component';

describe('ConsultarAvaliacaoFuncaoEspecificaComponent', () => {
  let component: ConsultarAvaliacaoFuncaoEspecificaComponent;
  let fixture: ComponentFixture<ConsultarAvaliacaoFuncaoEspecificaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarAvaliacaoFuncaoEspecificaComponent]
    });
    fixture = TestBed.createComponent(ConsultarAvaliacaoFuncaoEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
