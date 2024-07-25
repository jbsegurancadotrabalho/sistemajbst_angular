import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTodosEnderecosComponent } from './editar-todos-enderecos.component';

describe('EditarTodosEnderecosComponent', () => {
  let component: EditarTodosEnderecosComponent;
  let fixture: ComponentFixture<EditarTodosEnderecosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarTodosEnderecosComponent]
    });
    fixture = TestBed.createComponent(EditarTodosEnderecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
