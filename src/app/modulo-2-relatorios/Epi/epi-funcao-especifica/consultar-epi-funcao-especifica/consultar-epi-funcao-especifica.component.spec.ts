import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEpiFuncaoEspecificaComponent } from './consultar-epi-funcao-especifica.component';

describe('ConsultarEpiFuncaoEspecificaComponent', () => {
  let component: ConsultarEpiFuncaoEspecificaComponent;
  let fixture: ComponentFixture<ConsultarEpiFuncaoEspecificaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEpiFuncaoEspecificaComponent]
    });
    fixture = TestBed.createComponent(ConsultarEpiFuncaoEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
