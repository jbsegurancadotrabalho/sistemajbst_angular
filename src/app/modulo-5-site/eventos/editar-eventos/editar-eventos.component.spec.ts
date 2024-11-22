import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEventosComponent } from './editar-eventos.component';

describe('EditarEventosComponent', () => {
  let component: EditarEventosComponent;
  let fixture: ComponentFixture<EditarEventosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEventosComponent]
    });
    fixture = TestBed.createComponent(EditarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
