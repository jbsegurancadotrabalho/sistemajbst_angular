import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarExamesComponent } from './criar-exames.component';

describe('CriarExamesComponent', () => {
  let component: CriarExamesComponent;
  let fixture: ComponentFixture<CriarExamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarExamesComponent]
    });
    fixture = TestBed.createComponent(CriarExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
