import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFormacaoSaudeComponent } from './consultar-formacao-saude.component';

describe('ConsultarFormacaoSaudeComponent', () => {
  let component: ConsultarFormacaoSaudeComponent;
  let fixture: ComponentFixture<ConsultarFormacaoSaudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarFormacaoSaudeComponent]
    });
    fixture = TestBed.createComponent(ConsultarFormacaoSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
