import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEmpresasComponent } from './consultar-empresas.component';

describe('ConsultarEmpresasComponent', () => {
  let component: ConsultarEmpresasComponent;
  let fixture: ComponentFixture<ConsultarEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEmpresasComponent]
    });
    fixture = TestBed.createComponent(ConsultarEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
