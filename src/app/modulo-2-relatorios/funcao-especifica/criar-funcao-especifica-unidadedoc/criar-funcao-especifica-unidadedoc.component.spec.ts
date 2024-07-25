import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFuncaoEspecificaUnidadedocComponent } from './criar-funcao-especifica-unidadedoc.component';

describe('CriarFuncaoEspecificaUnidadedocComponent', () => {
  let component: CriarFuncaoEspecificaUnidadedocComponent;
  let fixture: ComponentFixture<CriarFuncaoEspecificaUnidadedocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarFuncaoEspecificaUnidadedocComponent]
    });
    fixture = TestBed.createComponent(CriarFuncaoEspecificaUnidadedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
