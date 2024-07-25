import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEpiComponent } from './editar-epi.component';

describe('EditarEpiComponent', () => {
  let component: EditarEpiComponent;
  let fixture: ComponentFixture<EditarEpiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEpiComponent]
    });
    fixture = TestBed.createComponent(EditarEpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
