import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarProfissionalSaudeComponent } from './criar-profissional-saude.component';

describe('CriarProfissionalSaudeComponent', () => {
  let component: CriarProfissionalSaudeComponent;
  let fixture: ComponentFixture<CriarProfissionalSaudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarProfissionalSaudeComponent]
    });
    fixture = TestBed.createComponent(CriarProfissionalSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
