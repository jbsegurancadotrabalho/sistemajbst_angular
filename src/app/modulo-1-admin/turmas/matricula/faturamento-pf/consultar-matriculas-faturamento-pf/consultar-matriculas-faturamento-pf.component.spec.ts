import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMatriculasFaturamentoPfComponent } from './consultar-matriculas-faturamento-pf.component';

describe('ConsultarMatriculasFaturamentoPfComponent', () => {
  let component: ConsultarMatriculasFaturamentoPfComponent;
  let fixture: ComponentFixture<ConsultarMatriculasFaturamentoPfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarMatriculasFaturamentoPfComponent]
    });
    fixture = TestBed.createComponent(ConsultarMatriculasFaturamentoPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
