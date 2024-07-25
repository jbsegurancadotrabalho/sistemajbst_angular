import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEmpresaDocComponent } from './criar-empresa-doc.component';

describe('CriarEmpresaDocComponent', () => {
  let component: CriarEmpresaDocComponent;
  let fixture: ComponentFixture<CriarEmpresaDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarEmpresaDocComponent]
    });
    fixture = TestBed.createComponent(CriarEmpresaDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
