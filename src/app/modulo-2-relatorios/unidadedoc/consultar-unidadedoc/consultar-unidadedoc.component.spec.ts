import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarUnidadedocComponent } from './consultar-unidadedoc.component';

describe('ConsultarUnidadedocComponent', () => {
  let component: ConsultarUnidadedocComponent;
  let fixture: ComponentFixture<ConsultarUnidadedocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarUnidadedocComponent]
    });
    fixture = TestBed.createComponent(ConsultarUnidadedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
