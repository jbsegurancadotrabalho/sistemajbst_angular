import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAnaliseDePosturaComponent } from './editar-analise-de-postura.component';

describe('EditarAnaliseDePosturaComponent', () => {
  let component: EditarAnaliseDePosturaComponent;
  let fixture: ComponentFixture<EditarAnaliseDePosturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAnaliseDePosturaComponent]
    });
    fixture = TestBed.createComponent(EditarAnaliseDePosturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
