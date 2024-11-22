import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarParticipanteComponent } from './consultar-participante.component';

describe('ConsultarParticipanteComponent', () => {
  let component: ConsultarParticipanteComponent;
  let fixture: ComponentFixture<ConsultarParticipanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarParticipanteComponent]
    });
    fixture = TestBed.createComponent(ConsultarParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
