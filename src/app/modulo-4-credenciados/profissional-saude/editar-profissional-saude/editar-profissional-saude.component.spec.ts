import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProfissionalSaudeComponent } from './editar-profissional-saude.component';

describe('EditarProfissionalSaudeComponent', () => {
  let component: EditarProfissionalSaudeComponent;
  let fixture: ComponentFixture<EditarProfissionalSaudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarProfissionalSaudeComponent]
    });
    fixture = TestBed.createComponent(EditarProfissionalSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
