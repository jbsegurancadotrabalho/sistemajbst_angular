import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFuncionarioPerfilempresaComponent } from './cadastrar-funcionario-perfilempresa.component';

describe('CadastrarFuncionarioPerfilempresaComponent', () => {
  let component: CadastrarFuncionarioPerfilempresaComponent;
  let fixture: ComponentFixture<CadastrarFuncionarioPerfilempresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarFuncionarioPerfilempresaComponent]
    });
    fixture = TestBed.createComponent(CadastrarFuncionarioPerfilempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
