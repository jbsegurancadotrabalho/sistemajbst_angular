import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFuncaoEspecificaUnidadedocComponent } from './editar-funcao-especifica-unidadedoc.component';

describe('EditarFuncaoEspecificaUnidadedocComponent', () => {
  let component: EditarFuncaoEspecificaUnidadedocComponent;
  let fixture: ComponentFixture<EditarFuncaoEspecificaUnidadedocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarFuncaoEspecificaUnidadedocComponent]
    });
    fixture = TestBed.createComponent(EditarFuncaoEspecificaUnidadedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
