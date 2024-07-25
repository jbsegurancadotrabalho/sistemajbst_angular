import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFaturamentoPfComponent } from './editar-faturamento-pf.component';

describe('EditarFaturamentoPfComponent', () => {
  let component: EditarFaturamentoPfComponent;
  let fixture: ComponentFixture<EditarFaturamentoPfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarFaturamentoPfComponent]
    });
    fixture = TestBed.createComponent(EditarFaturamentoPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
