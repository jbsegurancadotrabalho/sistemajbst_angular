import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEmpresaComponent } from './consultar-empresa.component';

describe('ConsultarEmpresaComponent', () => {
  let component: ConsultarEmpresaComponent;
  let fixture: ComponentFixture<ConsultarEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEmpresaComponent]
    });
    fixture = TestBed.createComponent(ConsultarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
