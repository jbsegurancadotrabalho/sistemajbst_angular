import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarListaDePresencaPessoafisicaComponent } from './gerar-lista-de-presenca-pessoafisica.component';

describe('GerarListaDePresencaPessoafisicaComponent', () => {
  let component: GerarListaDePresencaPessoafisicaComponent;
  let fixture: ComponentFixture<GerarListaDePresencaPessoafisicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarListaDePresencaPessoafisicaComponent]
    });
    fixture = TestBed.createComponent(GerarListaDePresencaPessoafisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
