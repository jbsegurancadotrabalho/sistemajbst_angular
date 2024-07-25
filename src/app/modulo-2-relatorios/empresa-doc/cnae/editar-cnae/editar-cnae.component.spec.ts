import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCnaeComponent } from './editar-cnae.component';

describe('EditarCnaeComponent', () => {
  let component: EditarCnaeComponent;
  let fixture: ComponentFixture<EditarCnaeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCnaeComponent]
    });
    fixture = TestBed.createComponent(EditarCnaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
