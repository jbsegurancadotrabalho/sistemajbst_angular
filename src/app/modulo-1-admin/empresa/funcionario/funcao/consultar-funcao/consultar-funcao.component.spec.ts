import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFuncaoComponent } from './consultar-funcao.component';

describe('ConsultarFuncaoComponent', () => {
  let component: ConsultarFuncaoComponent;
  let fixture: ComponentFixture<ConsultarFuncaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarFuncaoComponent]
    });
    fixture = TestBed.createComponent(ConsultarFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
