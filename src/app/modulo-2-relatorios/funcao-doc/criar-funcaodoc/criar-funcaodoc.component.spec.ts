import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFuncaodocComponent } from './criar-funcaodoc.component';

describe('CriarFuncaodocComponent', () => {
  let component: CriarFuncaodocComponent;
  let fixture: ComponentFixture<CriarFuncaodocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarFuncaodocComponent]
    });
    fixture = TestBed.createComponent(CriarFuncaodocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
