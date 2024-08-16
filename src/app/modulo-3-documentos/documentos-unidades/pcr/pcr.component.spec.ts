import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcrComponent } from './pcr.component';

describe('PcrComponent', () => {
  let component: PcrComponent;
  let fixture: ComponentFixture<PcrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PcrComponent]
    });
    fixture = TestBed.createComponent(PcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
