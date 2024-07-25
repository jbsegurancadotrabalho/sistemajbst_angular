import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMatriculasEmpresaComponent } from './consultar-matriculas-empresa.component';

describe('ConsultarMatriculasEmpresaComponent', () => {
  let component: ConsultarMatriculasEmpresaComponent;
  let fixture: ComponentFixture<ConsultarMatriculasEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarMatriculasEmpresaComponent]
    });
    fixture = TestBed.createComponent(ConsultarMatriculasEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
