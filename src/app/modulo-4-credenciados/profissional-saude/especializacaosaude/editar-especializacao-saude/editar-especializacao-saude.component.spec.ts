import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEspecializacaoSaudeComponent } from './editar-especializacao-saude.component';

describe('EditarEspecializacaoSaudeComponent', () => {
  let component: EditarEspecializacaoSaudeComponent;
  let fixture: ComponentFixture<EditarEspecializacaoSaudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEspecializacaoSaudeComponent]
    });
    fixture = TestBed.createComponent(EditarEspecializacaoSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
