import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarAutorizacaoComponent } from './gerar-autorizacao.component';

describe('GerarAutorizacaoComponent', () => {
  let component: GerarAutorizacaoComponent;
  let fixture: ComponentFixture<GerarAutorizacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarAutorizacaoComponent]
    });
    fixture = TestBed.createComponent(GerarAutorizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
