import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAvaliacoesOcupacionaisCredenciadosComponent } from './criar-avaliacoes-ocupacionais-credenciados.component';

describe('CriarAvaliacoesOcupacionaisCredenciadosComponent', () => {
  let component: CriarAvaliacoesOcupacionaisCredenciadosComponent;
  let fixture: ComponentFixture<CriarAvaliacoesOcupacionaisCredenciadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarAvaliacoesOcupacionaisCredenciadosComponent]
    });
    fixture = TestBed.createComponent(CriarAvaliacoesOcupacionaisCredenciadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
