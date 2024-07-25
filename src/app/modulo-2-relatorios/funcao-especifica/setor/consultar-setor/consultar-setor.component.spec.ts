import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSetorComponent } from './consultar-setor.component';

describe('ConsultarSetorComponent', () => {
  let component: ConsultarSetorComponent;
  let fixture: ComponentFixture<ConsultarSetorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarSetorComponent]
    });
    fixture = TestBed.createComponent(ConsultarSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
