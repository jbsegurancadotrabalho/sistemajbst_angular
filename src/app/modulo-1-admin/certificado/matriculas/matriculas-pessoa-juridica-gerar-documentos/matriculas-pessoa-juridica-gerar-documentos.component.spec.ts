import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculasPessoaJuridicaGerarDocumentosComponent } from './matriculas-pessoa-juridica-gerar-documentos.component';

describe('MatriculasPessoaJuridicaGerarDocumentosComponent', () => {
  let component: MatriculasPessoaJuridicaGerarDocumentosComponent;
  let fixture: ComponentFixture<MatriculasPessoaJuridicaGerarDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatriculasPessoaJuridicaGerarDocumentosComponent]
    });
    fixture = TestBed.createComponent(MatriculasPessoaJuridicaGerarDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
