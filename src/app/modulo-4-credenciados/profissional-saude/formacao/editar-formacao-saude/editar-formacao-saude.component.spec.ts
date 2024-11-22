import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFormacaoSaudeComponent } from './editar-formacao-saude.component';

describe('EditarFormacaoSaudeComponent', () => {
  let component: EditarFormacaoSaudeComponent;
  let fixture: ComponentFixture<EditarFormacaoSaudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarFormacaoSaudeComponent]
    });
    fixture = TestBed.createComponent(EditarFormacaoSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
