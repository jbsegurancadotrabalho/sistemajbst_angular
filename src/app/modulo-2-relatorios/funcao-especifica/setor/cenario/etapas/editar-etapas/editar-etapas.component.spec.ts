import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEtapasComponent } from './editar-etapas.component';

describe('EditarEtapasComponent', () => {
  let component: EditarEtapasComponent;
  let fixture: ComponentFixture<EditarEtapasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEtapasComponent]
    });
    fixture = TestBed.createComponent(EditarEtapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
