import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUnidadeComponent } from './editar-unidade.component';

describe('EditarUnidadeComponent', () => {
  let component: EditarUnidadeComponent;
  let fixture: ComponentFixture<EditarUnidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarUnidadeComponent]
    });
    fixture = TestBed.createComponent(EditarUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
