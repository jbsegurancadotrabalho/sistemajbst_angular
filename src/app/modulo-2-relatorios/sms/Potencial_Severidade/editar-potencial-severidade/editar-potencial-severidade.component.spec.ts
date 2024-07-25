import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPotencialSeveridadeComponent } from './editar-potencial-severidade.component';

describe('EditarPotencialSeveridadeComponent', () => {
  let component: EditarPotencialSeveridadeComponent;
  let fixture: ComponentFixture<EditarPotencialSeveridadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPotencialSeveridadeComponent]
    });
    fixture = TestBed.createComponent(EditarPotencialSeveridadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
