import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarPtFreeComponent } from './gerar-pt-free.component';

describe('GerarPtFreeComponent', () => {
  let component: GerarPtFreeComponent;
  let fixture: ComponentFixture<GerarPtFreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarPtFreeComponent]
    });
    fixture = TestBed.createComponent(GerarPtFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
