import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDocumentosComponent } from './criar-documentos.component';

describe('CriarDocumentosComponent', () => {
  let component: CriarDocumentosComponent;
  let fixture: ComponentFixture<CriarDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarDocumentosComponent]
    });
    fixture = TestBed.createComponent(CriarDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
