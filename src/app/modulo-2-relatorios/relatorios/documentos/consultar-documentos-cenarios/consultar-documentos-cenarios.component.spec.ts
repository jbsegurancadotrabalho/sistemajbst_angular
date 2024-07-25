import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDocumentosCenariosComponent } from './consultar-documentos-cenarios.component';

describe('ConsultarDocumentosCenariosComponent', () => {
  let component: ConsultarDocumentosCenariosComponent;
  let fixture: ComponentFixture<ConsultarDocumentosCenariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarDocumentosCenariosComponent]
    });
    fixture = TestBed.createComponent(ConsultarDocumentosCenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
