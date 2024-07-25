import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPerigoFuncaoEspecificaComponent } from './consultar-perigo-funcao-especifica.component';

describe('ConsultarPerigoFuncaoEspecificaComponent', () => {
  let component: ConsultarPerigoFuncaoEspecificaComponent;
  let fixture: ComponentFixture<ConsultarPerigoFuncaoEspecificaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarPerigoFuncaoEspecificaComponent]
    });
    fixture = TestBed.createComponent(ConsultarPerigoFuncaoEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
