import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarChamadoComponent } from './consultar-chamado.component';

describe('ConsultarChamadoComponent', () => {
  let component: ConsultarChamadoComponent;
  let fixture: ComponentFixture<ConsultarChamadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarChamadoComponent]
    });
    fixture = TestBed.createComponent(ConsultarChamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
