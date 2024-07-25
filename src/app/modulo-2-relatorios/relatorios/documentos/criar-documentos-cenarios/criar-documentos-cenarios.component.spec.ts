import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDocumentosCenariosComponent } from './criar-documentos-cenarios.component';

describe('CriarDocumentosCenariosComponent', () => {
  let component: CriarDocumentosCenariosComponent;
  let fixture: ComponentFixture<CriarDocumentosCenariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarDocumentosCenariosComponent]
    });
    fixture = TestBed.createComponent(CriarDocumentosCenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
