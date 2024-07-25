import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDadosAlunoParticularComponent } from './consultar-dados-aluno-particular.component';

describe('ConsultarDadosAlunoParticularComponent', () => {
  let component: ConsultarDadosAlunoParticularComponent;
  let fixture: ComponentFixture<ConsultarDadosAlunoParticularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarDadosAlunoParticularComponent]
    });
    fixture = TestBed.createComponent(ConsultarDadosAlunoParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
