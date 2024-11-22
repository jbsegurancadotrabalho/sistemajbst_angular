import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAvaliacoesOcupacionaisComponent } from './criar-avaliacoes-ocupacionais.component';

describe('CriarAvaliacoesOcupacionaisComponent', () => {
  let component: CriarAvaliacoesOcupacionaisComponent;
  let fixture: ComponentFixture<CriarAvaliacoesOcupacionaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarAvaliacoesOcupacionaisComponent]
    });
    fixture = TestBed.createComponent(CriarAvaliacoesOcupacionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
