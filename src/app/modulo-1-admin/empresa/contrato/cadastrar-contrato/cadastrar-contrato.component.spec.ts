import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarContratoComponent } from './cadastrar-contrato.component';

describe('CadastrarContratoComponent', () => {
  let component: CadastrarContratoComponent;
  let fixture: ComponentFixture<CadastrarContratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarContratoComponent]
    });
    fixture = TestBed.createComponent(CadastrarContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
