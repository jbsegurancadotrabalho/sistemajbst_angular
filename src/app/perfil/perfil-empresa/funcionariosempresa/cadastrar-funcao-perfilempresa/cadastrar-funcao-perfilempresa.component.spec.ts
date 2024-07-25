import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFuncaoPerfilempresaComponent } from './cadastrar-funcao-perfilempresa.component';

describe('CadastrarFuncaoPerfilempresaComponent', () => {
  let component: CadastrarFuncaoPerfilempresaComponent;
  let fixture: ComponentFixture<CadastrarFuncaoPerfilempresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarFuncaoPerfilempresaComponent]
    });
    fixture = TestBed.createComponent(CadastrarFuncaoPerfilempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
