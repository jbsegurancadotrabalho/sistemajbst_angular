import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEspecializacaoSaudeComponent } from './consultar-especializacao-saude.component';

describe('ConsultarEspecializacaoSaudeComponent', () => {
  let component: ConsultarEspecializacaoSaudeComponent;
  let fixture: ComponentFixture<ConsultarEspecializacaoSaudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEspecializacaoSaudeComponent]
    });
    fixture = TestBed.createComponent(ConsultarEspecializacaoSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
