import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAnamneseComponent } from './editar-anamnese.component';

describe('EditarAnamneseComponent', () => {
  let component: EditarAnamneseComponent;
  let fixture: ComponentFixture<EditarAnamneseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAnamneseComponent]
    });
    fixture = TestBed.createComponent(EditarAnamneseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
