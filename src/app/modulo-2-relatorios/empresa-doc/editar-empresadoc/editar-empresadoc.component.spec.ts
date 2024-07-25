import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEmpresadocComponent } from './editar-empresadoc.component';

describe('EditarEmpresadocComponent', () => {
  let component: EditarEmpresadocComponent;
  let fixture: ComponentFixture<EditarEmpresadocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEmpresadocComponent]
    });
    fixture = TestBed.createComponent(EditarEmpresadocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
