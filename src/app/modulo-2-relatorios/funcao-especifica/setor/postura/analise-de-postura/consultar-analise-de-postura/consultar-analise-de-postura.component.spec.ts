import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAnaliseDePosturaComponent } from './consultar-analise-de-postura.component';

describe('ConsultarAnaliseDePosturaComponent', () => {
  let component: ConsultarAnaliseDePosturaComponent;
  let fixture: ComponentFixture<ConsultarAnaliseDePosturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarAnaliseDePosturaComponent]
    });
    fixture = TestBed.createComponent(ConsultarAnaliseDePosturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
