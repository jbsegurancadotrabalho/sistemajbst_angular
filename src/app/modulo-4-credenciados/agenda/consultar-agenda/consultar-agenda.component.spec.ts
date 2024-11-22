import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAgendaComponent } from './consultar-agenda.component';

describe('ConsultarAgendaComponent', () => {
  let component: ConsultarAgendaComponent;
  let fixture: ComponentFixture<ConsultarAgendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarAgendaComponent]
    });
    fixture = TestBed.createComponent(ConsultarAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
