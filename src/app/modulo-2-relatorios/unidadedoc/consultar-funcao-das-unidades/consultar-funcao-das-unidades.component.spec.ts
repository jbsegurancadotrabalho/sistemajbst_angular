import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFuncaoDasUnidadesComponent } from './consultar-funcao-das-unidades.component';

describe('ConsultarFuncaoDasUnidadesComponent', () => {
  let component: ConsultarFuncaoDasUnidadesComponent;
  let fixture: ComponentFixture<ConsultarFuncaoDasUnidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarFuncaoDasUnidadesComponent]
    });
    fixture = TestBed.createComponent(ConsultarFuncaoDasUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
