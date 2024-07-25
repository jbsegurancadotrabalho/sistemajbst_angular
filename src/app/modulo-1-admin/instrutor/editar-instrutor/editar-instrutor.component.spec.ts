import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInstrutorComponent } from './editar-instrutor.component';

describe('EditarInstrutorComponent', () => {
  let component: EditarInstrutorComponent;
  let fixture: ComponentFixture<EditarInstrutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarInstrutorComponent]
    });
    fixture = TestBed.createComponent(EditarInstrutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
