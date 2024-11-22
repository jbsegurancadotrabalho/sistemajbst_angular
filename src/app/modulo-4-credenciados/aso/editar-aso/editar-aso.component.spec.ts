import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAsoComponent } from './editar-aso.component';

describe('EditarAsoComponent', () => {
  let component: EditarAsoComponent;
  let fixture: ComponentFixture<EditarAsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAsoComponent]
    });
    fixture = TestBed.createComponent(EditarAsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
