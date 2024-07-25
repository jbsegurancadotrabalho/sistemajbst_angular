import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarAprFreeComponent } from './gerar-apr-free.component';

describe('GerarAprFreeComponent', () => {
  let component: GerarAprFreeComponent;
  let fixture: ComponentFixture<GerarAprFreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarAprFreeComponent]
    });
    fixture = TestBed.createComponent(GerarAprFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
