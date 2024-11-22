import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAgendaComponent } from './criar-agenda.component';

describe('CriarAgendaComponent', () => {
  let component: CriarAgendaComponent;
  let fixture: ComponentFixture<CriarAgendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarAgendaComponent]
    });
    fixture = TestBed.createComponent(CriarAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
