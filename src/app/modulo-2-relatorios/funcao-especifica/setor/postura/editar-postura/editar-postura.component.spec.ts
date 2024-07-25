import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPosturaComponent } from './editar-postura.component';

describe('EditarPosturaComponent', () => {
  let component: EditarPosturaComponent;
  let fixture: ComponentFixture<EditarPosturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPosturaComponent]
    });
    fixture = TestBed.createComponent(EditarPosturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
