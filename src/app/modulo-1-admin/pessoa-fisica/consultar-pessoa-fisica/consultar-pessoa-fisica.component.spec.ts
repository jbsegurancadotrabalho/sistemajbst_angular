import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPessoaFisicaComponent } from './consultar-pessoa-fisica.component';

describe('ConsultarPessoaFisicaComponent', () => {
  let component: ConsultarPessoaFisicaComponent;
  let fixture: ComponentFixture<ConsultarPessoaFisicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarPessoaFisicaComponent]
    });
    fixture = TestBed.createComponent(ConsultarPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
