import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEmpresadocComponent } from './consultar-empresadoc.component';

describe('ConsultarEmpresadocComponent', () => {
  let component: ConsultarEmpresadocComponent;
  let fixture: ComponentFixture<ConsultarEmpresadocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEmpresadocComponent]
    });
    fixture = TestBed.createComponent(ConsultarEmpresadocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
