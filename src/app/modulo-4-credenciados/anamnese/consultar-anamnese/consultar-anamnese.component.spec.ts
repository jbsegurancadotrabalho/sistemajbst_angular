import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAnamneseComponent } from './consultar-anamnese.component';

describe('ConsultarAnamneseComponent', () => {
  let component: ConsultarAnamneseComponent;
  let fixture: ComponentFixture<ConsultarAnamneseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarAnamneseComponent]
    });
    fixture = TestBed.createComponent(ConsultarAnamneseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
