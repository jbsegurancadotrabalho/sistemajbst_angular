import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarContatosComponent } from './consultar-contatos.component';

describe('ConsultarContatosComponent', () => {
  let component: ConsultarContatosComponent;
  let fixture: ComponentFixture<ConsultarContatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarContatosComponent]
    });
    fixture = TestBed.createComponent(ConsultarContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
