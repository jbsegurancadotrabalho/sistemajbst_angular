import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarRelatorioPessoaJuridicaComponent } from './gerar-relatorio-pessoa-juridica.component';

describe('GerarRelatorioPessoaJuridicaComponent', () => {
  let component: GerarRelatorioPessoaJuridicaComponent;
  let fixture: ComponentFixture<GerarRelatorioPessoaJuridicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarRelatorioPessoaJuridicaComponent]
    });
    fixture = TestBed.createComponent(GerarRelatorioPessoaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
