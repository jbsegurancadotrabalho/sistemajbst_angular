import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFuncaoEspecificaUnidadedocComponent } from './consultar-funcao-especifica-unidadedoc.component';

describe('ConsultarFuncaoEspecificaUnidadedocComponent', () => {
  let component: ConsultarFuncaoEspecificaUnidadedocComponent;
  let fixture: ComponentFixture<ConsultarFuncaoEspecificaUnidadedocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarFuncaoEspecificaUnidadedocComponent]
    });
    fixture = TestBed.createComponent(ConsultarFuncaoEspecificaUnidadedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
