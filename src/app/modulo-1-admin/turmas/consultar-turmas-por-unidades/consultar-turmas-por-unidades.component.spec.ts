import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTurmasPorUnidadesComponent } from './consultar-turmas-por-unidades.component';

describe('ConsultarTurmasPorUnidadesComponent', () => {
  let component: ConsultarTurmasPorUnidadesComponent;
  let fixture: ComponentFixture<ConsultarTurmasPorUnidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarTurmasPorUnidadesComponent]
    });
    fixture = TestBed.createComponent(ConsultarTurmasPorUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
