import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEpiComponent } from './criar-epi.component';

describe('CriarEpiComponent', () => {
  let component: CriarEpiComponent;
  let fixture: ComponentFixture<CriarEpiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarEpiComponent]
    });
    fixture = TestBed.createComponent(CriarEpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
