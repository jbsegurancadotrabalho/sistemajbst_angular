import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCredenciadosComponent } from './consultar-credenciados.component';

describe('ConsultarCredenciadosComponent', () => {
  let component: ConsultarCredenciadosComponent;
  let fixture: ComponentFixture<ConsultarCredenciadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarCredenciadosComponent]
    });
    fixture = TestBed.createComponent(ConsultarCredenciadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
