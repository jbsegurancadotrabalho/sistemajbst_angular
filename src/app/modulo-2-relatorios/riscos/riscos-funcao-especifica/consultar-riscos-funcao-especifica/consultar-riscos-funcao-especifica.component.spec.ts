import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRiscosFuncaoEspecificaComponent } from './consultar-riscos-funcao-especifica.component';

describe('ConsultarRiscosFuncaoEspecificaComponent', () => {
  let component: ConsultarRiscosFuncaoEspecificaComponent;
  let fixture: ComponentFixture<ConsultarRiscosFuncaoEspecificaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarRiscosFuncaoEspecificaComponent]
    });
    fixture = TestBed.createComponent(ConsultarRiscosFuncaoEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
