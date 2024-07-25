import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFuncaodocComponent } from './editar-funcaodoc.component';

describe('EditarFuncaodocComponent', () => {
  let component: EditarFuncaodocComponent;
  let fixture: ComponentFixture<EditarFuncaodocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarFuncaodocComponent]
    });
    fixture = TestBed.createComponent(EditarFuncaodocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
