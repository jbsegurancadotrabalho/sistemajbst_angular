import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFuncaodocPorNomeComponent } from './consultar-funcaodoc-por-nome.component';

describe('ConsultarFuncaodocPorNomeComponent', () => {
  let component: ConsultarFuncaodocPorNomeComponent;
  let fixture: ComponentFixture<ConsultarFuncaodocPorNomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarFuncaodocPorNomeComponent]
    });
    fixture = TestBed.createComponent(ConsultarFuncaodocPorNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
