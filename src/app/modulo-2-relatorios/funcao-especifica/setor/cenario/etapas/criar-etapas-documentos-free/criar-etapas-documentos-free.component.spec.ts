import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEtapasDocumentosFreeComponent } from './criar-etapas-documentos-free.component';

describe('CriarEtapasDocumentosFreeComponent', () => {
  let component: CriarEtapasDocumentosFreeComponent;
  let fixture: ComponentFixture<CriarEtapasDocumentosFreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarEtapasDocumentosFreeComponent]
    });
    fixture = TestBed.createComponent(CriarEtapasDocumentosFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
