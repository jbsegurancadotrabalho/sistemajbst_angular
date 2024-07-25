import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerigoComponent } from './editar-perigo.component';

describe('EditarPerigoComponent', () => {
  let component: EditarPerigoComponent;
  let fixture: ComponentFixture<EditarPerigoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPerigoComponent]
    });
    fixture = TestBed.createComponent(EditarPerigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
