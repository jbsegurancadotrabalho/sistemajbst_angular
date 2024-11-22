import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarExamesPorLocalidadeComponent } from './consultar-exames-por-localidade.component';

describe('ConsultarExamesPorLocalidadeComponent', () => {
  let component: ConsultarExamesPorLocalidadeComponent;
  let fixture: ComponentFixture<ConsultarExamesPorLocalidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarExamesPorLocalidadeComponent]
    });
    fixture = TestBed.createComponent(ConsultarExamesPorLocalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
