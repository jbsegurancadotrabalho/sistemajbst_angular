import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCobrancaEmpresaFaturamentoComponent } from './criar-cobranca-empresa-faturamento.component';

describe('CriarCobrancaEmpresaFaturamentoComponent', () => {
  let component: CriarCobrancaEmpresaFaturamentoComponent;
  let fixture: ComponentFixture<CriarCobrancaEmpresaFaturamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarCobrancaEmpresaFaturamentoComponent]
    });
    fixture = TestBed.createComponent(CriarCobrancaEmpresaFaturamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
