import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarParticipanteComponent } from './criar-participante.component';

describe('CriarParticipanteComponent', () => {
  let component: CriarParticipanteComponent;
  let fixture: ComponentFixture<CriarParticipanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarParticipanteComponent]
    });
    fixture = TestBed.createComponent(CriarParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
