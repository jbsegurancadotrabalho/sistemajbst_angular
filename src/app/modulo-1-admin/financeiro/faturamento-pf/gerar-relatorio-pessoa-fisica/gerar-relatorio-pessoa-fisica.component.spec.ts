import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarRelatorioPessoaFisicaComponent } from './gerar-relatorio-pessoa-fisica.component';

describe('GerarRelatorioPessoaFisicaComponent', () => {
  let component: GerarRelatorioPessoaFisicaComponent;
  let fixture: ComponentFixture<GerarRelatorioPessoaFisicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarRelatorioPessoaFisicaComponent]
    });
    fixture = TestBed.createComponent(GerarRelatorioPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
