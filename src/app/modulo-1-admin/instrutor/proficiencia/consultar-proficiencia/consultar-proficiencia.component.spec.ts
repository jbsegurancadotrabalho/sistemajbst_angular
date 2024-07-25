import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProficienciaComponent } from './consultar-proficiencia.component';

describe('ConsultarProficienciaComponent', () => {
  let component: ConsultarProficienciaComponent;
  let fixture: ComponentFixture<ConsultarProficienciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarProficienciaComponent]
    });
    fixture = TestBed.createComponent(ConsultarProficienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
