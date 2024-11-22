import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFuncaoPorNomeComponent } from './consultar-funcao-por-nome.component';

describe('ConsultarFuncaoPorNomeComponent', () => {
  let component: ConsultarFuncaoPorNomeComponent;
  let fixture: ComponentFixture<ConsultarFuncaoPorNomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarFuncaoPorNomeComponent]
    });
    fixture = TestBed.createComponent(ConsultarFuncaoPorNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
