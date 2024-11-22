import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFormacaoSaudeComponent } from './criar-formacao-saude.component';

describe('CriarFormacaoSaudeComponent', () => {
  let component: CriarFormacaoSaudeComponent;
  let fixture: ComponentFixture<CriarFormacaoSaudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarFormacaoSaudeComponent]
    });
    fixture = TestBed.createComponent(CriarFormacaoSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
