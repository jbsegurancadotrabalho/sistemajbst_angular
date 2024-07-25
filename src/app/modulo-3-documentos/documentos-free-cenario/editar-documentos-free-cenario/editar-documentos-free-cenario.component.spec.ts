import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDocumentosFreeCenarioComponent } from './editar-documentos-free-cenario.component';

describe('EditarDocumentosFreeCenarioComponent', () => {
  let component: EditarDocumentosFreeCenarioComponent;
  let fixture: ComponentFixture<EditarDocumentosFreeCenarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDocumentosFreeCenarioComponent]
    });
    fixture = TestBed.createComponent(EditarDocumentosFreeCenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
