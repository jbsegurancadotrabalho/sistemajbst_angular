import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarExamesComponent } from './consultar-exames.component';

describe('ConsultarExamesComponent', () => {
  let component: ConsultarExamesComponent;
  let fixture: ComponentFixture<ConsultarExamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarExamesComponent]
    });
    fixture = TestBed.createComponent(ConsultarExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
