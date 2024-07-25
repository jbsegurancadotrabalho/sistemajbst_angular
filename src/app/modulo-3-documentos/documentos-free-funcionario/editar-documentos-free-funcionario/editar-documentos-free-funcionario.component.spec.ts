import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDocumentosFreeFuncionarioComponent } from './editar-documentos-free-funcionario.component';

describe('EditarDocumentosFreeFuncionarioComponent', () => {
  let component: EditarDocumentosFreeFuncionarioComponent;
  let fixture: ComponentFixture<EditarDocumentosFreeFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDocumentosFreeFuncionarioComponent]
    });
    fixture = TestBed.createComponent(EditarDocumentosFreeFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
