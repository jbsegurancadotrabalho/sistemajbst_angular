import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespostaSuporteAoClienteComponent } from './resposta-suporte-ao-cliente.component';

describe('RespostaSuporteAoClienteComponent', () => {
  let component: RespostaSuporteAoClienteComponent;
  let fixture: ComponentFixture<RespostaSuporteAoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RespostaSuporteAoClienteComponent]
    });
    fixture = TestBed.createComponent(RespostaSuporteAoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
