import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarAprComponent } from './gerar-apr.component';

describe('GerarAprComponent', () => {
  let component: GerarAprComponent;
  let fixture: ComponentFixture<GerarAprComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarAprComponent]
    });
    fixture = TestBed.createComponent(GerarAprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
