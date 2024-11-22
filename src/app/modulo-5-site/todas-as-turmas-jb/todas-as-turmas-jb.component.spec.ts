import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasAsTurmasJbComponent } from './todas-as-turmas-jb.component';

describe('TodasAsTurmasJbComponent', () => {
  let component: TodasAsTurmasJbComponent;
  let fixture: ComponentFixture<TodasAsTurmasJbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodasAsTurmasJbComponent]
    });
    fixture = TestBed.createComponent(TodasAsTurmasJbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
