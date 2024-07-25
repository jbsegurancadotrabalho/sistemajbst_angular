import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarChamadoComponent } from './editar-chamado.component';

describe('EditarChamadoComponent', () => {
  let component: EditarChamadoComponent;
  let fixture: ComponentFixture<EditarChamadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarChamadoComponent]
    });
    fixture = TestBed.createComponent(EditarChamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
