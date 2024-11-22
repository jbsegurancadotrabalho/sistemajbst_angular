import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAvaliacoesOcupacionaisComponent } from './consultar-avaliacoes-ocupacionais.component';

describe('ConsultarAvaliacoesOcupacionaisComponent', () => {
  let component: ConsultarAvaliacoesOcupacionaisComponent;
  let fixture: ComponentFixture<ConsultarAvaliacoesOcupacionaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarAvaliacoesOcupacionaisComponent]
    });
    fixture = TestBed.createComponent(ConsultarAvaliacoesOcupacionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
