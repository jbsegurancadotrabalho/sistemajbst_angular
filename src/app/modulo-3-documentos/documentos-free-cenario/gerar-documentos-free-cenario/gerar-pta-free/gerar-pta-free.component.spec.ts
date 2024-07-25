import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarPtaFreeComponent } from './gerar-pta-free.component';

describe('GerarPtaFreeComponent', () => {
  let component: GerarPtaFreeComponent;
  let fixture: ComponentFixture<GerarPtaFreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarPtaFreeComponent]
    });
    fixture = TestBed.createComponent(GerarPtaFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
