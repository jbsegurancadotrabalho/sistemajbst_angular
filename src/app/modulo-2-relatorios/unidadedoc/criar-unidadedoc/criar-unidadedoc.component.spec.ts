import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarUnidadedocComponent } from './criar-unidadedoc.component';

describe('CriarUnidadedocComponent', () => {
  let component: CriarUnidadedocComponent;
  let fixture: ComponentFixture<CriarUnidadedocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarUnidadedocComponent]
    });
    fixture = TestBed.createComponent(CriarUnidadedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
