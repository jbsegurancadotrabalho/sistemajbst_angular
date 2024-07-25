import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContratoComponent } from './editar-contrato.component';

describe('EditarContratoComponent', () => {
  let component: EditarContratoComponent;
  let fixture: ComponentFixture<EditarContratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarContratoComponent]
    });
    fixture = TestBed.createComponent(EditarContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
