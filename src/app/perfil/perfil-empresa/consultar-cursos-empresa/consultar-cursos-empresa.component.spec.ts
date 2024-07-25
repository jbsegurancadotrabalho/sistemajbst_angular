import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCursosEmpresaComponent } from './consultar-cursos-empresa.component';

describe('ConsultarCursosEmpresaComponent', () => {
  let component: ConsultarCursosEmpresaComponent;
  let fixture: ComponentFixture<ConsultarCursosEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarCursosEmpresaComponent]
    });
    fixture = TestBed.createComponent(ConsultarCursosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
