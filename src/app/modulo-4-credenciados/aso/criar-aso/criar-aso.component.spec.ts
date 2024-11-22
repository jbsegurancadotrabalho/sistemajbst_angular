import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAsoComponent } from './criar-aso.component';

describe('CriarAsoComponent', () => {
  let component: CriarAsoComponent;
  let fixture: ComponentFixture<CriarAsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarAsoComponent]
    });
    fixture = TestBed.createComponent(CriarAsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
