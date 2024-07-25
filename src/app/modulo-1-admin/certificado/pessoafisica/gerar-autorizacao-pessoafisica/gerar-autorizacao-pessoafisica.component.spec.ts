import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarAutorizacaoPessoafisicaComponent } from './gerar-autorizacao-pessoafisica.component';

describe('GerarAutorizacaoPessoafisicaComponent', () => {
  let component: GerarAutorizacaoPessoafisicaComponent;
  let fixture: ComponentFixture<GerarAutorizacaoPessoafisicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarAutorizacaoPessoafisicaComponent]
    });
    fixture = TestBed.createComponent(GerarAutorizacaoPessoafisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
