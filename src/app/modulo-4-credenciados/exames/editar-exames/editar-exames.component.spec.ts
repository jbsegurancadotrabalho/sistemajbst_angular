import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExamesComponent } from './editar-exames.component';

describe('EditarExamesComponent', () => {
  let component: EditarExamesComponent;
  let fixture: ComponentFixture<EditarExamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarExamesComponent]
    });
    fixture = TestBed.createComponent(EditarExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
