import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEnderecoComponent } from './consultar-endereco.component';

describe('ConsultarEnderecoComponent', () => {
  let component: ConsultarEnderecoComponent;
  let fixture: ComponentFixture<ConsultarEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEnderecoComponent]
    });
    fixture = TestBed.createComponent(ConsultarEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
