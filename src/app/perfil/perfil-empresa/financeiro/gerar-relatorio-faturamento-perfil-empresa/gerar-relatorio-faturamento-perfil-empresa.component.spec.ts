import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarRelatorioFaturamentoPerfilEmpresaComponent } from './gerar-relatorio-faturamento-perfil-empresa.component';

describe('GerarRelatorioFaturamentoPerfilEmpresaComponent', () => {
  let component: GerarRelatorioFaturamentoPerfilEmpresaComponent;
  let fixture: ComponentFixture<GerarRelatorioFaturamentoPerfilEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarRelatorioFaturamentoPerfilEmpresaComponent]
    });
    fixture = TestBed.createComponent(GerarRelatorioFaturamentoPerfilEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
