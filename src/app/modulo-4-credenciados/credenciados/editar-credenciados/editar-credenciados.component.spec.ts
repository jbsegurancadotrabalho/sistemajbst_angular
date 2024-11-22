import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCredenciadosComponent } from './editar-credenciados.component';

describe('EditarCredenciadosComponent', () => {
  let component: EditarCredenciadosComponent;
  let fixture: ComponentFixture<EditarCredenciadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCredenciadosComponent]
    });
    fixture = TestBed.createComponent(EditarCredenciadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
