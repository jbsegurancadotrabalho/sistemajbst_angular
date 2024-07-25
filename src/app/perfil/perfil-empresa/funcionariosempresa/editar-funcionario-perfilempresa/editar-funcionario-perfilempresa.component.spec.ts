import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFuncionarioPerfilempresaComponent } from './editar-funcionario-perfilempresa.component';

describe('EditarFuncionarioPerfilempresaComponent', () => {
  let component: EditarFuncionarioPerfilempresaComponent;
  let fixture: ComponentFixture<EditarFuncionarioPerfilempresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarFuncionarioPerfilempresaComponent]
    });
    fixture = TestBed.createComponent(EditarFuncionarioPerfilempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
