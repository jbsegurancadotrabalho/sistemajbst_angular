import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAvaliacaoFuncaodocComponent } from './editar-avaliacao-funcaodoc.component';

describe('EditarAvaliacaoFuncaodocComponent', () => {
  let component: EditarAvaliacaoFuncaodocComponent;
  let fixture: ComponentFixture<EditarAvaliacaoFuncaodocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAvaliacaoFuncaodocComponent]
    });
    fixture = TestBed.createComponent(EditarAvaliacaoFuncaodocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
