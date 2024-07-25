import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPerigoComponent } from './criar-perigo.component';

describe('CriarPerigoComponent', () => {
  let component: CriarPerigoComponent;
  let fixture: ComponentFixture<CriarPerigoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarPerigoComponent]
    });
    fixture = TestBed.createComponent(CriarPerigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
