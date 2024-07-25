import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDocumentosPorUnidadesComponent } from './consultar-documentos-por-unidades.component';

describe('ConsultarDocumentosPorUnidadesComponent', () => {
  let component: ConsultarDocumentosPorUnidadesComponent;
  let fixture: ComponentFixture<ConsultarDocumentosPorUnidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarDocumentosPorUnidadesComponent]
    });
    fixture = TestBed.createComponent(ConsultarDocumentosPorUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
