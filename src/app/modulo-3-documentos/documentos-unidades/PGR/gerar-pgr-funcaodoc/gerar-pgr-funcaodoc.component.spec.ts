import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarPgrFuncaodocComponent } from './gerar-pgr-funcaodoc.component';

describe('GerarPgrFuncaodocComponent', () => {
  let component: GerarPgrFuncaodocComponent;
  let fixture: ComponentFixture<GerarPgrFuncaodocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarPgrFuncaodocComponent]
    });
    fixture = TestBed.createComponent(GerarPgrFuncaodocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
