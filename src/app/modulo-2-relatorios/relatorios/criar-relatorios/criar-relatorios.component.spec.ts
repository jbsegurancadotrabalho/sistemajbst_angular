import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarRelatoriosComponent } from './criar-relatorios.component';

describe('CriarRelatoriosComponent', () => {
  let component: CriarRelatoriosComponent;
  let fixture: ComponentFixture<CriarRelatoriosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarRelatoriosComponent]
    });
    fixture = TestBed.createComponent(CriarRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
