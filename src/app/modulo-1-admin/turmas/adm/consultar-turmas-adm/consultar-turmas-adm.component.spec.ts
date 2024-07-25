import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTurmasAdmComponent } from './consultar-turmas-adm.component';

describe('ConsultarTurmasAdmComponent', () => {
  let component: ConsultarTurmasAdmComponent;
  let fixture: ComponentFixture<ConsultarTurmasAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarTurmasAdmComponent]
    });
    fixture = TestBed.createComponent(ConsultarTurmasAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
