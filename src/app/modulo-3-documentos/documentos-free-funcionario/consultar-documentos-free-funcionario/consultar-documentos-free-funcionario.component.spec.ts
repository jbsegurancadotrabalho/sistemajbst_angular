import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDocumentosFreeFuncionarioComponent } from './consultar-documentos-free-funcionario.component';

describe('ConsultarDocumentosFreeFuncionarioComponent', () => {
  let component: ConsultarDocumentosFreeFuncionarioComponent;
  let fixture: ComponentFixture<ConsultarDocumentosFreeFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarDocumentosFreeFuncionarioComponent]
    });
    fixture = TestBed.createComponent(ConsultarDocumentosFreeFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
