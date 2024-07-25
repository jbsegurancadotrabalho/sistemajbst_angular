import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDocumentosFreeFuncionarioComponent } from './criar-documentos-free-funcionario.component';

describe('CriarDocumentosFreeFuncionarioComponent', () => {
  let component: CriarDocumentosFreeFuncionarioComponent;
  let fixture: ComponentFixture<CriarDocumentosFreeFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarDocumentosFreeFuncionarioComponent]
    });
    fixture = TestBed.createComponent(CriarDocumentosFreeFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
