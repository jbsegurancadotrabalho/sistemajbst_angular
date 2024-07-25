import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarExamesFuncaoEspecificaComponent } from './consultar-exames-funcao-especifica.component';

describe('ConsultarExamesFuncaoEspecificaComponent', () => {
  let component: ConsultarExamesFuncaoEspecificaComponent;
  let fixture: ComponentFixture<ConsultarExamesFuncaoEspecificaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarExamesFuncaoEspecificaComponent]
    });
    fixture = TestBed.createComponent(ConsultarExamesFuncaoEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
