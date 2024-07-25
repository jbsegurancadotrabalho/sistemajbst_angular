import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculasPessoaFisicaGerarDocumentosComponent } from './matriculas-pessoa-fisica-gerar-documentos.component';

describe('MatriculasPessoaFisicaGerarDocumentosComponent', () => {
  let component: MatriculasPessoaFisicaGerarDocumentosComponent;
  let fixture: ComponentFixture<MatriculasPessoaFisicaGerarDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatriculasPessoaFisicaGerarDocumentosComponent]
    });
    fixture = TestBed.createComponent(MatriculasPessoaFisicaGerarDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
