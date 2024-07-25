import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMatriculasFaturamentoPjComponent } from './criar-matriculas-faturamento-pj.component';

describe('CriarMatriculasFaturamentoPjComponent', () => {
  let component: CriarMatriculasFaturamentoPjComponent;
  let fixture: ComponentFixture<CriarMatriculasFaturamentoPjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarMatriculasFaturamentoPjComponent]
    });
    fixture = TestBed.createComponent(CriarMatriculasFaturamentoPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
