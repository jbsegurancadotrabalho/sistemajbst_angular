import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDanosComponent } from './editar-danos.component';

describe('EditarDanosComponent', () => {
  let component: EditarDanosComponent;
  let fixture: ComponentFixture<EditarDanosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDanosComponent]
    });
    fixture = TestBed.createComponent(EditarDanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
