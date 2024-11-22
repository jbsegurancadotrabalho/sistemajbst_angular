import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAgendamentoComponent } from './editar-agendamento.component';

describe('EditarAgendamentoComponent', () => {
  let component: EditarAgendamentoComponent;
  let fixture: ComponentFixture<EditarAgendamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAgendamentoComponent]
    });
    fixture = TestBed.createComponent(EditarAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
