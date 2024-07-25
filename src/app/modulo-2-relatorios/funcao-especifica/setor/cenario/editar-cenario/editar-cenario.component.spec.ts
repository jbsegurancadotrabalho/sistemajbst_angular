import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCenarioComponent } from './editar-cenario.component';

describe('EditarCenarioComponent', () => {
  let component: EditarCenarioComponent;
  let fixture: ComponentFixture<EditarCenarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCenarioComponent]
    });
    fixture = TestBed.createComponent(EditarCenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
