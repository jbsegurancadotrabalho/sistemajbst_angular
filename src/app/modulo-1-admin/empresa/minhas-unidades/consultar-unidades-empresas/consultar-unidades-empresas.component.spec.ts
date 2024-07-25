import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarUnidadesEmpresasComponent } from './consultar-unidades-empresas.component';

describe('ConsultarUnidadesEmpresasComponent', () => {
  let component: ConsultarUnidadesEmpresasComponent;
  let fixture: ComponentFixture<ConsultarUnidadesEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarUnidadesEmpresasComponent]
    });
    fixture = TestBed.createComponent(ConsultarUnidadesEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
