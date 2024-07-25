import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFuncaoComponent } from './editar-funcao.component';

describe('EditarFuncaoComponent', () => {
  let component: EditarFuncaoComponent;
  let fixture: ComponentFixture<EditarFuncaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarFuncaoComponent]
    });
    fixture = TestBed.createComponent(EditarFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
