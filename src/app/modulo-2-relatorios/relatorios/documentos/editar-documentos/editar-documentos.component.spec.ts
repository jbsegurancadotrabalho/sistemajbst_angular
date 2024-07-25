import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDocumentosComponent } from './editar-documentos.component';

describe('EditarDocumentosComponent', () => {
  let component: EditarDocumentosComponent;
  let fixture: ComponentFixture<EditarDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDocumentosComponent]
    });
    fixture = TestBed.createComponent(EditarDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
