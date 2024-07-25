import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDocumentosFreeCenarioComponent } from './criar-documentos-free-cenario.component';

describe('CriarDocumentosFreeCenarioComponent', () => {
  let component: CriarDocumentosFreeCenarioComponent;
  let fixture: ComponentFixture<CriarDocumentosFreeCenarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarDocumentosFreeCenarioComponent]
    });
    fixture = TestBed.createComponent(CriarDocumentosFreeCenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
