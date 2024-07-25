import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRiscosComponent } from './editar-riscos.component';

describe('EditarRiscosComponent', () => {
  let component: EditarRiscosComponent;
  let fixture: ComponentFixture<EditarRiscosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarRiscosComponent]
    });
    fixture = TestBed.createComponent(EditarRiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
