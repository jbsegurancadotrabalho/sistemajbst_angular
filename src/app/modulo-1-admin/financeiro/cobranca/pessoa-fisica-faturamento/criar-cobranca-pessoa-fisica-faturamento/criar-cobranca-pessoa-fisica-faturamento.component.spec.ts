import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCobrancaPessoaFisicaFaturamentoComponent } from './criar-cobranca-pessoa-fisica-faturamento.component';

describe('CriarCobrancaPessoaFisicaFaturamentoComponent', () => {
  let component: CriarCobrancaPessoaFisicaFaturamentoComponent;
  let fixture: ComponentFixture<CriarCobrancaPessoaFisicaFaturamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarCobrancaPessoaFisicaFaturamentoComponent]
    });
    fixture = TestBed.createComponent(CriarCobrancaPessoaFisicaFaturamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
