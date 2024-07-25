import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMatriculasFaturamentoPjComponent } from './consultar-matriculas-faturamento-pj.component';

describe('ConsultarMatriculasFaturamentoPjComponent', () => {
  let component: ConsultarMatriculasFaturamentoPjComponent;
  let fixture: ComponentFixture<ConsultarMatriculasFaturamentoPjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarMatriculasFaturamentoPjComponent]
    });
    fixture = TestBed.createComponent(ConsultarMatriculasFaturamentoPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
