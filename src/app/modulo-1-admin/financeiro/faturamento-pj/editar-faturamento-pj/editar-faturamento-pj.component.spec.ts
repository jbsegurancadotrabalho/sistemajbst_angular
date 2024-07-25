import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFaturamentoPjComponent } from './editar-faturamento-pj.component';

describe('EditarFaturamentoPjComponent', () => {
  let component: EditarFaturamentoPjComponent;
  let fixture: ComponentFixture<EditarFaturamentoPjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarFaturamentoPjComponent]
    });
    fixture = TestBed.createComponent(EditarFaturamentoPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
