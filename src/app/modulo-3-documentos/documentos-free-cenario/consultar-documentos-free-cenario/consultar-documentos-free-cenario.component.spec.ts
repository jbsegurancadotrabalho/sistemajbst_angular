import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDocumentosFreeCenarioComponent } from './consultar-documentos-free-cenario.component';

describe('ConsultarDocumentosFreeCenarioComponent', () => {
  let component: ConsultarDocumentosFreeCenarioComponent;
  let fixture: ComponentFixture<ConsultarDocumentosFreeCenarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarDocumentosFreeCenarioComponent]
    });
    fixture = TestBed.createComponent(ConsultarDocumentosFreeCenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
