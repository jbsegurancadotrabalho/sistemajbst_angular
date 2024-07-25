import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUnidadedocComponent } from './editar-unidadedoc.component';

describe('EditarUnidadedocComponent', () => {
  let component: EditarUnidadedocComponent;
  let fixture: ComponentFixture<EditarUnidadedocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarUnidadedocComponent]
    });
    fixture = TestBed.createComponent(EditarUnidadedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
