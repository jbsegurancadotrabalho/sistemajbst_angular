import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarExamesGeralComponent } from './consultar-exames-geral.component';

describe('ConsultarExamesGeralComponent', () => {
  let component: ConsultarExamesGeralComponent;
  let fixture: ComponentFixture<ConsultarExamesGeralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarExamesGeralComponent]
    });
    fixture = TestBed.createComponent(ConsultarExamesGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
