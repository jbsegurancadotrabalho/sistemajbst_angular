import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRelatoriosComponent } from './editar-relatorios.component';

describe('EditarRelatoriosComponent', () => {
  let component: EditarRelatoriosComponent;
  let fixture: ComponentFixture<EditarRelatoriosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarRelatoriosComponent]
    });
    fixture = TestBed.createComponent(EditarRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
