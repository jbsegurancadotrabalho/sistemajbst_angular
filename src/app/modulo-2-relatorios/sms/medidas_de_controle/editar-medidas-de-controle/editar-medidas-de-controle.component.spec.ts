import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMedidasDeControleComponent } from './editar-medidas-de-controle.component';

describe('EditarMedidasDeControleComponent', () => {
  let component: EditarMedidasDeControleComponent;
  let fixture: ComponentFixture<EditarMedidasDeControleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarMedidasDeControleComponent]
    });
    fixture = TestBed.createComponent(EditarMedidasDeControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
