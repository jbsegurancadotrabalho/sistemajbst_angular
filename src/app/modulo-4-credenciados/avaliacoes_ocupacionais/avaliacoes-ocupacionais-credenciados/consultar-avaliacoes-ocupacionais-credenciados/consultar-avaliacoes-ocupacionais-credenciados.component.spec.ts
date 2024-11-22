import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAvaliacoesOcupacionaisCredenciadosComponent } from './consultar-avaliacoes-ocupacionais-credenciados.component';

describe('ConsultarAvaliacoesOcupacionaisCredenciadosComponent', () => {
  let component: ConsultarAvaliacoesOcupacionaisCredenciadosComponent;
  let fixture: ComponentFixture<ConsultarAvaliacoesOcupacionaisCredenciadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarAvaliacoesOcupacionaisCredenciadosComponent]
    });
    fixture = TestBed.createComponent(ConsultarAvaliacoesOcupacionaisCredenciadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
