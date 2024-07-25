import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPessoaFisicaComponent } from './cadastrar-pessoa-fisica.component';

describe('CadastrarPessoaFisicaComponent', () => {
  let component: CadastrarPessoaFisicaComponent;
  let fixture: ComponentFixture<CadastrarPessoaFisicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarPessoaFisicaComponent]
    });
    fixture = TestBed.createComponent(CadastrarPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
