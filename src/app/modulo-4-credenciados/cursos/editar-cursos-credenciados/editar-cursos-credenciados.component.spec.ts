import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCursosCredenciadosComponent } from './editar-cursos-credenciados.component';

describe('EditarCursosCredenciadosComponent', () => {
  let component: EditarCursosCredenciadosComponent;
  let fixture: ComponentFixture<EditarCursosCredenciadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCursosCredenciadosComponent]
    });
    fixture = TestBed.createComponent(EditarCursosCredenciadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
