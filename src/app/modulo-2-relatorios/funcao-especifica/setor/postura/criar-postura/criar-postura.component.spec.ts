import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPosturaComponent } from './criar-postura.component';

describe('CriarPosturaComponent', () => {
  let component: CriarPosturaComponent;
  let fixture: ComponentFixture<CriarPosturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarPosturaComponent]
    });
    fixture = TestBed.createComponent(CriarPosturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
