import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEspecializacaoSaudeComponent } from './criar-especializacao-saude.component';

describe('CriarEspecializacaoSaudeComponent', () => {
  let component: CriarEspecializacaoSaudeComponent;
  let fixture: ComponentFixture<CriarEspecializacaoSaudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarEspecializacaoSaudeComponent]
    });
    fixture = TestBed.createComponent(CriarEspecializacaoSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
