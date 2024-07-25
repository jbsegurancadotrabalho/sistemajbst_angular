import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarInstrutorComponent } from './consultar-instrutor.component';

describe('ConsultarInstrutorComponent', () => {
  let component: ConsultarInstrutorComponent;
  let fixture: ComponentFixture<ConsultarInstrutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarInstrutorComponent]
    });
    fixture = TestBed.createComponent(ConsultarInstrutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
