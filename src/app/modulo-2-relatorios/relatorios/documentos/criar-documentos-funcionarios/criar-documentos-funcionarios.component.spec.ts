import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDocumentosFuncionariosComponent } from './criar-documentos-funcionarios.component';

describe('CriarDocumentosFuncionariosComponent', () => {
  let component: CriarDocumentosFuncionariosComponent;
  let fixture: ComponentFixture<CriarDocumentosFuncionariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarDocumentosFuncionariosComponent]
    });
    fixture = TestBed.createComponent(CriarDocumentosFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
