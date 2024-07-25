import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTurmasComponent } from './editar-turmas.component';

describe('EditarTurmasComponent', () => {
  let component: EditarTurmasComponent;
  let fixture: ComponentFixture<EditarTurmasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarTurmasComponent]
    });
    fixture = TestBed.createComponent(EditarTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
