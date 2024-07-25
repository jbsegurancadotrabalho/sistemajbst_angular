import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMatriculasFaturamentoPfComponent } from './criar-matriculas-faturamento-pf.component';

describe('CriarMatriculasFaturamentoPfComponent', () => {
  let component: CriarMatriculasFaturamentoPfComponent;
  let fixture: ComponentFixture<CriarMatriculasFaturamentoPfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarMatriculasFaturamentoPfComponent]
    });
    fixture = TestBed.createComponent(CriarMatriculasFaturamentoPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
