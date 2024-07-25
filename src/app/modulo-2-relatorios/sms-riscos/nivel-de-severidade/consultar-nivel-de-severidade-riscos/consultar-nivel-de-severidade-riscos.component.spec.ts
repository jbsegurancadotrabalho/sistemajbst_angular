import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarNivelDeSeveridadeRiscosComponent } from './consultar-nivel-de-severidade-riscos.component';

describe('ConsultarNivelDeSeveridadeRiscosComponent', () => {
  let component: ConsultarNivelDeSeveridadeRiscosComponent;
  let fixture: ComponentFixture<ConsultarNivelDeSeveridadeRiscosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarNivelDeSeveridadeRiscosComponent]
    });
    fixture = TestBed.createComponent(ConsultarNivelDeSeveridadeRiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
