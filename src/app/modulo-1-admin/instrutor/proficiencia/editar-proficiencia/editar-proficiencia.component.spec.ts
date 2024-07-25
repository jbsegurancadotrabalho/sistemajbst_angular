import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProficienciaComponent } from './editar-proficiencia.component';

describe('EditarProficienciaComponent', () => {
  let component: EditarProficienciaComponent;
  let fixture: ComponentFixture<EditarProficienciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarProficienciaComponent]
    });
    fixture = TestBed.createComponent(EditarProficienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
