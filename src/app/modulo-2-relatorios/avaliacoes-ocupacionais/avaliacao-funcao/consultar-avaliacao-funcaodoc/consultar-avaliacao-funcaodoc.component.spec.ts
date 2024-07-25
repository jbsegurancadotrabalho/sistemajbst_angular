import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAvaliacaoFuncaodocComponent } from './consultar-avaliacao-funcaodoc.component';

describe('ConsultarAvaliacaoFuncaodocComponent', () => {
  let component: ConsultarAvaliacaoFuncaodocComponent;
  let fixture: ComponentFixture<ConsultarAvaliacaoFuncaodocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarAvaliacaoFuncaodocComponent]
    });
    fixture = TestBed.createComponent(ConsultarAvaliacaoFuncaodocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
