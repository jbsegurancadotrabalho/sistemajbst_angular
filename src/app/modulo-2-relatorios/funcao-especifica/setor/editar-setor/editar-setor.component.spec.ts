import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSetorComponent } from './editar-setor.component';

describe('EditarSetorComponent', () => {
  let component: EditarSetorComponent;
  let fixture: ComponentFixture<EditarSetorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSetorComponent]
    });
    fixture = TestBed.createComponent(EditarSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
