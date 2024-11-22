import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarParticipanteComponent } from './editar-participante.component';

describe('EditarParticipanteComponent', () => {
  let component: EditarParticipanteComponent;
  let fixture: ComponentFixture<EditarParticipanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarParticipanteComponent]
    });
    fixture = TestBed.createComponent(EditarParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
