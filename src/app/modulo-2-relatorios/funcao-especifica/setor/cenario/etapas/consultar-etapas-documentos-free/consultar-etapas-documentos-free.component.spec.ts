import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEtapasDocumentosFreeComponent } from './consultar-etapas-documentos-free.component';

describe('ConsultarEtapasDocumentosFreeComponent', () => {
  let component: ConsultarEtapasDocumentosFreeComponent;
  let fixture: ComponentFixture<ConsultarEtapasDocumentosFreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEtapasDocumentosFreeComponent]
    });
    fixture = TestBed.createComponent(ConsultarEtapasDocumentosFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
