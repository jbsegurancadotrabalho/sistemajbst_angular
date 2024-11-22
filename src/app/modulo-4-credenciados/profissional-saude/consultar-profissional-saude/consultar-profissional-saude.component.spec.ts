import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProfissionalSaudeComponent } from './consultar-profissional-saude.component';

describe('ConsultarProfissionalSaudeComponent', () => {
  let component: ConsultarProfissionalSaudeComponent;
  let fixture: ComponentFixture<ConsultarProfissionalSaudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarProfissionalSaudeComponent]
    });
    fixture = TestBed.createComponent(ConsultarProfissionalSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
