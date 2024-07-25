import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEpiComponent } from './consultar-epi.component';

describe('ConsultarEpiComponent', () => {
  let component: ConsultarEpiComponent;
  let fixture: ComponentFixture<ConsultarEpiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEpiComponent]
    });
    fixture = TestBed.createComponent(ConsultarEpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
