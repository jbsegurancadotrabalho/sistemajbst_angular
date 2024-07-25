import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMaquinasComponent } from './consultar-maquinas.component';

describe('ConsultarMaquinasComponent', () => {
  let component: ConsultarMaquinasComponent;
  let fixture: ComponentFixture<ConsultarMaquinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarMaquinasComponent]
    });
    fixture = TestBed.createComponent(ConsultarMaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
